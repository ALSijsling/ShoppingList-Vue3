<script setup>
    import {getAllProducts} from "./../../store/Groceries.js"
    import GroceriesTable from "./../../components/GroceriesTable.vue";

</script>

<template>
    <GroceriesTable :groceries="getAllProducts()" />
</template>