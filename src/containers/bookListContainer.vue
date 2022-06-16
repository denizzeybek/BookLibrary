<template>
  <div class="h-screen bg-gray-600 flex justify-center items-center">
    <div class="w-screen">
      <main-card class="py-5" style="position: relative">
        <headerSection headerText="Book List" />

        <div class="flow-root w-11/12 flex justify-center">
          <ul role="list" class="divide-y divide-gray-700">
            <list-item
              @removeFromUser="removeItemFromUser($event)"
              @deleteItem="deleteBookItem($event)"
              v-for="book in pageOfItems"
              :key="book.id"
              :itemObject="book"
            ></list-item>
          </ul>
          <div
            class="flex items-center justify-center w-full"
            style="position: absolute; bottom: 10; right: 0"
          >
            <!-- <custom-pagination/> -->
            <jw-pagination
              :maxPages="5"
              :pageSize="3"
              :items="getBookList"
              @changePage="onChangePage"
              style="color: white"
            ></jw-pagination>
          </div>
        </div>
      </main-card>
    </div>
  </div>
</template>

<script>
import mainCard from "@/components/card/mainCard";
import headerSection from "@/components/header/header.vue";
import customPagination from "@/components/pagination/pagination.vue";
import listItem from "@/components/listItem/listItem.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    mainCard,
    headerSection,
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
          } else {
            this.$store.dispatch("takeBookBackAction", {
              vm: this,
              id: itemObject.id,
            });
          }
        },
      });
    },
    deleteBookItem(itemObject) {
      // console.log(this, "this");
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
          } else {
            this.$store.dispatch("removeBookAction", {
              vm: this,
              id: itemObject.id,
              name: itemObject.bookName,
            });
          }
        },
      });
    },
  },
  computed: {
    ...mapGetters(["getBookList"]),
  },
};
</script>

<style scoped>
.page-link {
  border: 1px solid #38bdf8 !important;
  border-radius: 0.25rem;
  margin-right: 1px;
  margin-left: 1px;
  margin-bottom: 10px;
}
</style>