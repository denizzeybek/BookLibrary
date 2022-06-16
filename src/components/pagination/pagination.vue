<template>
<div class="bg-offWhite px-4 py-3 flex items-center justify-between w-full border-gray-200 sm:px-6">
    <div class="flex-1 flex justify-between sm:hidden">
        <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-offWhite hover:bg-gray-50"> Previous </a>
        <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-offWhite hover:bg-gray-50"> Next </a>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between" style="margin-left:150px;"> 
        <div>
            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-offWhite text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span class="sr-only">Previous</span>
                    <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                </a>
                <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-offWhite border-gray-300 text-gray-500 hover:bg-gray-50" -->
                
                <!-- TODO: burda sayfa sayısını hesaplayıp loop a alman gerekiyor -->
                <a href="#" aria-current="page" class="z-10 bg-gray-200 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a>
                <a href="#" class="bg-offWhite border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a>
                <a href="#" class="bg-offWhite border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </a>
                <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-offWhite text-sm font-medium text-gray-700"> ... </span>
                <a href="#" class="bg-offWhite border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 8 </a>
                <a href="#" class="bg-offWhite border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 9 </a>
                <a href="#" class="bg-offWhite border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 10 </a>
                <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-offWhite text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span class="sr-only">Next</span>
                    <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
                </a>
            </nav>
        </div>
    </div>
</div>
</template>

<script>
import {
    ChevronLeftIcon,
    ChevronRightIcon
} from '@vue-hero-icons/solid'
export default{
    components:{
        ChevronLeftIcon,
        ChevronRightIcon
    }
}
</script>

<style>

</style>
