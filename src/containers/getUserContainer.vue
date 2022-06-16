<template>
  <default-layout>
    <main-card class="py-5">
      <headerSection headerText="Get From User" />

      <div class="form-section w-11/12 flex justify-center">
        <FormulateForm
          @submit="handleSubmit"
          name="addBook"
          v-model="formValues"
          class="w-1/2 flex justify-center flex-col my-5"
        >
          <FormulateInput
            class="form-custom-inputs text-white"
            name="bookName"
            type="select"
            :options="getBookSelectObj"
            placeholder="Please Select a Book*"
            validation="required"
          />

          <div
            class="
              get-text-section
              flex
              items-start
              min-h-32
              mb-2
              mt-4
              flex-col
            "
          >
            <p v-if="getAddress" class="text-lg max-w-fit text-left text-white">
              {{ getAddress }}
            </p>
            <p v-else class="text-lg text-white">This book is in library...</p>
          </div>
          <div class="flex mt-4 space-x-3 lg:mt-6 justify-center">
            <general-button buttonText="Get From User"></general-button>
          </div>
        </FormulateForm>
      </div>
    </main-card>
  </default-layout>
</template>

<script>
import mainCard from "@/components/card/mainCard";
import headerSection from "@/components/header/header.vue";
import defaultLayout from "@/layout/defaultLayout.vue";
import generalButton from "@/components/button/generalButton.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    mainCard,
    generalButton,
    defaultLayout,
    headerSection,
  },
  async created() {
    await this.$store.dispatch("getUserListAction");
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
      // console.log("here");

      let formObject = this.formValues;
      await this.$store.dispatch("findUserAddressAction", {
        vm: this,
        bookName: formObject.bookName,
      });
    },
  },
  computed: {
    ...mapGetters(["getBookSelectObj", "getBookId", "getAddress"]),
  },
};
</script>

<style>
</style>