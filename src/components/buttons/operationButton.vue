<template>
    <div v-on="$listeners" class="flex justify-center rounded cursor-pointer">
    <!-- <operation-button class="w-80 text-md bg-purple-900 text-offGray"  buttonText="Add New Book2"/> -->
        <button @click="$router.push(`/${routeName}`)" class="cursor-pointer btn-default py-2 rounded flex justify-center w-full px-8 text-md bg-purple-900 text-white my-6 text-center hover:bg-purple-700">
            {{buttonText}} 
        </button>
    </div>
</template>

<script>
export default {
    props:{
        buttonText: {
            type:String,
            default: () => "Click"
        },
        routeName:{
            type:String
        }
    }
}
</script>

<style scoped> 

</style>