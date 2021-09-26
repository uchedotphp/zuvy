<template>
  <div class="relative w-3/5 lg:w-48">
    <button
      @click="showDropDown = !showDropDown"
      type="button"
      class="
        bg-white
        dark:bg-darkBlueColor
        dark:border-transparent
        dark:text-veryLightGrayColor
        relative
        w-full
        border border-gray-300
        rounded-md
        shadow-sm
        pl-6
        pr-10
        py-5
        text-left text-lg
        focus:outline-none
        sm:text-sm
      "
      aria-haspopup="listbox"
      aria-expanded="true"
      aria-labelledby="listbox-label"
    >
      <span class="block truncate">
        {{ selected === null ? "Filter by Region" : selected }}
      </span>
      <span
        class="
          absolute
          inset-y-0
          right-0
          flex
          items-center
          pr-4
          pointer-events-none
        "
      >
        <img
          v-if="isDarkThemeOn"
          class="h-3"
          src="../assets/images/icons/chevronDownDark.svg"
          alt="arrow pointing down"
        />
        <img
          v-else
          class="h-3"
          src="../assets/images/icons/chevron-down-light.svg"
          alt="arrow pointing down"
        />
      </span>
    </button>
    <transition
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ul
        v-if="showDropDown"
        class="
          absolute
          z-10
          mt-2
          w-full
          bg-white
          dark:bg-darkBlueColor
          shadow-lg
          max-h-64
          rounded-md
          py-1
          text-base
          ring-1 ring-black ring-opacity-5
          overflow-auto
          focus:outline-none
        "
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-option-3"
      >
        <li
          v-for="n in regions"
          :key="n.index"
          @click.prevent="selectRegion(n)"
          class="
            dark:text-veryLightGrayColor
            dark:hover:text-darkBlueColor
            dark:hover:bg-veryLightGrayColor
            hover:bg-darkBlueColor hover:text-whiteColor
            capitalize
            text-gray-900
            cursor-pointer
            select-none
            relative
            py-2
            px-6
          "
          id="listbox-option-0"
          role="option"
        >
          <span class="font-normal block truncate"> {{ n }} </span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "RegionFilterSelect",
  data() {
    return {
      showDropDown: false,
      selected: null,
    };
  },
  computed: {
    ...mapState({
      regions: (state) => state.regions,
      searchTerm: (state) => state.searchTerm,
      filterSearch: (state) => state.filterSearch,
    }),
    ...mapGetters({ isDarkThemeOn: "isDarkThemeOn" }),
  },
  watch: {
    filterSearch(newValue) {
      if (newValue === "") {
        this.selected = null;
      }
    },
  },
  methods: {
    ...mapMutations({
      setState: "SET_STATE",
    }),
    selectRegion(region) {
      this.setState({ searchTerm: "" });
      this.setState({ filterSearch: region });
      this.selected = region;
      this.showDropDown = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
