<template>
  <div v-on="$listeners">
    <!-- <div> -->
    <button
      @click="$emit('clickBtn')"
      href="#"
      class="
        inline-flex
        items-center
        py-2
        px-4
        text-sm
        font-medium
        text-center text-white
        rounded-lg
        focus:ring-4 focus:outline-none
      "
      :class="[
        'bg-' + color + '-700',
        'hover:bg-' + color + '-800',
        'focus:ring-' + color + '-300',
      ]"
    >
      {{ buttonText }} 
    </button>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: () => "Operations",
    },
    color: {
      type: String,
      default: () => "blue",
    },
  },
};
</script>

<style scoped>
.bg-red-700{
  background-color:#DC2626;
}
.bg-red-700:hover{
  background-color:#b01e1e;
}
.bg-green-700{
  background-color:#22c55e;
}
.bg-green-700:hover{
  background-color:#178941;
}
</style>