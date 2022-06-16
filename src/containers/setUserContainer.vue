<template>
  <div class="h-screen bg-gray-600 flex justify-center items-center">
    <div class="w-screen">
      <main-card class="py-5">
        <headerSection headerText="Set To User" />

        <div class="form-section w-11/12 flex justify-center">
          <FormulateForm
            @submit="handleSubmit"
            name="setToUser"
            v-model="formValues"
          >
            <FormulateInput
              v-for="input in inputsArray"
              :key="input.id"
              class="form-custom-inputs text-white"
              validation="required"
              :options="getBookSelectObj"
              :name="input.name"
              :type="input.type"
              :placeholder="input.placeholder"
            />
            <div class="flex mt-4 space-x-3 lg:mt-6 justify-center">
              <general-button buttonText="Set To User"></general-button>
            </div>
          </FormulateForm>
        </div>
      </main-card>
    </div>
  </div>
</template>

<script>
import mainCard from "@/components/card/mainCard";
import headerSection from "@/components/header/header.vue";
import generalButton from "@/components/button/generalButton.vue";
import { mapGetters } from "vuex";
import uuid4 from "@/assets/js/uuid4";
export default {
  components: {
    mainCard,
    generalButton,
    headerSection,
  },
  async created() {
    await this.$store.dispatch("getBookListAction");
    this.$store.dispatch("getBookSelectAction");
  },
  data() {
    return {
      formValues: {},
      inputsArray: [
        {
          name: "bookName",
          type: "select",
          placeholder: "Please Enter Book Name*",
        },
        {
          name: "identityNumber",
          type: "text",
          placeholder: "Please Insert User Identity Number*",
        },
        {
          name: "fullName",
          type: "text",
          placeholder: "Please Enter User Fullname*",
        },
        {
          name: "address",
          type: "textarea",
          placeholder: "Please Enter User Address*",
        },
      ],
    };
  },
  methods: {
    async handleSubmit() {
      let formObject = this.formValues;
      formObject.id = uuid4();
      await this.$store.dispatch("setToUserAction", {
        vm: this,
        formObject: formObject,
      });
      await this.$store.dispatch("findBookIdAction", formObject.bookName);
      await this.$store.dispatch("updateBookIdentityAction", {
        bookId: this.getBookId,
        userIdentityNumber: formObject.identityNumber,
      });
    },
  },
  computed: {
    ...mapGetters(["getBookSelectObj", "getBookId"]),
  },
};
</script>

<style>
</style>