<template>
  <main class="px-4 lg:px-20 min-h-screen dark:bg-veryDarkBlueDarkColor h-full">
    <div class="py-10 flex flex-col lg:flex-row">
      <!-- Search bar -->
      <search-country class="mr-auto" />

      <!-- region filter -->
      <region-filter-dropdown class="mt-14 lg:mt-0" />

      <!-- countries section -->
    </div>

    <!-- list of countries -->
    <countries-list class="mt-6" />
  </main>
</template>

<script>
import SearchCountry from "@/components/SearchCountry.vue";
import RegionFilterDropdown from "@/components/regionFilterDropdown.vue";
import CountriesList from "@/components/countriesList.vue";

export default {
  name: "Home",
  components: {
    SearchCountry,
    RegionFilterDropdown,
    CountriesList,
  },
};
</script>
