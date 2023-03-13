<script setup lang="ts">
// @ts-nocheck
import {
  definePageMeta,
  useHead,
  useAPI,
  computed,
  ref,
  shuffleArray,
} from "#imports";
import { SectionTitle, NuxtLink } from "#components";

definePageMeta({ layout: "page" });
useHead({ title: "Talks | BDX I/O" });

const currentFilter = ref("all");

const [{ data: dataCategories }, { data: dataTalks }] = await Promise.all([
  useAPI("/categories", {
    params: { fields: ["id", "name", "color"] },
  }),
  useAPI("/talks", {
    params: {
      fields: ["id", "title", "level"],
      "populate[category]": "*",
      "populate[speakers]": "*",
    },
  }),
]);

const filteredTalks = computed(() => {
  if (!dataTalks?.value?.length) return [];
  if (currentFilter.value === "all") return dataTalks;
  return dataTalks.value.filter(
    (t) => t.attributes.category.data.id === currentFilter.value
  );
});

const filters = computed(() => dataCategories.value);

function getRandomBackgroundColor() {
  return shuffleArray([
    "#9ADCFF",
    "#FFF89A",
    "#FFB2A6",
    "#FF8AAE",
    "#FFF9CA",
    "#FFDEB4",
    "#FFB4B4",
    "#B2A4FF",
  ])[0];
}
function getSpeakerInitials(name) {
  const parts = name.split(" ");
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }

  return `${parts[0].charAt(0).toUpperCase()}${parts[1]
    .charAt(0)
    .toUpperCase()}`;
}

function setFilter(filter) {}
</script>

<template>
  <main>
    <div class="section section-talks">
      <header class="section-talks__header">
        <SectionTitle tag="h1" class="section-talks__header__title">
          Les talks
        </SectionTitle>
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
            >
              {{ filter.attributes.name }}
            </label>
          </li>
        </ul>
      </header>

      <ul class="section-talks__talks">
        <li
          v-for="{ attributes, id } in filteredTalks"
          :key="`talk-${id}`"
          class="section-talks__talks__card cursor--pointer"
          :style="{
            'border-color':
              attributes.category.data.attributes.color || 'black',
          }"
        >
          <NuxtLink :to="`/talks/${id}`">
            <div>
              <h2 class="title">{{ attributes.title }}</h2>
              <span class="level">{{ attributes.level }}</span>
              <p
                v-if="attributes.category.data.attributes.name"
                class="category"
                :style="{ color: attributes.category.data.attributes.color }"
              >
                {{ attributes.category.data.attributes.name }}
              </p>
            </div>
            <div v-if="attributes.speakers.data.length" class="speakers">
              <div
                v-for="({ attributes, id }, index) in attributes.speakers.data"
                :key="`speaker-${id}`"
                class="speakers__speaker"
                :class="{ marginTop: index > 0 }"
                :title="attributes.name"
              >
                <div class="speakers__speaker__infos">
                  <img
                    v-if="attributes.photoUrl"
                    :src="attributes.photoUrl"
                    class="speakers__speaker__infos__image"
                  />
                  <span
                    v-else
                    class="speakers__speaker__infos__initials"
                    :style="{
                      'background-color':
                        attributes.category.data.attributes.color ||
                        getRandomBackgroundColor(),
                    }"
                  >
                    {{ getSpeakerInitials(attributes.name) }}
                  </span>
                  <span class="speakers__speaker__infos__name">{{
                    attributes.name
                  }}</span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>

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
        background: url("~/assets/img/drawings/blue_presentation_left.png")
          center no-repeat;
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
        background: url("~/assets/img/drawings/blue_presentation_right.png")
          center no-repeat;
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
