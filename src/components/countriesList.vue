<template>
  <div
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
    <single-country-card v-for="n in 10" :key="n" />
  </div>
</template>

<script>
import SingleCountryCard from "./singleCountryCard.vue";
export default {
  name: "SingleCountry",
  components: {
    SingleCountryCard,
  },
};
</script>
SingleCountryCard

<style lang="scss" scoped></style>
