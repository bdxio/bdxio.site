<template>
  <main class="section section-schedule">
    <header class="section-schedule__header">
      <section-title tag="h1" class="section-schedule__header__title"> Le programme de la journée </section-title>
    </header>

    <section class="section-schedule__body">
      <div class="schedule-download">
        <a href="/bdxio-2022-programme.pdf" class="button button-primary button-primary--light center" download
          >Télécharger le programme</a
        >
        <open-feedback v-if="showOpenfeedback" href="https://openfeedback.io/r46KviPgLYMQfQnFpaGS/2022-12-02" />
      </div>
      <div class="schedule-container">
        <div v-if="categories.length" class="categories-container">
          <div class="categories" :class="{ open: openPanel }" v-click-outside="closeMobilePanel">
            <span class="categories__title" @click.prevent="openMobilePanel">Filtrer par thème</span>
            <ul class="categories__list">
              <li @click="setFilter('tous')" class="categories__category all" :class="{ active: !filters.length }">
                <span>Tous</span>
              </li>
              <li
                v-for="category in categories"
                :key="category.name"
                @click="setFilter(category.name)"
                class="categories__category"
                :class="{ active: filters.includes(category.name) }"
              >
                <img
                  class="categories__category__image"
                  :src="
                    getCategoryImg(category.name)
                      ? require(`~/assets/img/drawings/categories/${getCategoryImg(category.name)}`)
                      : ''
                  "
                  :href="`image abstraite représentant la catégorie ${category.name}`"
                />
                <span class="categories__category__label">{{ category.name }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="schedule.length" class="slots">
          <div class="schedule">
            <div class="pre-schedule">
              <span class="pre-schedule__circle" />
              <span class="pre-schedule__line" />
            </div>
            <ul>
              <li
                v-for="({ formattedSlot, name, talks, space = false }, indexSlot) in filteredSchedule"
                :key="`slot-${indexSlot}`"
              >
                <h4 class="slots__slot__hour">{{ formattedSlot }}</h4>
                <div class="slots__slot__infos">
                  <ul v-if="talks.length" class="slots__slot__infos__talks">
                    <li v-for="(talk, indexTalk) in talks" :key="`slot-${indexSlot}-talk-${indexTalk}`" class="talk">
                      <div class="room">{{ talk.room.name }}</div>
                      <nuxt-link :to="`/talks/${talk.id}`">
                        <div class="talk__infos">
                          <img
                            class="talk__infos__image"
                            :src="
                              getCategoryImg(talk.category.name)
                                ? require(`~/assets/img/drawings/categories/${getCategoryImg(talk.category.name)}`)
                                : ''
                            "
                            :href="`image abstraite représentant la catégorie ${talk.category.name}`"
                          />
                          <div class="talk__infos__content">
                            <span class="talk__infos__content__title">{{ talk.title }}</span>
                            <span class="talk__infos__content__subinfos">{{ displayTalkSubInfos(talk) }}</span>
                          </div>
                        </div>
                      </nuxt-link>
                    </li>
                  </ul>
                  <div v-else-if="space" class="slots__slot__infos__interlude">
                    <span class="room">{{ space }}</span>
                    <span class="slots__slot__infos__interlude__name">{{ name }}</span>
                    <div v-if="$showProgramme" class="openfeedback-keynote">
                      <open-feedback
                        href="https://openfeedback.io/r46KviPgLYMQfQnFpaGS/2022-12-02/1"
                        v-if="name === `Keynote d'ouverture`"
                      />
                      <open-feedback
                        href="https://openfeedback.io/r46KviPgLYMQfQnFpaGS/2022-12-02/2"
                        v-if="name === `Keynote de fermeture`"
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import vClickOutside from "v-click-outside";
import OpenFeedback from "../components/association/OpenFeedback.vue";

export default {
  components: { OpenFeedback },
  name: "ProgrammePage",
  layout: "page",
  data() {
    return {
      categories: [],
      schedule: [],
      filters: [],
      openPanel: false
    };
  },
  head() {
    return {
      title: "Programme | BDX I/O"
    };
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  computed: {
    showProgramme() {
      return this.$showProgramme;
    },
    showOpenfeedback() {
      return this.$showOpenfeedback;
    },
    filteredSchedule() {
      if (!this.filters.length) {
        return this.schedule;
      }

      return this.schedule
        .map((slot) => {
          return {
            ...slot,
            talks: slot.talks.filter((t) => this.filters.includes(t.category.name))
          };
        })
        .filter((s) => s.talks.length > 0);
    },
    isMobileContext() {
      return window.innerWidth <= 992;
    }
  },
  methods: {
    displayTalkSubInfos({ speakers, format, level }) {
      const formattedSpeakers = speakers.length
        ? speakers
            .map((s) => s.name)
            .toString()
            .replace(",", " / ")
        : "";

      let text = "";

      if (formattedSpeakers) text += `${formattedSpeakers} -`;
      if (format.name) text += ` ${format.name}`;
      if (format.duration) text += ` (${format.duration})`;
      if (level) text += ` - Niveau ${level}`;

      return text;
    },
    setFilter(filter) {
      if (filter === "tous") {
        this.filters = [];
        return;
      }

      if (!this.filters.includes(filter)) {
        this.filters = [...this.filters, filter];
        return;
      }

      this.filters = this.filters.filter((f) => f !== filter);
    },
    getCategoryImg(category) {
      switch (category) {
        case "Frontend":
          return "frontend.png";
        case "Design & UX":
          return "designux.png";
        case "Méthodo & Architecture":
          return "methodoarchitecture.png";
        case "Cloud & DevSecOps":
          return "cloudetdevsecops.png";
        case "Backend":
          return "backend.png";
        case "Big Data & I.A.":
          return "bigdataia.png";
        case "Hors-piste":
          return "horspiste.png";
        default:
          return null;
      }
    },
    openMobilePanel() {
      if (!this.isMobileContext) {
        return;
      }

      return (this.openPanel = !this.openPanel);
    },
    closeMobilePanel() {
      return (this.openPanel = false);
    }
  },
  async asyncData(context) {
    const { $axios, $config, $showProgramme, error } = context;
    if (!$showProgramme) {
      return error({ statusCode: 404 });
    }

    const { categories, schedule } = await $axios.$get(`${$config.cmsApiUrl}/schedule`);

    return {
      categories,
      schedule
    };
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
.section-schedule {
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
        left: -30px;
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
        right: -30px;
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
      margin-top: 50px;
    }

    .schedule-download {
      margin-bottom: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      @include mobileFirst(s) {
        flex-direction: row;
      }
    }

    .schedule-container {
      @include mobileFirst(m) {
        display: flex;
      }
    }

    .categories-container {
      width: 100%;

      @include mobileFirst(s) {
        max-width: 345px;
      }
    }
    .categories {
      background-color: $grey-100;
      margin-bottom: 100px;
      padding-bottom: 30px;
      height: 60px;
      overflow: hidden;

      &.open {
        height: auto;
      }

      &__list {
        margin-top: 20px;
      }

      &__title {
        text-align: center;
        font-size: 18px;
        height: 30px;
        margin-top: 15px;
        display: block;
        color: $grey-400;
        font-weight: $font-weight-bold;
        cursor: pointer;
      }

      &__category {
        opacity: 0.3;
        cursor: pointer;
        display: flex;
        align-items: center;
        line-height: auto;
        height: 60px;
        &.all {
          margin-left: 80px;
        }

        &__image {
          width: 30px;
          height: 30px;
          margin-left: 30px;
          margin-right: 20px;
        }

        &__label {
          line-height: auto;
        }

        &.active {
          opacity: 1;
        }
      }

      @include mobileFirst(m) {
        position: sticky;
        top: 0;
        width: inherit;
        height: auto;
        padding: 30px;
        margin-bottom: 0;
        height: auto;

        &__title {
          text-align: center;
          font-size: 18px;
          margin-top: 0;
          display: block;
          color: $grey-400;
          font-weight: $font-weight-regular;
          cursor: initial;
        }
      }
    }

    .pre-schedule {
      margin-left: 30px;

      &__circle {
        display: block;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: $primary;
        transform: translateX(-34%);
      }

      &__line {
        display: block;
        width: 2px;
        height: 30px;
        background-color: $primary;
      }
    }

    .schedule {
      @include mobileFirst(m) {
        margin-left: 100px;
      }
    }

    .slots {
      &__slot {
        &__hour {
          font-size: $font-size-content;
          color: $primary;
          margin: 5px 0;
        }
        &__infos {
          font-size: 1.125rem; //18px
          border-left: 2px solid $primary;
          margin-left: 30px;
          padding: 25px 0 25px 25px;

          @include mobileFirst(m) {
            padding: 50px;
          }

          &__interlude {
            &__name {
              font-weight: $font-weight-bold;
              margin-left: 30px;
            }
          }

          &__talks {
            .talk {
              margin-bottom: 30px;

              &__infos {
                display: flex;
                &__image {
                  width: 40px;
                  height: 40px;
                  margin-right: 10px;
                }
                &__content {
                  &__title {
                    font-weight: $font-weight-bold;
                    display: block;
                  }
                  &__subinfos {
                    font-weight: 200;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

.room {
  display: block;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 200;
  font-size: 14px;
}

.openfeedback-keynote {
  margin-left: 30px;
  margin-top: 15px;

  a {
    margin: 0;
    display: inline-block;

    img {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
