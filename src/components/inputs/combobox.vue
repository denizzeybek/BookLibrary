<template>
    <div class="min-w-72">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="bookname"> </label>
        <select class="custom-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookname" type="text">
            <option value="" disabled selected hidden>Please Select a Book </option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
        </select>
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
select option {
    background-color: green;
    font-weight: bold;
    color: red;
} 
@media only screen and (max-width: 900px) {
    .custom-input{
        width:150px;
        font-size:11px;
    }
}
</style>