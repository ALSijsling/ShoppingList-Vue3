<script setup>
    import { useRoute } from 'vue-router'
    import GroceryForm from '../../components/GroceryForm.vue'
    import { getProductById } from '../../store/Groceries'
    import { updateProduct } from '../../store/Groceries'

    const route = useRoute()

    const id = route.params.id
    const product = getProductById(id)
</script>

<template>
    <GroceryForm @submitGrocery="(grocery) => updateProduct(grocery)" :product="product"/>
</template>