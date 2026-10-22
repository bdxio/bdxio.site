<script setup lang="ts">
import merriweatherUrl from '@fontsource/merriweather/files/merriweather-latin-700-normal.woff?url';
import { ASSOCIATION_NAME } from '~/services/constants';
import type { Edition, Talk } from '~/types';

definePageMeta({ layout: false, featureFlag: 'schedulePdf' });

const edition = useEdition();

useHead({ title: `Programme PDF | ${ASSOCIATION_NAME}` });
useSeoMeta({ robots: 'noindex' });

const [{ data: editions }, { data: talks }]: [{ data: Ref<Edition[]> }, { data: Ref<Talk[]> }] = await Promise.all([
  useAPI('/editions', {
    params: {
      'fields[0]': 'date',
      'fields[1]': 'duration',
      'filters[year][$eq]': edition,
    },
  }),
  useAPI('/talks', {
    params: {
      populate: '*',
      'pagination[limit]': 100,
      'filters[edition][year][$eq]': edition,
      'filters[backup][$eq]': false,
    },
  }),
]);

if (!editions.value[0]) {
  throw createError({ statusCode: 404, statusMessage: 'Edition not found' });
}

const editionData = editions.value[0];

const dayFormatter = new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

const days = computed(() =>
  Array.from({ length: editionData.duration || 1 }, (_, index) => {
    const day = index + 1;
    const date = dayFormatter.format(getEditionDayDate(editionData.date, day));
    return { day, date, talks: talks.value.filter((talk) => talk.day === day) };
  })
);

const photos = ref<Record<number, string>>({});
const photosLoaded = ref(false);
const generating = ref<number>();
const error = ref<string>();

onMounted(async () => {
  await loadSpeakerPhotos(talks.value, (speakerId, photo) => {
    photos.value[speakerId] = photo;
  });
  photosLoaded.value = true;
});

async function fetchBytes(url: string) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${url} : ${response.status}`);
  return response.arrayBuffer();
}

async function download(day: number, dayTalks: Talk[]) {
  generating.value = day;
  error.value = undefined;

  try {
    const [template, titleFont] = await Promise.all([
      fetchBytes(`/programme-bdxio-${edition}-template.pdf`),
      fetchBytes(merriweatherUrl),
    ]);
    const pdf = await generateSchedulePdf({ template, titleFont, talks: dayTalks, photos: photos.value });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([pdf as BlobPart], { type: 'application/pdf' }));
    link.download = `programme-bdxio-${edition}-${day}.pdf`;
    link.click();
    URL.revokeObjectURL(link.href);
  } catch (cause) {
    error.value = cause instanceof Error ? cause.message : String(cause);
  } finally {
    generating.value = undefined;
  }
}
</script>

<template>
  <main class="schedule-pdf">
    <h1>Programme PDF {{ edition }}</h1>
    <p>
      Génère le programme à partir du template <code>/programme-bdxio-{{ edition }}-template.pdf</code> et des données de
      l'API.
    </p>
    <p v-if="!photosLoaded" class="schedule-pdf-status">Chargement des photos des speakers…</p>
    <ul>
      <li v-for="group in days" :key="group.day">
        <button type="button" :disabled="generating !== undefined || !photosLoaded" @click="download(group.day, group.talks)">
          {{ generating === group.day ? 'Génération…' : `Télécharger ${group.date} (PDF)` }}
        </button>
      </li>
    </ul>
    <p v-if="error" class="schedule-pdf-error" role="alert">Échec de la génération : {{ error }}</p>
  </main>
</template>

<style scoped lang="css">
.schedule-pdf {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 1rem;
  text-align: center;
}

.schedule-pdf ul {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.schedule-pdf button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: var(--colors-bdxio-blue-light);
  color: var(--colors-bdxio-light);
  font-size: 1rem;
}

.schedule-pdf button:disabled {
  opacity: 0.6;
  cursor: wait;
}

.schedule-pdf-error {
  color: var(--colors-red);
}
</style>
