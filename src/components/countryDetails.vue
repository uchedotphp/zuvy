<template>
  <div
    class="
      px-4
      py-10
      lg:px-20 lg:pt-6
      dark:bg-veryDarkBlueDarkColor
      min-h-screen
    "
  >
    <button
      @click="$router.go(-1)"
      type="button"
      class="
        inline-flex
        border border-gray-100
        items-center
        px-6
        py-2
        dark:border-transparent dark:bg-darkBlueColor
        text-sm
        leading-4
        dark:text-white
        shadow-lg
        focus:outline-none
      "
    >
      <img
        v-if="isDarkThemeOn"
        class="h-4"
        src="../assets/images/icons/arrow-back-white.svg"
        alt=""
        srcset=""
      />
      <img
        v-else
        class="h-4"
        src="../assets/images/icons/arrow-back-black.svg"
        alt=""
        srcset=""
      />
      <span class="ml-2">Back</span>
    </button>

    <div class="mt-14 grid grid-cols-1 md:grid-cols-2">
      <div>
        <img
          class="flex-shrink-0 w-full max-w-xs"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
          alt=""
        />
      </div>
      <div>
        <h3
          class="
            text-gray-900
            dark:text-veryLightGrayColor
            text-lg
            font-medium
            mt-6
          "
        >
          united states of america
        </h3>
        <div
          class="
            pt-6
            md:pb-10
            dark:text-veryLightGrayColor
            space-y-12
            md:space-y-0 md:flex
          "
        >
          <dl class="mt-1 flex-grow flex flex-col space-y-2">
            <dd class="text-sm">
              <span class="font-semibold">Population</span>: 323,947,000
            </dd>
            <dd class="text-sm">
              <span class="font-semibold">Region</span>: Americas
            </dd>
            <dd class="text-sm">
              <span class="font-semibold">Capital</span>: Washington, D.C
            </dd>
          </dl>
          <dl class="mt-1 flex-grow flex flex-col space-y-2">
            <dd class="text-sm">
              <span class="font-semibold">Population</span>: 323,947,000
            </dd>
            <dd class="text-sm">
              <span class="font-semibold">Region</span>: Americas
            </dd>
            <dd class="text-sm">
              <span class="font-semibold">Capital</span>: Washington, D.C
            </dd>
          </dl>
        </div>
        <div class="md:flex items-center flex-wrap mt-8">
          <h3
            class="
              text-gray-900
              dark:text-veryLightGrayColor
              text-lg
              font-medium
              md:mr-5
            "
          >
            Border Countries:
          </h3>
          <button
            v-for="n in 3"
            :key="n"
            type="button"
            class="
              mr-4
              inline-flex
              items-center
              px-6
              py-2
              border border-gray-100
              dark:bg-darkBlueColor dark:border-transparent
              shadow-lg
              text-sm
              leading-4
              font-medium
              dark:text-white
              focus:outline-none
            "
          >
            <span class="ml-2">France</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CountryDetails",
  computed: {
    ...mapGetters({ isDarkThemeOn: "isDarkThemeOn" }),
  },
};
</script>

<style lang="scss" scoped></style>
