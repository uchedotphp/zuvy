<template>
  <nav
    class="bg-white px-4 py-3 flex items-center justify-between sm:px-6"
    aria-label="Pagination"
  >
    <div class="hidden sm:block">
      <p class="text-sm text-gray-700 dark:text-whiteColor">
        Showing
        <span class="font-medium">{{ currentPage }}</span>
        to
        <span class="font-medium">{{
          nextPage > totalItems ? totalItems : nextPage
        }}</span>
        of
        <span class="font-medium">{{ totalItems }}</span>
        results
      </p>
    </div>
    <div class="flex-1 flex justify-between sm:justify-end">
      <button
        :class="{ invisible: currentPage === 1 }"
        class="
          relative
          inline-flex
          items-center
          px-4
          py-2
          border border-gray-300
          text-sm
          font-medium
          rounded-md
          text-gray-700
          bg-white
          hover:bg-gray-50
        "
        @click="movePage('decrease')"
      >
        Previous
      </button>
      <button
        :class="{ invisible: nextPage > totalItems }"
        class="
          ml-3
          relative
          inline-flex
          items-center
          px-4
          py-2
          border border-gray-300
          text-sm
          font-medium
          rounded-md
          text-gray-700
          bg-white
          hover:bg-gray-50
        "
        @click="movePage('increase')"
      >
        Next
      </button>
    </div>
  </nav>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "PaginationButtons",
  computed: {
    ...mapState({
      totalItems: (state) => state.totalCountries,
      currentPage: (state) => state.currentPage,
      nextPage: (state) => state.nextPage,
    }),
  },
  methods: {
    ...mapMutations({
      moveToPage: "MOVE_TO_PAGE",
    }),
    movePage(e) {
      this.moveToPage(e);
    },
  },
};
</script>

<style lang="scss" scoped></style>
