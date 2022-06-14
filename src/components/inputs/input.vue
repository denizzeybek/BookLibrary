<template>
    <div class="min-w-72">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="bookname"> </label>
        <input class="custom-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookname" type="text" :placeholder="placeText">
    </div>
</template>

<script>
export default {
    props: {
        placeText: {
            type: String,
            default: () => "Operations"
        }, 
    }
}
</script>

<style scoped>
@media only screen and (max-width: 900px) {
    .custom-input{
        width:150px;
        font-size:11px;
    }
}
</style>