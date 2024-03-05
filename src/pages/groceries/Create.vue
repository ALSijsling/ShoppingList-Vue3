<script setup>
    import GroceryForm from '../../components/GroceryForm.vue'
    import { getAllProducts } from '../../store/Groceries'
    import { addProduct } from '../../store/Groceries'

    const product = {};
</script>

<template>
    <GroceryForm @submitGrocery="(grocery) => addProduct(grocery)" :product="product"/>
</template>