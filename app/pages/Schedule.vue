<template>
  <main class="section section-schedule">
    <header class="section-schedule__header">
      <section-title tag="h1" class="section-schedule__header__title"> Le programme de la journée </section-title>
    </header>
    <flex-container tag="section" class="section-schedule__body" no-gutter>
      <flex-item v-if="categories.length" m4>
        <div class="categories">
          <span class="categories__title">Filtrer par thème</span>
          <ul class="categories__list">
            <li @click="setFilter('tous')" :style="!filters.length && { color: 'red' }">Tous</li>
            <li
              v-for="category in categories"
              :key="category.name"
              @click="setFilter(category.name)"
              :style="filters.includes(category.name) && { color: 'red' }"
            >
              {{ category.name }}
            </li>
          </ul>
        </div>
      </flex-item>
      <flex-item v-if="schedule.length" class="slots" m8>
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
                  <span class="room">{{ talk.room.name }}</span>
                  <span class="talk__title">{{ talk.title }}</span>
                  <span class="talk__subinfos">{{ displayTalkSubInfos(talk) }}</span>
                  <!-- <ul v-if="speakers.length" class="slots__slot__infos__talks__speakers">
                    <li
                      v-for="(speaker, index) in talk.speakers"
                      :key="speaker.name"
                      class="slots__slot__infos__talks__speakers__speaker"
                    >
                      {{ speaker.name }}
                      <span v-if="index !== speakers.length - 1">/</span>
                      <span v-else> - </span>
                    </li>
                  </ul>
                  <span>{{ format.name }}</span> -->
                </li>
              </ul>
              <div v-else-if="space" class="slots__slot__infos__interlude">
                <span class="room">{{ space }}</span>
                <span class="slots__slot__infos__interlude__name">{{ name }}</span>
              </div>
            </div>
          </li>
        </ul>
      </flex-item>
    </flex-container>
  </main>
</template>

<script>
export default {
  name: "ProgrammePage",
  layout: "page",
  data() {
    return {
      categories: [],
      defaultSchedule: [],
      schedule: [],
      filters: []
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
    }
  },
  methods: {
    displayTalkSubInfos({ speakers, format, level, category }) {
      const formattedSpeakers = speakers
        .map((s) => s.name)
        .toString()
        .replace(",", " / ");

      return `${formattedSpeakers} - ${format.name} (${format.duration}) - Niveau ${level} - ${category.name}`;
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
    margin-top: 100px;

    .categories {
      padding: 30px;
      line-height: 60px;
      position: initial;
      width: 345px;
      background-color: $grey-100;

      &__title {
        text-align: center;
        font-size: 18px;
        font-weight: $font-weight-bold;
        display: block;
        color: $grey-400;
      }

      // @include mobileFirst(m) {
      //   position: fixed;
      //   @include z-index(default);
      //   overflow-y: scroll;
      // }
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

    .slots {
      &:before {
        content: "";
      }
      &__slot {
        &__hour {
          font-size: $font-size-content;
          color: $primary;
          margin: 5px 0;
        }
        &__infos {
          font-size: 1.125rem; //18px
          padding: 50px;
          border-left: 2px solid $primary;
          margin-left: 30px;

          &__interlude {
            &__name {
              font-weight: $font-weight-bold;
              margin-left: 30px;
            }
          }

          &__talks {
            .talk {
              margin-bottom: 30px;
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

.room {
  display: block;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 200;
  font-size: 14px;
}
</style>
