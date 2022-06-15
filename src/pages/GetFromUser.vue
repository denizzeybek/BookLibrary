<template>
<div class="home bg-purple-100 h-screen w-screen flex items-center justify-around flex-wrap">
    <card isBookList="false"  isMain="false" class="w-1/2  h-96" titleText="Get From User">
        <div class=""> 
            <combobox />
            <div class="get-text-section flex items-start min-h-32 mb-2 mt-4 flex-col">
                <p class="text-lg">bilgiler...</p>
                <p class="text-lg">bilgiler...</p>
                <p class="text-lg">bilgiler...</p>
            </div>
            <action-button @click="getData" class="bg-sky-500 hover:bg-sky-900 text-white py-2 my-6" buttonText="Get From User"/>
        </div>
    </card>
</div>
</template>

<script>
import card from '@/components/cards/card.vue' 
import combobox from '@/components/inputs/combobox.vue'
import actionButton from '@/components/buttons/actionButton.vue'
export default {
    name: 'AddNewBook',
    components: {
        actionButton,
        card, 
        combobox
    },
    methods:{
        getData(){
            console.log("submit")
            this.$toastr('success', 'BookName has been getted from user!', 'GET')
        }
    }

}
</script>

<style>

</style>
