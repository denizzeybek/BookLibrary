<template>
  <div class="h-screen bg-gray-600 flex justify-center items-center">
    <div class="w-screen">
      <main-card class="py-5">
        <h2 class="mb-1 text-3xl font-medium text-white">
          Book Store Operations
        </h2>
        <div class="description-section py-4 flex flex-col justify-center">
          <span class="text-sm text-gray-400 text-center italic"
            >In this section, you can view the book lists.</span
          >
          <span class="text-sm text-gray-400 text-center italic">or </span>
          <span class="text-sm text-gray-400 text-center italic"
            >You can add and remove books.</span
          >
        </div>
        <div class="flex mt-4 space-x-3 lg:mt-6">
          <general-button
            @clickBtn="$router.push('/add-new-book')"
            buttonText="Add New Book"
          ></general-button>
          <general-button
            @clickBtn="$router.push('/book-list')"
            buttonText="Book List"
          ></general-button>
        </div>
      </main-card>

      <main-card class="py-5">
        <h2 class="mb-1 text-3xl font-medium text-white">User Operations</h2>
        <div class="description-section py-4 flex flex-col justify-center">
          <span class="text-sm text-gray-400 text-center italic"
            >In this section, you can set a book to person</span
          >
          <span class="text-sm text-gray-400 text-center italic">or </span>
          <span class="text-sm text-gray-400 text-center italic"
            >You can view who owns the book.</span
          >
        </div>
        <div class="flex mt-4 space-x-3 lg:mt-6">
          <general-button
            @clickBtn="$router.push('/set-to-user')"
            buttonText="Set To User"
          ></general-button>
          <general-button
            @clickBtn="$router.push('/get-from-user')"
            buttonText="Get From User"
          ></general-button>
        </div>
      </main-card>
    </div>
  </div>
</template>

<script>
import mainCard from "@/components/cards/mainCard";
import generalButton from "@/components/buttons/generalButton.vue";
export default {
  components: {
    mainCard,
    generalButton,
  },
  methods: {
    changePage() {
      // this.$router.push('/add-new-book')
      console.log("here");
      this.$router.push("/add-new-book");
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 640px) {
  .card-container {
    width: 100vw;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>