<template>
  <section class="p-section section-jobs">
    <Heading
      level="1"
      class="text-center"
    >
      Les offres d'emploi de nos partenaires
    </Heading>
    <jobs-widget
      color="#7D7DF2"
      locale="fr"
      items="40"
      hidePartnership="false"
      hideFooter="false"
      referralCode="BDXIO"
      customAlgoliaFilters="inSelections.-NGVxFQ3IDZ1Ep5hDwMu > 0"
      eventMode="true"
      class="mt-12 m:mt-24"
    />
  </section>
</template>

<style scoped lang="css">
.section-jobs {
  --w3d-main-color: #7d7df2;
  --w3d-accent-color: #fff;
}
</style>
