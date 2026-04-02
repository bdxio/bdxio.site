<template>
  <section class="p-section flex flex-col justify-between items-start bg-white w-full">
    <div>
      <Heading level="2" class="w-fit relative z-[2] title"> Matériel inutilisé&nbsp;? </Heading>
      <p class="mt-10">
        Parce que nous savons que chacun d'entre nous possède à la maison des appareils électroniques qui ne sont plus
        utilisés ou qui ne fonctionnent plus, nous avons décidé cette année de nous associer à EcoMicro afin de
        récupérer vos anciens téléphones, ordinateurs, chargeurs, etc. Selon leur état, les équipements collectés sont
        reconditionnés, recyclés ou valorisés. <br><br>

        Vous n'avez qu'à les apporter le jour J, et nous nous occupons du reste ! 💜

        <LinkSecondary
          type="link"
          color="light"
          to="https://www.ecomicro.fr/"
          target="_blank"
          aria-label="lien vers le site d'ecomicro - Nouvelle fenêtre"
          class="mt-10"
        >
          Découvrir Ecomicro
        </LinkSecondary>
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
