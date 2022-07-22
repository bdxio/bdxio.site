<template>
  <section class="section section-association-volunteers">
    <section-title tag="h3" class="text-align--center title"
      >Découvrez les membres <br />
      de notre <span class="after">équipe</span></section-title
    >

    <ul>
      <li v-for="{ id, active, firstname, lastname } in volunteers" :key="`volunteer-${id}`">
        <div v-if="active" class="volunteer">
          <div class="volunteer__name">{{ firstname }} {{ lastname }}</div>
        </div>
      </li>
    </ul>
  </section>
</template>


<script>
export default {
  name: "AssociationSectionVolunteers",
  props: {
    volunteers: {
      type: Array,
      required: true
    }
  },
  created() {
    console.log(this.volunteers);
  }
};
</script>

<style lang="scss" scoped>
.section-association-volunteers {
  background: $white;
  .title {
    .after {
      @include positionRelative;
      &::after {
        content: "";
        width: 60px;
        height: 60px;
        position: absolute;
        z-index: -1;
        background: url("~/assets/img/drawings/yellow_heart.png") no-repeat center;
        background-size: contain;
        right: -60px;
      }
    }
  }
}
</style>