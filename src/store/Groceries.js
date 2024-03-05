import { ref, computed } from "vue";

//State
let id = 0

const groceries = ref([
    {id: id++, name: "Brood", price: 1.00, amount: ""},
    {id: id++, name: "Broccoli", price: 0.99, amount: ""},
    {id: id++, name: "Krettebollen", price: 1.20, amount: ""},
    {id: id++, name: "Noten", price: 2.99, amount: ""}
])

//Getters
export const getAllProducts = () => computed(() => groceries.value)
export const getProductById = (id) => computed(() => groceries.value.find(product => product.id == id))

//Actions
export const addProduct = (product) => groceries.value.push(product)