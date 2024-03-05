<script setup>
    import GroceryForm from '../../components/GroceryForm.vue'
    import { getProductById } from '../../store/Groceries'
</script>

<template>
    <GroceryForm :product="getProductById()"/>
</template>