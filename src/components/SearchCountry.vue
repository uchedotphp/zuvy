<template>
  <div>
    <div class="relative rounded-md shadow-sm overflow-hidden">
      <div
        class="
          absolute
          inset-y-0
          left-0
          pl-8
          flex
          items-center
          pointer-events-none
        "
      >
        <img
          v-if="isDarkThemeOn"
          class="h-5 lg:h-4"
          src="../assets/images/icons/search-dark.svg"
          alt="a half white moon"
        />
        <img
          v-else
          class="h-5 lg:h-4"
          src="../assets/images/icons/search-light.svg"
          alt="a half dark moon"
        />
      </div>
      <input
        v-model="search"
        :class="'focus:outline-none block w-full pl-20 pr-10 py-5 text-lg text-gray-500 shadow-xl bg-whiteColor border border-gray-400 border-opacity-20 rounded-md dark:bg-darkBlueColor font-medium dark:text-veryLightGrayColor dark:placeholder-veryLightGrayColor placeholder-gray-300'"
        placeholder="Search for a country..."
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "SearchCountry",
  computed: {
    ...mapState({ searchTerm: (state) => state.searchTerm }),
    ...mapGetters({ isDarkThemeOn: "isDarkThemeOn" }),
    search: {
      get() {
        return this.searchTerm;
      },
      set(val) {
        this.setState({ searchTerm: val });
      },
    },
  },
  methods: {
    ...mapMutations({
      setState: "SET_STATE",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
