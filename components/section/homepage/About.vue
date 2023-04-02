<script setup lang="ts">
import { Heading } from "#components";
</script>

<template>
  <section
    id="about"
    class="pb-[200px] xs:pb-[250px] s:bg-[50%] s:pb-0 s:flex s:justify-end l:bg-[45%] overflow-hidden section bourse"
  >
    <div
      class="ml-0 bg-grey-100 shadow-homepage-about s:bg-center s:relative s:flex s:flex-col s:justify-center 
        s:ml-[55%] s:pl-0 section about-us"
    >
      <Heading tag="h2">
        Qu'est-ce que <span class="whitespace-nowrap">BDX I/O</span>&nbsp;?
      </Heading>
      <p>
        BDX I/O est un conférence bordelaise sur le thème de la programmation et
        de ses métiers annexes.
        <br>Lors de l'édition 2020, nous avons reçu plus de 850 passionné·e·s
        lors d'une journée de découvertes et de bonne humeur&nbsp;!
      </p>
    </div>
  </section>
</template>

<style lang="css" scoped>
.bourse {
  background: url("/images/place_de_la_bourse.png") no-repeat left bottom;
}
</style>
