<script setup>
const customer = ref({
  name: "",
  phone: "",
});

const createCustomer = async () => {
  const { data } = await useFetch("/api/customers", {
    method: "POST",
    body: customer,
  });
};
</script>

<template>
  <div>Page 3</div>
  <form @submit.prevent="createCustomer">
    <input type="text" v-model="customer.name" placeholder="Name" />
    <input type="text" v-model="customer.phone" placeholder="Phone" />
    <button type="submit">Create Customer</button>
  </form>
</template>
