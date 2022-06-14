<template>
<div class="list-row flex w-full border-solid border py-1 my-1 border-sky-500 px-3 rounded" style="width:100%;margin-left:4px;">
    <div class="list-img flex items-center justify-center">
        <img class="book-img" src="../../assets/images/book1.png" alt="book image">
    </div>
    <div class="list-content flex justify-between" style="width:600px;">
        <div class="list-texts ">
            <div>
                <p class="text-lg">Harry Potter</p>
            </div>
            <div>
                <p class="text-md">J.K Rowling</p>
            </div>
        </div>
        <div class="list-labels">
            <div>
                <status-button class="bg-green-500 text-white hover:bg-green-900" buttonText="In Store" />
            </div>
            <!-- <div>
                    <status-button class="bg-red-500 text-white hover:bg-red-900" buttonText="At User"/>
                </div> -->
            <div>
                <delete-button @click="deleteItem" class="text-red-500 hover:text-red-900" buttonText="Delete" />
            </div>
        </div>
    </div>

</div>
</template>

<script>
import deleteButton from '@/components/buttons/actionButton.vue'
import statusButton from '@/components/buttons/actionButton.vue'
export default {
    components: {
        deleteButton,
        statusButton
    },
    methods: {
        deleteItem() {
            this.$confirm({
                message: 'Are you sure?',
                button: {
                    no: 'No',
                    yes: 'Yes'
                },
                callback: confirm => {
                    if (confirm) {
                        this.$toastr('success', 'Book Removed', 'DELETED!')
                    } 
                }
            })
        }
    }
}
</script>

<style scoped>
.book-img {
    max-width: 80px;
    height: auto;
}
</style>
