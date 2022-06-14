<template>
<div class="home bg-purple-100 h-screen w-screen flex items-center justify-around flex-wrap">
    <card isBookList="false"  isMain="false" class="w-1/2" titleText="Add New Book">
        <div> 
            <custom-input placeText="Please Enter Book Name"/>
            <custom-input placeText="Please Enter Author Name"/>
            <custom-input placeText="Please Enter Book Image URL"/>
            <action-button @click="submitForm" class="bg-sky-500 hover:bg-sky-900 text-white py-2 my-6" buttonText="Save"/>
        </div>
    </card>
</div>
</template>

<script>
import card from '@/components/cards/card.vue'
import customInput from '@/components/inputs/input.vue'
import actionButton from '@/components/buttons/actionButton.vue'
export default {
    name: 'AddNewBook',
    components: {
        actionButton,
        card,
        customInput
    },
    methods:{
        submitForm(){
            console.log("submit")
            this.$toastr('success', 'BookName Added!', 'ADDED')
        }
    }

}
</script>

<style>

</style>
