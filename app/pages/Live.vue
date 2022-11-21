<template>
  <main class="section section-live">
    <header class="section-live__header">
      <section-title tag="h1" class="section-live__header__title">Le live</section-title>
    </header>
    <section class="section-live__body">
      <flex-container tag="ul" class="rooms" gutter-s v-if="rooms.length">
        <flex-item tag="li" v-for="room in rooms" :key="room.name" class="room" m6>
          <div class="room__name">{{ room.name }}</div>
          <div class="room__video">
            <iframe
              :width="iframeWidth"
              :height="iframeHeight"
              :src="`https://www.youtube.com/embed/${room.iframeId}`"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </flex-item>
      </flex-container>
      <p v-else class="noLive">Aucun live actuellement, merci de réessayer pendant l'évènement</p>
    </section>
  </main>
</template>

<script>
export default {
  name: "LivePage",
  layout: "page",
  head() {
    return {
      title: "Live 🎥 | BDX I/O"
    };
  },
  computed: {
    iframeWidth() {
      return window.innerWidth;
    },
    iframeHeight() {
      return window.innerHeight;
    }
  },
  data() {
    return {
      rooms: null
    };
  },
  async asyncData({ $axios, $config }) {
    const {
      data: { data }
    } = await $axios.get(`${$config.cmsApiUrl}/rooms`, {
      params: {
        sort: "name"
      }
    });
    return {
      rooms: data
        .filter((r) => r.attributes.iframeId)
        .map(({ attributes: { name, iframeId } }) => ({
          name,
          iframeId
        }))
    };
  }
};
</script>

<style lang="scss" scoped>
.section-live {
  background: $white;

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    &__title {
      @include positionRelative;

      &:before {
        content: "";
        display: block;
        width: 80px;
        height: 80px;
        position: absolute;
        z-index: -1;
        left: -70px;
        bottom: -10px;
        background: url("~/assets/img/drawings/blue_presentation_left.png") center no-repeat;
        background-size: cover;

        @include mobileFirst(m) {
          width: 120px;
          height: 120px;
          left: -110px;
        }
      }

      &:after {
        content: "";
        display: block;
        width: 80px;
        height: 80px;
        position: absolute;
        z-index: -1;
        right: -70px;
        bottom: -10px;
        background: url("~/assets/img/drawings/blue_presentation_right.png") center no-repeat;
        background-size: cover;

        @include mobileFirst(m) {
          width: 120px;
          height: 120px;
          right: -110px;
        }
      }
    }
  }

  &__body {
    margin-top: 60px;

    @include mobileFirst(m) {
      margin-top: 100px;
    }

    .room {
      width: 100%;
      overflow: hidden;
      margin-bottom: $spc-m;
      &__name {
        font-weight: $font-weight-bold;
        margin-bottom: $spc-xxs;
      }

      &__video {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
        iframe {
          position: absolute !important;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .noLive {
    text-align: center;
  }
}
</style>