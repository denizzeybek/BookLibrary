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
      isBookList="false"
      isMain="false"
      class="w-1/2 h-96"
      titleText="Get From User"
    >
      <div class="min-w-72">
        <FormulateForm
          @submit="handleSubmit"
          name="addBook"
          v-model="formValues"
        >
          <FormulateInput
            class="form-custom-inputs"
            name="bookName"
            type="select"
            :options="getBookSelectObj"
            placeholder="Please Select a Book*"
            validation="required"
          />

        <div
          class="get-text-section flex items-start min-h-32 mb-2 mt-4 flex-col"
        >
          <p v-if="getAddress" class="text-lg max-w-fit text-left">{{getAddress}}</p> 
          <p v-else class="text-lg">This book is in library...</p> 
        </div>
        <action-button 
          class="bg-sky-500 hover:bg-sky-900 text-white py-2 my-6"
          buttonText="Get From User"
        />
        </FormulateForm>
      </div>
    </card>
  </div>
</template>

<script>
import card from "@/components/cards/card.vue";
import actionButton from "@/components/buttons/actionButton.vue";

import { mapGetters } from "vuex";

export default {
  name: "AddNewBook",
  components: {
    actionButton,
    card,
  },
  async created() {
    await this.$store.dispatch("getUserListAction")
    await this.$store.dispatch("getBookListAction");
    await this.$store.dispatch("getBookSelectAction");
  },
  data() {
    return {
      formValues: {},
    };
  },
  methods: { 
    async handleSubmit() {
    console.log("here")

      let formObject = this.formValues; 
      await this.$store.dispatch("findUserAddressAction", formObject.bookName);
    },
  },
  computed: {
    ...mapGetters([
        "getBookSelectObj", 
        "getBookId",
        "getAddress"
    ]),
  },
};
</script>

<style>
</style>
