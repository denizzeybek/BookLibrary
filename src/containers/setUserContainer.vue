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
      titleText="Set To User"
    >
      <div class="min-w-72">
        <FormulateForm
          @submit="handleSubmit"
          name="setToUser"
          v-model="formValues"
        >
          <FormulateInput
            v-for="input in inputsArray"
            :key="input.id"
            class="form-custom-inputs"
            validation="required"
            :options="getBookSelectObj"
            :name="input.name"
            :type="input.type"
            :placeholder="input.placeholder"
          />
          <action-button
            class="bg-sky-500 hover:bg-sky-900 text-white py-2 my-6"
            buttonText="Set To User"
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
import uuid4 from "@/assets/js/uuid4";

export default {
  name: "AddNewBook",
  components: {
    actionButton,
    card,
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

<style scoped>
@media only screen and (max-width: 900px) {
  .form-custom-inputs {
    width: 150px;
    font-size: 11px;
  }
}
</style>
