<template>
  <div :class="{ dark: isDarkThemeOn }">
    <!-- Top title header -->
    <top-header />
    <!-- views -->
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TopHeader from "@/components/topHeader.vue";
export default {
  components: {
    TopHeader,
  },
  computed: {
    ...mapGetters({ isDarkThemeOn: "isDarkThemeOn" }),
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");
</style>
