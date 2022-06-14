<template>
<div class="home bg-purple-100 h-screen w-screen flex items-center justify-around flex-wrap">
    <card isBookList="true" class="w-1/2" isMain="false" titleText="Add New Book" style="position:relative;">
        <div class="flex items-start flex-col">
            <list-item/>
            <list-item/>
            <list-item/>
        </div>
        <div  class="flex items-center justify-center w-full"  style="position:absolute;bottom:0;"> 
            <custom-pagination/>
        </div>
    </card>
</div>
</template>

<script>

import card from '@/components/cards/card.vue'
import customPagination from '@/components/pagination/pagination.vue'
import listItem from '@/components/listItem/listItem.vue'
export default {
    name: 'AddNewBook',
    components: {
        card,
        customPagination,
        listItem
    },
    data() {
        return {
            
        }
    },
    methods:{
        
    }

}
</script>

<style>

</style>
