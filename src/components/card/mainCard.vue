<template>
  <!-- <div class="flex justify-center items-center "> -->
  <div class="flex justify-center items-center ">
    <div
      class="card-container w-1/2 rounded-lg border shadow-md bg-gray-800 border-gray-700 "
    >
      <div class="flex flex-col items-center py-10">
            <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media only screen and (max-width: 640px) {
    .card-container{
      width:100vw;
      height:55vh;
      display:flex;align-items:center;
      justify-content:center;
    }
}
</style>