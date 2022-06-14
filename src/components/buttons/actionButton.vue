<template>
    <div v-on="$listeners" class="action-div flex justify-center rounded cursor-pointer">
    <!-- <operation-button class="w-80 text-md bg-purple-900 text-offGray"  buttonText="Add New Book2"/> -->
        <button class="action-btn cursor-pointer rounded flex justify-center px-8 text-md   text-center">
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
    }
}
</script>

<style scoped> 
@media only screen and (max-width: 900px) {
    .action-btn{
        width:150px;
        font-size:11px;
    }
    .action-div{
        width:150px;
        margin-left:70px;
    }
}
</style>
/*

 */


/*
bg
text color
hover bg
hover color
 */