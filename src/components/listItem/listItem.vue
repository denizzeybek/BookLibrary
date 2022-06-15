<template>
  <div
    class="
      list-row
      flex
      w-full
      border-solid border
      py-1
      my-2
      border-sky-500
      px-3
      rounded
    "
    style="width: 100%; margin-left: 4px"
  >
    <div class="list-img flex items-center justify-center">
      <img
        v-if="itemObject.imageUrl"
        class="book-img"
        :src="itemObject.imageUrl"
        alt="book image"
      />
      <img
        v-else
        class="book-img"
        src="../../assets/images/book1.png"
        alt="book image"
      />
    </div>
    <div class="list-content flex justify-between pl-2" style="width: 600px">
      <div class="list-texts">
        <div>
          <p class="text-lg text-start pt-1">{{ itemObject.bookName }}</p>
        </div>
        <div>
          <p class="text-md text-start mt-2">{{ itemObject.author }}</p>
        </div>
      </div>
      <div class="list-labels">
        <div v-if="itemObject.userIdentityNumber">
          <status-button
            @click="$emit('removeFromUser', itemObject)"
            class="bg-red-500 text-white hover:bg-red-900 mt-2"
            buttonText="At User"
          />
        </div>
        <div v-else>
          <status-button
            class="bg-green-500 text-white hover:bg-green-900 mt-2"
            buttonText="In Store"
          />
        </div>
        <div v-if="!itemObject.userIdentityNumber">
          <delete-button
            @click="$emit('deleteItem', itemObject)"
            class="text-red-500 hover:text-red-900 adjustment mt-3"
            buttonText="Delete"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import deleteButton from "@/components/buttons/actionButton.vue";
import statusButton from "@/components/buttons/actionButton.vue";
export default {
  components: {
    deleteButton,
    statusButton,
  },
  props: {
    itemObject: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.book-img {
  max-width: 80px;
  height: auto;
}
.adjustment {
  margin-top: 8px;
}
</style>
