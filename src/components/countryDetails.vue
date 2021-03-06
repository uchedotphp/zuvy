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
          class="flex-shrink-0 w-full max-w-xs max-h-64 object-cover"
          src="https://source.unsplash.com/random"
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
          {{ country && country.name }}
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
              <span class="font-semibold">Native Name</span>:
              <span class="dark:text-gray-400">
                {{ country && country.nativeName }}
              </span>
            </dd>
            <dd class="text-sm">
              <span class="font-semibold">Population</span>:
              <span class="dark:text-gray-400">
                {{ country && country.population | formatNumber }}
              </span>
            </dd>
            <dd class="text-sm">
              <span class="font-semibold">Region</span>:
              <span class="dark:text-gray-400">
                {{ country && country.region }}
              </span>
            </dd>
            <dd class="text-sm">
              <span class="font-semibold">Sub Region</span>:
              <span class="dark:text-gray-400">
                {{ country && country.subregion }}
              </span>
            </dd>
            <dd class="text-sm">
              <span class="font-semibold">Capital</span>:
              <span class="dark:text-gray-400">
                {{ country && country.capital }}
              </span>
            </dd>
          </dl>
          <dl class="mt-1 flex-grow flex flex-col space-y-2">
            <dd class="text-sm">
              <span class="font-semibold">Top Level Domain</span>:
              <template v-if="country">
                <span
                  v-for="domain in country.topLevelDomain"
                  :key="domain.index"
                  class="dark:text-gray-400"
                >
                  {{ domain }}
                </span>
              </template>
            </dd>
            <dd class="text-sm">
              <span class="font-semibold">Currencies</span>:
              <template v-if="country">
                <span
                  v-for="currency in country.currencies"
                  :key="currency.index"
                  class="dark:text-gray-400"
                >
                  {{ currency.name }}
                </span>
              </template>
            </dd>
            <dd class="text-sm">
              <span class="font-semibold">Languages</span>:
              <span class="dark:text-gray-400"> N/A </span>
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
          <template v-if="country && country.borders.length">
            <router-link
              tag="button"
              :to="{ name: 'Country', params: { name: border } }"
              v-for="border in country.borders"
              :key="border.index"
              type="button"
              class="
                mr-4
                mb-2
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
              <span class="ml-2">{{ border }}</span>
            </router-link>
          </template>
          <p v-else class="dark:text-gray-400">N/A</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { formatNumber } from "../mixins/helpers";
export default {
  name: "CountryDetails",
  mixins: [formatNumber],
  data() {
    return {
      country: null,
    };
  },
  computed: {
    ...mapGetters({ isDarkThemeOn: "isDarkThemeOn" }),
  },
  mounted() {
    const { name } = this.$route.params;
    return this.getCountryByName(name).then(
      (response) => (this.country = response)
    );
  },
  methods: {
    ...mapActions({
      getCountryByName: "getCountryByName",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
