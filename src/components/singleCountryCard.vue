<template>
  <ul>
    <li
      class="
        col-span-1
        flex flex-col
        bg-white
        dark:bg-darkBlueColor
        rounded-lg
        overflow-hidden
        shadow
        divide-y divide-gray-200
        max-w-xs
      "
    >
      <div class="flex-1 flex flex-col">
        <img
          class="flex-shrink-0"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
          alt=""
        />
        <div class="px-4 pt-6 pb-10 dark:text-veryLightGrayColor">
          <h3
            class="
              text-gray-900
              dark:text-veryLightGrayColor
              text-lg
              font-medium
            "
          >
            united states of america
          </h3>
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
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SingleCountryCard",
};
</script>

<style lang="scss" scoped></style>
