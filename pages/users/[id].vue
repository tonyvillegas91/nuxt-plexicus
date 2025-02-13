<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <header class="bg-blue-600 text-white p-4 shadow-md">
      <h1 class="text-2xl font-bold text-center">User Details</h1>
    </header>

    <main class="container mx-auto p-4 flex-grow">
      <div v-if="loading" class="text-center py-8">
        <p class="text-gray-600">loading...</p>
      </div>
      <div v-else-if="user" class="card shadow-sm mx-auto w-75 bg-white p-6 rounded-lg">

        <h2 class="text-3xl font-bold text-center text-primary mb-4">{{ user.name }}</h2>
        <hr class="mb-4" />
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>Email:</strong> {{ user.email }}</li>
          <li class="list-group-item"><strong>City:</strong> {{ user.address.city }}</li>
        </ul>
      </div>
      <p v-else class="text-red-500 text-center">User not found.</p>
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const loading = ref(true);
const user = ref(null);

async function fetchUser() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${route.params.id}`
    );
    if (!response.ok) throw new Error('Usuario no encontrado');
    user.value = await response.json();
  } catch (err) {
    console.error(err.message);
  } finally {
    loading.value = false;
  }
}

fetchUser();
</script>