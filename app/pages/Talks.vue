<template>
  <main>
    <div class="section section-talks">
      <h1>Les talks</h1>
      <ul class="section-talks__filters" v-if="filters.length">
        <li @click="filterTalks()">Tous</li>
        <li v-for="filter in filters" :key="`filter-${filter.id}`" @click="filterTalks(filter.id)">
          {{ filter.attributes.name }}
        </li>
      </ul>

      <ul class="section-talks__talks">
        <li
          v-for="{ attributes: { title, level, speakers, category }, id } in talks"
          :key="`talk-${id}`"
          class="section-talks__talks__card"
          :style="{
            'border-color': category.data.attributes.color || 'black'
          }"
        >
          <div>
            <h2 class="title">{{ title }}</h2>
            <span class="level">{{ level }}</span>
            <p v-if="category.data.attributes.name" class="category" :style="{ color: category.data.attributes.color }">
              {{ category.data.attributes.name }}
            </p>
          </div>
          <div v-if="speakers.data.length" class="speakers">
            <div
              v-for="({ attributes: { photoUrl, name }, id }, index) in speakers.data"
              :key="`speaker-${id}`"
              class="speakers__speaker"
              :class="{ margin: index > 0 }"
              :title="name"
            >
              <img v-if="photoUrl" :src="photoUrl" />
              <span
                v-else
                :style="{ 'background-color': category.data.attributes.color || getRandomBackgroundColor() }"
                >{{ getSpeakerInitials(name) }}</span
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { shuffleArray } from "~/helpers";

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
  head() {
    return {
      title: "Talks | BDX I/O"
    };
  },
  methods: {
    filterTalks(id = "all") {
      console.log(this.talks, id);
    },
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
  async fetch() {
    // const filters = await this.$axios.get(`${this.$config.cmsApiUrl}/categories`, {
    //   params: {
    //     fields: ["id", "name"]
    //   }
    // });

    // if (filters.data.data.length) {
    //   this.filters = filters.data.data;
    // }

    const talks = await this.$axios.get(`${this.$config.cmsApiUrl}/talks`, {
      params: {
        fields: ["id", "title", "level"],
        "populate[category]": "*",
        "populate[speakers]": "*"
      }
    });

    if (talks.data.data.length) {
      this.talks = talks.data.data;
    }
  }
};
</script>

<style lang="scss" scoped>
.section-talks {
  &__talks {
    display: flex;
    grid-gap: 30px;
    flex-wrap: wrap;

    &__card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem;
      border: 2px solid black;
      border-radius: 8px;
      max-width: 17.1875rem; //275px

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
        margin-top: 40px;
        display: flex;

        &__speaker {
          display: inline-block;

          &.margin {
            margin-left: 0.625rem;
          }

          span {
            display: table-cell;
            vertical-align: middle;
            text-align: center;
            text-decoration: none;
            height: 40px;
            width: 40px;
            font-size: 15px;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>