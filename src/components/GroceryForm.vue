<script setup>
    import { ref } from 'vue'
    import router from './../router/index.js'
    const props = defineProps(['product'])
    const emit = defineEmits(['submitGrocery'])

    const grocery = ref({ ...props.product })

    const onSubmit = () => {
        emit('submitGrocery', grocery.value)
        router.push('/')
    }
</script>

<template>
    <div class="mt-4">
        <form @submit.prevent="onSubmit">
            <div class="my-4">
                <label for="name" class="block mx-4">Name of product:</label>
                <input v-model="grocery.name" id="name" type="text" class="border border-slate-500 border-solid rounded-md pl-2" required><br>
            </div>

            <div class="my-4">
                <label for="price" class="block mx-4">Price:</label>
                <input v-model="grocery.price" id="price" type="number" min="0" step="0.01" class="border border-slate-500 border-solid rounded-md pl-2" required><br>
            </div>

            <div class="my-4">
                <label for="amount" class="block mx-4">Amount:</label>
                <input v-model="grocery.amount" id="amount" type="number" min="0" step="1" class="border border-slate-500 border-solid rounded-md pl-2" required><br>
            </div>

            <button type="submit" class="mt-4 px-2 py-1 bg-emerald-500 border-black solid rounded-lg">Submit</button>
        </form>
    </div>
</template>