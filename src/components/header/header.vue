<template>
  <div class="w-full px-4 flex justify-between items-center mb-4">
    <h5 class="text-xl text-white font-bold leading-none dark:text-white">
      {{ headerText }}
    </h5>
    <a
      @click="$router.push('/')"
      href="#"
      class="
        text-sm
        font-medium
        text-blue-600
        hover:underline
        dark:text-blue-500
        return-btn
      "
    >
      Return Home Page
    </a>
  </div>
</template>

<script>
export default {
  props: {
    headerText: {
      type: String,
      default: () => "Operations",
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 640px) {
  .return-btn {
    padding-left: 20px;
  }
}
</style>