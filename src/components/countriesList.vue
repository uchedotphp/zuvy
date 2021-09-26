<template>
  <div
    v-if="allCountries.length"
    role="list"
    class="
      grid grid-cols-1
      gap-14
      sm:gap-8
      md:gap-10
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
    "
  >
    <single-country-card
      v-for="country in allCountries"
      :key="country.alpha3Code"
      :countryData="country"
    />
  </div>
  <p
    v-else-if="!allCountries.length && Boolean(searchTerm)"
    class="dark:text-whiteColor text-center w-full text-lg mt-10"
  >
    Your search term "{{ searchTerm }}" is not found
  </p>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import SingleCountryCard from "./singleCountryCard.vue";
export default {
  name: "CountriesList",
  components: {
    SingleCountryCard,
  },
  computed: {
    ...mapState({ searchTerm: (state) => state.searchTerm }),
    ...mapGetters({
      allCountries: "allCountries",
    }),
  },
};
</script>
SingleCountryCard

<style lang="scss" scoped></style>
