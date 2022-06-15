<template>
  <div
    class="
      home
      bg-purple-100
      h-screen
      w-screen
      flex
      items-center
      justify-around
      flex-wrap
    "
  >
    <card
      isBookList="true"
      class="w-1/2 h-5/6"
      isMain="false"
      titleText="Book List"
      style="position: relative"
    >
      <div class="flex items-start flex-col">
        <list-item
          @removeFromUser="removeItemFromUser($event)"
          @deleteItem="deleteBookItem($event)"
          v-for="book in pageOfItems"
          :key="book.id"
          :itemObject="book"
        />
        <!-- <list-item v-for="book in pageOfItems" :key="book.id" :itemObject="book"/>  -->
      </div>
      <div
        class="flex items-center justify-center w-full"
        style="position: absolute; bottom: 0"
      >
        <!-- <custom-pagination/> -->
        <jw-pagination
          :maxPages="5"
          :pageSize="3"
          :items="getBookList"
          @changePage="onChangePage"
        ></jw-pagination>
      </div>
    </card>
  </div>
</template>

<script>
import card from "@/components/cards/card.vue";
import customPagination from "@/components/pagination/pagination.vue";
import listItem from "@/components/listItem/listItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "AddNewBook",
  components: {
    card,
    customPagination,
    listItem,
  },
  async created() {
    await this.$store.dispatch("getBookListAction");
  },
  data() {
    return {
      pageOfItems: [],
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
    removeItemFromUser(itemObject) {
      this.$confirm({
        message: `Are you sure you want to take ${itemObject.bookName} to library?`,
        button: {
          no: "No",
          yes: "Yes",
        },
        callback: (confirm) => {
          if (!confirm) {
            this.$toastr(
              "error",
              `${itemObject.bookName} could not take to library!`,
              "Error"
            );
          }
          this.$store.dispatch("takeBookBackAction", {
            vm: this,
            id: itemObject.id,
          });
        },
      });
    },
    deleteBookItem(itemObject) {
      console.log(this, "this");
      this.$confirm({
        message: `Are you sure you want to delete ${itemObject.bookName} ?`,
        button: {
          no: "No",
          yes: "Yes",
        },
        callback: (confirm) => {
          if (!confirm) {
            this.$toastr(
              "error",
              `${itemObject.bookName} could not be deleted!`,
              "Error"
            );
          }
          this.$store.dispatch("removeBookAction", {
            vm: this,
            id: itemObject.id,
            name: itemObject.bookName,
          });
        },
      });
    },
  },
  computed: {
    ...mapGetters(["getBookList"]),
  },
};
</script>

<style>
.page-link {
  border: 1px solid #38bdf8 !important;
  border-radius: 0.25rem;
  margin-right: 1px;
  margin-left: 1px;
  margin-bottom: 10px;
}
</style>
