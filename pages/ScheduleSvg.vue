<script setup lang="ts">
import { ASSOCIATION_NAME } from '~/services/constants';
import type { Edition, Talk } from '~/types';

definePageMeta({ layout: false, featureFlag: 'scheduleSvg' });

const edition = useEdition();

useHead({ title: `Programme SVG | ${ASSOCIATION_NAME}` });
useSeoMeta({ robots: 'noindex' });

const [{ data: editions }, { data: talks }]: [{ data: Ref<Edition[]> }, { data: Ref<Talk[]> }] = await Promise.all([
  useAPI('/editions', {
    params: {
      'fields[0]': 'date',
      'fields[1]': 'duration',
      'fields[2]': 'placeName',
      'fields[3]': 'placeAddress',
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
const place = [editionData.placeName, editionData.placeAddress].filter(Boolean).join(' · ');

const dayFormatter = new Intl.DateTimeFormat('fr-FR', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const days = computed(() =>
  Array.from({ length: editionData.duration || 1 }, (_, index) => {
    const day = index + 1;
    const title = dayFormatter
      .format(getEditionDayDate(editionData.date, day))
      .replace(/(^|\s)(\S)/g, (_, space, char) => space + char.toUpperCase());
    return { day, title, talks: talks.value.filter((talk) => talk.day === day) };
  })
);

const photos = ref<Record<number, string>>({});

onMounted(() =>
  loadSpeakerPhotos(talks.value, (speakerId, photo) => {
    photos.value[speakerId] = photo;
  })
);

function toDataUrl(href: string) {
  return fetch(href)
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );
}

async function downloadSvg(day: number) {
  const svg = document.querySelector<SVGSVGElement>(`#schedule-svg-day-${day} svg`);
  if (!svg) return;

  const clone = svg.cloneNode(true) as SVGSVGElement;
  for (const image of clone.querySelectorAll('image')) {
    const href = image.getAttribute('href');
    if (href && !href.startsWith('data:')) {
      image.setAttribute('href', await toDataUrl(href).catch(() => href));
    }
  }

  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(clone)], { type: 'image/svg+xml' }));
  link.download = `programme-bdxio-${edition}-${day}.svg`;
  link.click();
  URL.revokeObjectURL(link.href);
}
</script>

<template>
  <main class="schedule-svg-page">
    <ClientOnly>
      <section v-for="group in days" :id="`schedule-svg-day-${group.day}`" :key="group.day" class="schedule-svg-day">
        <button type="button" class="schedule-svg-download" @click="downloadSvg(group.day)">
          Télécharger {{ group.title }} (SVG)
        </button>
        <SectionScheduleDaySvg
          class="schedule-svg"
          :day="group.day"
          :title="group.title"
          :place="place"
          :talks="group.talks"
          :photos="photos"
        />
      </section>
    </ClientOnly>
  </main>
</template>

<style lang="css">
@page {
  size: A4 landscape;
  margin: 0;
}

@media print {
  .schedule-svg-download {
    display: none;
  }

  .schedule-svg-day {
    padding: 0 !important;
    break-after: page;
  }

  .schedule-svg {
    width: 297mm !important;
    height: 210mm !important;
    box-shadow: none !important;
  }
}
</style>

<style scoped lang="css">
.schedule-svg-page {
  background-color: #e3e3e3;
}

.schedule-svg-day {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 1rem;
}

.schedule-svg-download {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: var(--colors-bdxio-blue-light);
  color: var(--colors-bdxio-light);
  font-size: 1rem;
}

.schedule-svg {
  width: 100%;
  max-width: 1400px;
  height: auto;
  background-color: white;
  box-shadow: 0px 2px 10px rgba(36, 36, 87, 0.2);
}
</style>
