<template>
  <li class="py-3 sm:py-4">
    <div class="flex items-center pl-2">
      <div class="flex-shrink-0">
        <img
          class="w-8 h-8 rounded-full px-1"
          :src="itemObject.imageUrl"
          :alt="itemObject.bookName"
        />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium truncate px-1 text-white">
          {{ itemObject.bookName }}
        </p>
        <p class="text-sm truncate text-gray-400 px-1">
          {{ itemObject.author }}
        </p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-white">
        <div v-if="itemObject.userIdentityNumber">
          <general-button
            @click="$emit('removeFromUser', itemObject)"
            class="px-1"
            buttonText="At User"
            color="blue"
          ></general-button>
        </div>
        <div v-else>
          <general-button
            buttonText="In Store"
            color="green"
            class="px-1"
          ></general-button>
        </div>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-white">
        <div v-if="!itemObject.userIdentityNumber">
          <general-button
            @click="$emit('deleteItem', itemObject)"
            class="px-1"
            buttonText="Delete"
            color="red"
          ></general-button>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import generalButton from "@/components/buttons/generalButton.vue";
export default {
  components: {
    generalButton,
  },
  props: {
    itemObject: {
      type: Object,
    },
  },
};
</script>

<style scoped>
</style>