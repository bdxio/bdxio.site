<template>
  <main class="section section-schedule">
    <header class="section-schedule__header">
      <section-title tag="h1" class="section-schedule__header__title"> Le programme de la journée </section-title>
    </header>
    <section class="section-schedule__body">
      <div v-if="categories.length">
        <div class="categories" :class="{ open: openPanel }">
          <span class="categories__title" @click.prevent="openMobilePanel" v-click-outside="closeMobilePanel"
            >Filtrer par thème</span
          >
          <ul class="categories__list">
            <li @click="setFilter('tous')" class="categories__category all" :class="{ active: !filters.length }">
              Tous
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
              <span>{{ category.name }}</span>
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
                  </li>
                </ul>
                <div v-else-if="space" class="slots__slot__infos__interlude">
                  <span class="room">{{ space }}</span>
                  <span class="slots__slot__infos__interlude__name">{{ name }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
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
  computed: {
    showProgramme() {
      return this.$showProgramme;
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
      const formattedSpeakers = speakers
        .map((s) => s.name)
        .toString()
        .replace(",", " / ");

      return `${formattedSpeakers} - ${format.name} (${format.duration}) - Niveau ${level}`;
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
        case "Big Data & I.A.":
        case "Hors-piste":
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
    const { $axios, $config, $showProgramme } = context;
    if (!$showProgramme) {
      return;
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
        width: 120px;
        height: 120px;
        position: absolute;
        z-index: -1;
        left: -110px;
        bottom: -20px;
        background: url("~/assets/img/drawings/blue_presentation_left.png") center no-repeat;
        background-size: cover;
      }

      &:after {
        content: "";
        display: block;
        width: 120px;
        height: 120px;
        position: absolute;
        z-index: -1;
        right: -110px;
        bottom: -20px;
        background: url("~/assets/img/drawings/blue_presentation_right.png") center no-repeat;
        background-size: cover;
      }
    }
  }

  &__body {
    margin-top: 60px;

    @include mobileFirst(m) {
      display: flex;
      margin-top: 100px;
    }

    .categories {
      width: 100%;
      background-color: $grey-100;
      line-height: 60px;
      margin-bottom: 100px;
      height: 60px;
      overflow: hidden;

      &.open {
        height: 100%;
      }

      &__title {
        text-align: center;
        font-size: 18px;
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

        &.all {
          margin-left: 80px;
        }

        &__image {
          width: 30px;
          height: 30px;
          margin-left: 30px;
          margin-right: 20px;
        }

        &.active {
          opacity: 1;
        }
      }

      @include mobileFirst(m) {
        width: 345px;
        height: auto;
        overflow: auto;
        padding: 30px;

        position: initial;
        width: 100%;
        margin-bottom: 0;

        &__title {
          text-align: center;
          font-size: 18px;
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
</style>
