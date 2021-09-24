<template>
  <div :class="{ dark: isDarkThemeOn }">
    <div class="dark:bg-veryDarkBlueDarkColor h-screen">
      <!-- Top title header -->
      <top-header />

      <div
        class="
          px-4
          py-10
          lg:px-20
          bg-veryLightGrayColor
          dark:bg-veryDarkBlueDarkColor
          h-full
          flex flex-col
          lg:flex-row
        "
      >
        <!-- Search bar -->
        <search-country class="mr-auto" />

        <!-- region filter -->
        <region-filter-dropdown class="mt-14 lg:mt-0" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TopHeader from "@/components/topHeader.vue";
import SearchCountry from "@/components/SearchCountry.vue";
import RegionFilterDropdown from "@/components/regionFilterDropdown.vue";

export default {
  name: "Home",
  components: {
    TopHeader,
    SearchCountry,
    RegionFilterDropdown,
  },
  computed: {
    ...mapGetters({ isDarkThemeOn: "isDarkThemeOn" }),
  },
};
</script>
