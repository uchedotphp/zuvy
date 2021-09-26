<template>
  <div
    :class="'flex justify-between items-center px-4 py-10 lg:px-20 lg:py-6 shadow-xl dark:border-opacity-0 dark:bg-darkBlueColor'"
  >
    <h1
      @click="$router.push('/')"
      class="text-black font-bold text-lg lg:text-2xl dark:text-white"
    >
      Where in the world?
    </h1>
    <button
      type="button"
      @click="switchThemes"
      :class="'flex items-center space-x-2 focus:outline-none dark:text-whiteColor'"
    >
      <img
        v-if="isDarkThemeOn"
        class="h-5 lg:h-4"
        src="../assets/images/icons/light-moon.svg"
        alt="a half white moon"
      />
      <img
        v-else
        class="h-5 lg:h-4"
        src="../assets/images/icons/dark-moon.svg"
        alt="a half dark moon"
      />
      <span class="capitalize font-medium text-sm">{{
        isDarkThemeOn ? "dark mode" : "light mode"
      }}</span>
    </button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "TopHeader",
  computed: {
    ...mapGetters({
      isDarkThemeOn: "isDarkThemeOn",
    }),
  },
  methods: {
    ...mapMutations({
      switch: "SWITCH_THEME",
    }),
    switchThemes() {
      this.switch();
    },
  },
};
</script>

<style lang="scss" scoped></style>
