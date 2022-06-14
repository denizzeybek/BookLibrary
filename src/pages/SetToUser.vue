<template>
<div class="home bg-purple-100 h-screen w-screen flex items-center justify-around flex-wrap">
    <card isBookList="false"  isMain="false" class="w-1/2" titleText="Set To User">
        <div class=""> 
            <combobox />
            <custom-input placeText="Please Enter Book Name"/>
            <custom-input placeText="Please Insert User Identity Number"/>
            <custom-input placeText="Please Enter User Name Surname"/>
            <custom-text-area placeText="Please Enter User Address"/>
            <action-button @click="submitForm" class="bg-sky-500 hover:bg-sky-900 text-white py-2 my-6" buttonText="Set To User"/>
        </div>
    </card>
</div>
</template>

<script>
import card from '@/components/cards/card.vue'
import customInput from '@/components/inputs/input.vue'
import customTextArea from '@/components/inputs/textArea.vue'
import combobox from '@/components/inputs/combobox.vue'
import actionButton from '@/components/buttons/actionButton.vue'
export default {
    name: 'AddNewBook',
    components: {
        actionButton,
        card,
        customInput,
        customTextArea,
        combobox
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
