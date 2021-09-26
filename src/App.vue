<template>
  <div :class="{ dark: isDarkThemeOn }">
    <!-- Top title header -->
    <top-header />
    <!-- views -->
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
import TopHeader from "@/components/topHeader.vue";
export default {
  components: {
    TopHeader,
  },
  computed: {
    ...mapGetters({
      isDarkThemeOn: "isDarkThemeOn",
      allCountries: "allCountries",
    }),
  },
  created() {
    // check if the countries data is available before making call to the api to fetch all countries
    if (localStorage.getItem("zuvyCountries")) {
      console.log('localstorage called');
      try {
        this.setCountries(JSON.parse(localStorage.getItem("zuvyCountries")));
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('api called');
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
