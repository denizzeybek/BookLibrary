<template>
<div class="card-container bg-offWhite rounded border border-purple-900 shadow-lg shadow-purple-500 min-w-52">
    <div v-if="isMain == 'true'" class="header flex justify-center text-center pt-2 flex-col">
        <p class="title text-2xl mt-3">{{titleText}} </p>
    </div>

    <div v-if="isMain == 'false'" class="header flex justify-between item-center pt-2 px-8 mt-3">
        <p class="title text-2xl">{{titleText}} </p>
        <a @click="$router.push('/')" class="return-btn text-md cursor-pointer flex items-center text-sky-500 hover:text-sky-900">Return Home Page </a>
    </div>

    <div  v-if="isBookList == 'false'" class="h-64 mt-10 flex  items-center justify-center text-center">
        <slot></slot>
    </div>

    <div  v-if="isBookList == 'true'" class="h-64 mt-2 flex  items-start justify-start text-center">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
    props: {
        titleText: {
            type: String,
            default: () => "Operations"
        },
        isMain: {
            type: String,
            default: () => "false"
        },
        isBookList: {
            type: String,
            default: () => "false"
        },
    }
}
</script>

<style scoped>
@media only screen and (max-width: 900px) {
    .header {
        flex-direction: column;
    }
    .title{
        font-size:16px;
    }
    .return-btn{
        font-size:14px;
    }
}
</style>
