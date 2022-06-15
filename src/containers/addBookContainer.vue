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
      titleText="Add New Book"
    >
      <div class="min-w-72">
        <FormulateForm
          @submit="handleSubmit"
          name="addBook"
          v-model="formValues"
        >
          <FormulateInput v-for="input in inputsArray" :key="input.id"
            class="form-custom-inputs"
            type="text"
            validation="required"
            :name="input.name"
            :placeholder="input.placeholder"
          /> 
          <action-button
            class="bg-sky-500 hover:bg-sky-900 text-white py-2 my-6"
            buttonText="Save"
          />
        </FormulateForm>
      </div>
    </card>
  </div>
</template>

<script>
import card from "@/components/cards/card.vue";
import actionButton from "@/components/buttons/actionButton.vue";
import uuid4 from "@/assets/js/uuid4";
export default {
  name: "AddNewBook",
  components: {
    actionButton,
    card,
  },
  data() {
    return {
      formValues: {},
      inputsArray: [
        {name:"bookName", placeholder:"Please Enter Book Name*"},
        {name:"author", placeholder:"Please Enter Author Name*"},
        {name:"imageUrl", placeholder:"Please Enter Book Image URL*"},
      ]
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
@media only screen and (max-width: 900px) {
  .form-custom-inputs {
    width: 150px;
    font-size: 11px;
  }
}
</style>
