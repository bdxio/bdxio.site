<template>
  <main>
    <div class="section section-talks">
      <header class="section-talks__header">
        <section-title tag="h1" class="section-talks__header__title">Les talks</section-title>

        <ul class="section-talks__header__filters" v-if="filters.length">
          <li class="section-talks__header__filters__filter" click="setFilter">
            <input
              type="radio"
              id="all"
              value="all"
              v-model="currentFilter"
              class="display--none"
              :class="{ active: currentFilter === 'all' }"
            />
            <label for="all" class="cursor--pointer">Tous</label>
          </li>
          <li
            class="section-talks__header__filters__filter"
            v-for="filter in filters"
            :key="`filter-${filter.id}`"
            @click="setFilter(filter.id)"
          >
            <input
              type="radio"
              :id="filter.attributes.name"
              :value="filter.id"
              v-model="currentFilter"
              class="display--none"
              :class="{ active: currentFilter === filter.id }"
            />
            <label
              :for="filter.attributes.name"
              class="cursor--pointer"
              :style="
                currentFilter === filter.id
                  ? `border-color: ${filter.attributes.color}; color: ${filter.attributes.color}`
                  : ''
              "
              >{{ filter.attributes.name }}</label
            >
          </li>
        </ul>
      </header>

      <ul class="section-talks__talks">
        <li
          v-for="{ attributes: { title, level, speakers, category }, id } in filteredTalks"
          :key="`talk-${id}`"
          class="section-talks__talks__card cursor--pointer"
          :style="{
            'border-color': category.data.attributes.color || 'black'
          }"
        >
          <nuxt-link :to="`/talks/${id}`">
            <div>
              <h2 class="title">{{ title }}</h2>
              <span class="level">{{ level }}</span>
              <p
                v-if="category.data.attributes.name"
                class="category"
                :style="{ color: category.data.attributes.color }"
              >
                {{ category.data.attributes.name }}
              </p>
            </div>
            <div v-if="speakers.data.length" class="speakers">
              <div
                v-for="({ attributes: { photoUrl, name }, id }, index) in speakers.data"
                :key="`speaker-${id}`"
                class="speakers__speaker"
                :class="{ marginTop: index > 0 }"
                :title="name"
              >
                <div class="speakers__speaker__infos">
                  <img v-if="photoUrl" :src="photoUrl" class="speakers__speaker__infos__image" />
                  <span
                    v-else
                    class="speakers__speaker__infos__initials"
                    :style="{ 'background-color': category.data.attributes.color || getRandomBackgroundColor() }"
                    >{{ getSpeakerInitials(name) }}</span
                  >
                  <span class="speakers__speaker__infos__name">{{ name }}</span>
                </div>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { shuffleArray } from "~/utils";

export default {
  name: "TalksPage",
  layout: "page",
  data() {
    return {
      talks: [],
      filters: [],
      currentFilter: "all"
    };
  },
  computed: {
    filteredTalks() {
      if (!this.talks || !this.talks.length) return [];

      if (this.currentFilter === "all") {
        return this.talks;
      }

      return this.talks.filter((t) => t.attributes.category.data.id === this.currentFilter);
    }
  },
  head() {
    return {
      title: "Talks | BDX I/O"
    };
  },
  methods: {
    setFilter() {},
    getRandomBackgroundColor() {
      return shuffleArray(["#9ADCFF", "#FFF89A", "#FFB2A6", "#FF8AAE", "#FFF9CA", "#FFDEB4", "#FFB4B4", "#B2A4FF"])[0];
    },

    getSpeakerInitials(name) {
      const parts = name.split(" ");
      if (parts.length === 1) {
        return parts[0].charAt(0).toUpperCase();
      }

      return `${parts[0].charAt(0).toUpperCase()}${parts[1].charAt(0).toUpperCase()}`;
    }
  },
  async asyncData({ $axios, $config }) {
    const [filters, talks] = await Promise.all([
      $axios.get(`${$config.cmsApiUrl}/categories`, {
        params: {
          fields: ["id", "name", "color"]
        }
      }),
      $axios.get(`${$config.cmsApiUrl}/talks`, {
        params: {
          fields: ["id", "title", "level"],
          "populate[category]": "*",
          "populate[speakers]": "*"
        }
      })
    ]);

    return {
      talks: talks.data.data.length ? talks.data.data : [],
      filters: filters.data.data.length ? filters.data.data : []
    };
  }
};
</script>

<style lang="scss" scoped>
.section-talks {
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

    &__filters {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      margin: 40px 40px 0 40px;

      &__filter {
        cursor: pointer;
        margin-bottom: 50px;

        .active {
          & + label {
            padding-bottom: 5px;
            border-bottom: 3px solid $primary-dark;
          }
        }
      }

      @include mobileFirst(s) {
        grid-template-columns: repeat(3, 1fr);

        &__filter {
          margin-bottom: 30px;
        }
      }
    }
  }
  &__talks {
    display: flex;
    justify-content: center;
    grid-gap: 30px;
    flex-wrap: wrap;
    margin-top: 100px;

    &__card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem;
      border: 2px solid black;
      border-radius: 8px;
      max-width: 280px; //275px

      .title {
        font-family: $font-family-body;
        font-weight: $font-weight-bold;
        font-size: 24px;
        margin-top: 0;
        margin-bottom: 0.625rem; //10px
      }

      .level {
        font-style: $font-style-italic;
        font-weight: $font-weight-light;
      }

      .category {
        font-weight: $font-weight-bold;
      }

      .speakers {
        margin-top: 20px;
        &__speaker {
          &__infos {
            display: flex;
            align-items: center;

            &__image,
            &__initials {
              display: table-cell;
              vertical-align: middle;
              border-radius: 50%;
              font-size: 15px;
              height: 40px;
              width: 40px;
            }

            &__image {
              filter: grayscale(1);
            }

            &__initials {
              text-align: center;
              text-decoration: none;
            }

            &__name {
              font-size: 16px;
              margin-left: 10px;
            }
          }
          &.marginTop {
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>