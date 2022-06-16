<template>
  <div class="h-screen bg-gray-600 flex justify-center items-center">
    <div class="w-screen">
      <main-card class="py-5">
        <headerSection headerText="Add New Book" />

        <div class="form-section w-11/12 flex justify-center">
          <FormulateForm
            @submit="handleSubmit"
            name="addBook"
            v-model="formValues"
            class="w-11/12 flex justify-center flex-col my-5"
          >
            <FormulateInput
              v-for="input in inputsArray"
              :key="input.id"
              class="form-custom-inputs text-white justify-center"
              type="text"
              validation="required"
              :name="input.name"
              :placeholder="input.placeholder"
              style="margin-left: 40px"
            />
            <div class="flex mt-4 space-x-3 lg:mt-6 justify-center">
              <general-button buttonText="Save"></general-button>
            </div>
          </FormulateForm>
        </div>
      </main-card>
    </div>
  </div>
</template>

<script>
import mainCard from "@/components/card/mainCard";
import generalButton from "@/components/button/generalButton.vue";
import headerSection from "@/components/header/header.vue";
import uuid4 from "@/assets/js/uuid4";

export default {
  components: {
    mainCard,
    generalButton,
    headerSection,
  },
  data() {
    return {
      formValues: {},
      inputsArray: [
        { name: "bookName", placeholder: "Please Enter Book Name*" },
        { name: "author", placeholder: "Please Enter Author Name*" },
        { name: "imageUrl", placeholder: "Please Enter Book Image URL*" },
      ],
    };
  },
  methods: {
    handleSubmit() {
      let formObject = this.formValues;
      formObject.id = uuid4();
      formObject.userIdentityNumber = "";
      this.$store.dispatch("addBookAction", {
        vm: this,
        formObject,
      });
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 640px) {
  .form-custom-inputs {
    margin-left: 0px !important;
  }
}
</style>