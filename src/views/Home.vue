<template>
  <div :class="{ dark: isDarkThemeOn }">
    <div class="dark:bg-veryDarkBlueDarkColor h-full">
      <!-- Top title header -->
      <top-header />

      <main class="px-4 lg:px-20 min-h-screen">
        <div class="py-10 flex flex-col lg:flex-row">
          <!-- Search bar -->
          <search-country class="mr-auto" />

          <!-- region filter -->
          <region-filter-dropdown class="mt-14 lg:mt-0" />

          <!-- countries section -->
        </div>
        <countries-list class="mt-6" />
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TopHeader from "@/components/topHeader.vue";
import SearchCountry from "@/components/SearchCountry.vue";
import RegionFilterDropdown from "@/components/regionFilterDropdown.vue";
import CountriesList from "@/components/countriesList.vue";

export default {
  name: "Home",
  components: {
    TopHeader,
    SearchCountry,
    RegionFilterDropdown,
    CountriesList,
  },
  computed: {
    ...mapGetters({ isDarkThemeOn: "isDarkThemeOn" }),
  },
};
</script>
