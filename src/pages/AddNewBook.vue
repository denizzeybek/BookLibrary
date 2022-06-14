<template>
<div class="home bg-purple-100 h-screen w-screen flex items-center justify-around flex-wrap">
    <card  isMain="false" class="w-1/2" titleText="Add New Book">
        <div>
            <operation-button routeName="add-new-book" buttonText="Add New Book" />
            <operation-button routeName="book-list" buttonText="Book List" />
        </div>
    </card>
</div>
</template>

<script>
import operationButton from '@/components/buttons/operationButton.vue'
import card from '@/components/cards/card.vue'
export default {
    name: 'AddNewBook',
    components: {
        operationButton,
        card
    },

}
</script>

<style>

</style>
