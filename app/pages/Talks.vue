<template>
  <main>
    <div class="section section-talks">
      <h1>Les talks</h1>
      <ul class="section-talks__filters">
        <li @click="filterTalks()">Tous</li>
        <li v-for="filter in filters" :key="`filter-${filter.id}`" @click="filterTalks(filter.id)">
          {{ filter.attributes.name }}
        </li>
      </ul>

      <ul class="section-talks__talks">
        <li v-for="{ attributes: { title, level, speakers }, id } in talks" :key="`talk-${id}`">
          <h2>{{ title }}</h2>
          <p>{{ level }}</p>
          <div v-if="speakers.data.length">
            <div v-for="{ attributes: { photoUrl, name }, id } in speakers.data" :key="`speaker-${id}`">
              <img v-if="photoUrl" :src="photoUrl" />
              <span v-else>{{ getSpeakerInitials(name) }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
// import { formatStrapiData } from "~/helpers";

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
    getSpeakerInitials(name) {
      console.log(name);
      const parts = name.split(" ");
      if (parts.length === 1) {
        return parts[0].charAt(0).toUpperCase();
      }

      return `${parts[0].charAt(0).toUpperCase()}${parts[1].charAt(0).toUpperCase()}`;
    }
  },
  async fetch() {
    const filters = await this.$axios.get(`${this.$config.cmsApiUrl}/categories`, {
      params: {
        fields: ["id", "name"]
      }
    });

    if (filters.data.data.length) {
      this.filters = filters.data.data;
    }
    console.log(filters);

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
    // this.talks = talks;
    console.log(talks);
  }
};
</script>