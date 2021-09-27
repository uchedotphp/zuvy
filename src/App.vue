<template>
  <div :class="{ dark: isDarkThemeOn }">
    <!-- Top title header -->
    <top-header />
    <!-- views -->
    <router-view :key="$route.fullPath" />
    <pagination-buttons
      v-if="showPagination && $route.name === 'Home'"
      class="px-4 py-10 lg:px-20 dark:bg-veryDarkBlueDarkColor"
    />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import TopHeader from "@/components/topHeader.vue";
import paginationButtons from "@/components/paginationButtons.vue";
export default {
  components: {
    TopHeader,
    paginationButtons,
  },
  computed: {
    ...mapState({
      showPagination: (state) => state.showPagination,
    }),
    ...mapGetters({
      isDarkThemeOn: "isDarkThemeOn",
      allCountries: "allCountries",
    }),
  },
  created() {
    // check if the countries data is available before making call to the api to fetch all countries
    if (localStorage.getItem("zuvyCountries")) {
      this.setCountries(JSON.parse(localStorage.getItem("zuvyCountries")));
    } else {
      this.getAllCountries();
    }
  },
  methods: {
    ...mapMutations({
      setCountries: "SET_COUNTRIES",
    }),
    ...mapActions({
      getAllCountries: "fetchCountries",
    }),
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");
</style>
