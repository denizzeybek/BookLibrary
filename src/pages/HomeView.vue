<template>
  <div class="home bg-purple-100 h-screen w-screen flex items-center justify-center flex-wrap"> 

      <card isBookList="false" isMain="true" class="w-1/3 mx-8" titleText="Book Store Operations">
        <div> 
          <operation-button routeName="add-new-book" buttonText="Add New Book"/>
          <operation-button routeName="book-list" buttonText="Book List"/>
        </div>
      </card>

      <card isBookList="false" isMain="true" class="w-1/3 mx-8" titleText="User Operations">
        <div>
          <operation-button routeName="set-to-user" buttonText="Set To User"/>
          <operation-button routeName="get-from-user" buttonText="Get From User"/>
        </div>
      </card>
      
  </div>
</template>

<script> 
import operationButton from '@/components/buttons/operationButton.vue'
import card from '@/components/cards/card.vue'
export default {
  name: 'HomeView',
  components: {
    operationButton,
    card
  }, 
}
</script>

<style scoped> 
</style>
