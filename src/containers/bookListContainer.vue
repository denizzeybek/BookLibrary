<template>
<div class="home bg-purple-100 h-screen w-screen flex items-center justify-around flex-wrap">
    <card isBookList="true" class="w-1/2 h-5/6" isMain="false" titleText="Book List" style="position:relative;">
        <div class="flex items-start flex-col">
            <list-item v-for="book in pageOfItems" :key="book.id" :itemObject="book"/> 
        </div>
        <div  class="flex items-center justify-center w-full"  style="position:absolute;bottom:0;"> 
            <!-- <custom-pagination/> -->
            <jw-pagination :maxPages=5 :pageSize=3 :items="getBookList" @changePage="onChangePage"></jw-pagination>
        </div>
    </card>
</div>
</template>

<script>

import card from '@/components/cards/card.vue'
import customPagination from '@/components/pagination/pagination.vue'
import listItem from '@/components/listItem/listItem.vue'
import {mapGetters} from 'vuex'
export default {
    name: 'AddNewBook',
    components: {
        card,
        customPagination,
        listItem
    },
    async created(){
        await this.$store.dispatch("getBookListAction")
    },
    data() {
        return {
            pageOfItems:[]
        }
    },
    methods:{
        onChangePage(pageOfItems) {
            console.log("sayfa değişti", pageOfItems)
            // update page of items
            this.pageOfItems = pageOfItems;
        }
    },
    computed:{
        ...mapGetters([
            'getBookList'
        ])
    }

}
</script>

<style>
.page-link{
    border:1px solid #38bdf8 !important;
    border-radius:0.25rem;
    margin-right:1px;
    margin-left:1px;
    margin-bottom:10px;
}
</style>
