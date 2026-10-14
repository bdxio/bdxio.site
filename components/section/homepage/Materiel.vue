<script setup lang="ts">
const devices = [
  {
    name: 'PC portables',
    criteria: ['Processeur i3/i5/i7', '≥ 4 Go de RAM', 'HDD/SSD fonctionnel'],
  },
  {
    name: 'Smartphones',
    criteria: ['Android ≥ 6.0 ou iOS ≥ 9.0', 'Écran ≥ 4"', '≥ 32 Go de stockage', 'Réseau 4G', 'Téléphone débloqué'],
  },
  {
    name: 'Tablettes',
    criteria: ['Android ≥ 10 ou iOS ≥ 15', 'Processeur ≥ 4 cœurs (Apple ≥ 2 cœurs)', 'Écran ≥ 8"', '≥ 32 Go de stockage'],
  },
];
</script>

<template>
  <section class="p-section flex flex-col items-start bg-white w-full">
    <div class="w-full max-w-5xl">
      <Heading level="2" class="w-fit relative z-[2] title"> Matériel inutilisé&nbsp;? </Heading>
      <p class="mt-10 text-lg">
        Faites un geste solidaire et écologique à BDX I/O : la grande collecte tech avec <strong>Emmaüs Connect</strong>&nbsp;!
      </p>
      <p class="mt-4">
        En partenariat avec <strong>Emmaüs Connect</strong>, nous organisons une collecte de matériel informatique pour
        lutter contre l'exclusion numérique et donner une seconde vie à vos équipements.
      </p>
      <p class="mt-4">
        Avez-vous des smartphones, tablettes ou PC portables qui dorment dans vos tiroirs ou vos placards
        d'entreprise&nbsp;?
      </p>
      <p class="mt-4 px-5 py-4 rounded-lg bg-bdxio-yellow-base/30 border-l-4 border-bdxio-yellow-base">
        Apportez-les à l'<strong>ENSEIRB-MATMECA</strong> les <strong>29 et 30 octobre</strong>&nbsp;!
      </p>

      <h3 class="mt-10 font-bold text-lg">Matériel recherché &amp; critères de reconditionnement</h3>
      <ul class="mt-4 grid gap-4 m:grid-cols-3">
        <li
          v-for="device in devices"
          :key="device.name"
          class="p-5 rounded-lg bg-bdxio-cream-base border-t-4 border-bdxio-blue-base"
        >
          <p class="font-bold">{{ device.name }}</p>
          <ul class="mt-3 space-y-2">
            <li v-for="criterion in device.criteria" :key="criterion" class="flex gap-2">
              <span class="text-bdxio-blue-base font-bold" aria-hidden="true">✓</span>
              <span>{{ criterion }}</span>
            </li>
          </ul>
        </li>
      </ul>

      <p class="mt-6 px-5 py-4 rounded-lg bg-red/10 border-l-4 border-red">
        <strong>Critères de refus&nbsp;:</strong> écrans cassés, haut-parleurs HS, appareils bloqués opérateur ou
        jailbreakés.
      </p>
      <p class="mt-6 font-bold">
        Faites le tri dans vos bureaux avant de venir&nbsp;! On compte sur vous pour faire sauter le compteur de dons&nbsp;!
      </p>
    </div>
  </section>
</template>

<style scoped lang="css">
.title::after {
  content: '';
  display: block;
  width: 140px;
  height: 70px;
  position: absolute;
  right: -30px;
  bottom: -30px;
  z-index: -1;
  background-image: url('/images/drawings/yellow_scribbles.webp');
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (min-width: theme('screens.sm')) {
    right: -100px;
  }
}
</style>
