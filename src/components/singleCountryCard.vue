<template>
  <ul>
    <router-link
      :to="{ name: 'Country', params: { name: countryData.name } }"
      tag="li"
      class="
        cursor-pointer
        col-span-1
        flex flex-col
        bg-white
        dark:bg-darkBlueColor
        rounded-lg
        overflow-hidden
        shadow
        divide-y divide-gray-200
        max-w-xs
        mx-auto
      "
    >
      <div class="flex-1 flex flex-col">
        <img
          class="flex-shrink-0 max-h-64 object-cover"
          src="https://source.unsplash.com/random"
          alt=""
        />
        <div class="px-4 pt-6 pb-10 dark:text-veryLightGrayColor">
          <h3
            class="
              text-gray-900
              dark:text-veryLightGrayColor
              text-lg
              font-medium
            "
          >
            {{ countryData.name }}
          </h3>
          <dl class="mt-1 flex-grow flex flex-col space-y-2">
            <dd class="text-sm">
              <span class="font-semibold">Population</span>:
              <span class="dark:text-gray-400">{{
                countryData.population | formatNumber
              }}</span>
            </dd>
            <dd class="text-sm">
              <span class="font-semibold">Region</span>:
              <span class="dark:text-gray-400">
                {{ countryData.region }}
              </span>
            </dd>
            <dd class="text-sm">
              <span class="font-semibold">Capital</span>:
              <span class="dark:text-gray-400">
                {{ countryData.capital ? countryData.capital : "N/A" }}
              </span>
            </dd>
          </dl>
        </div>
      </div>
    </router-link>
  </ul>
</template>

<script>
import { formatNumber } from "../mixins/helpers";
export default {
  name: "SingleCountryCard",
  mixins: [formatNumber],
  props: {
    countryData: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
