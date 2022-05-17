<template functional>
  <section class="section news">
    <section-title tag="h2">Les dernières actualités</section-title>
    <div class="news-container">
      <div class="news-item">
        <img
          src="~/assets/img/team.png"
          alt="photographie de l'équipe d'organisation de bdx.io"
        />
        <span class="item-title">Title 1</span>
        <span class="item-description"
          >Exemple de description d’une actualité très intéressante qui est
          arrivée recemment</span
        >
      </div>
      <div class="news-item">
        <img
          src="~/assets/img/team.png"
          alt="photographie de l'équipe d'organisation de bdx.io"
        />
        <span class="item-title">Title 2</span>
        <span class="item-description"
          >Exemple de description d’une actualité très intéressante qui est
          arrivée recemment</span
        >
      </div>
      <div class="news-item">
        <img
          src="~/assets/img/team.png"
          alt="photographie de l'équipe d'organisation de bdx.io"
        />
        <span class="item-title">Title 3</span>
        <span class="item-description"
          >Exemple de description d’une actualité très intéressante qui est
          arrivée recemment</span
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionNews",
};
</script>

<style lang="scss" scoped>
.news {
  display: flex;
  flex-direction: column;
  color: $primary-dark;
  // padding: 35px 0;

  @include mobileFirst(m) {
    align-items: center;
  }

  .subsection-title {
    margin-top: 0;
    margin-bottom: 40px;
    @include mobileFirst(l) {
      margin-bottom: 80px;
    }
  }

  .news-container {
    display: flex;
    // flex-wrap: nowrap;
    overflow-x: scroll;
    gap: 35px;
    padding: 0 35px;
  }

  .news-item {
    max-width: 310px;
    display: flex;
    flex-direction: column;

    img {
      max-width: 310px;
      margin-bottom: 34px;
    }

    .item-title {
      margin-bottom: 8px;
      font-style: normal;
      font-weight: $font-weight-bold;
      font-size: 30px;
      line-height: 38px;
    }

    .item-description {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: $font-size-content;
      line-height: 32px;
    }
  }

  .subsection-title {
    // white-space: nowrap;
    text-align: center;
  }
}
</style>
