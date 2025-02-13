<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <header class="bg-blue-600 text-white p-4 shadow-md">
      <h1 class="text-2xl font-bold text-center">User List</h1>
    </header>

    <main class="container mx-auto p-4 flex-grow">
      <div v-if="users.length > 0" class="row row-cols-1 row-cols-sm-2 g-4">
        <div
          v-for="(user, index) in users"
          :key="user.id"
          class="col"
        >
          <div class="card h-100 shadow-sm">
            <NuxtLink :to="`/users/${user.id}`" class="text-decoration-none">
              <div class="card-body text-center">
                <h5 class="card-title">{{ user.name }}</h5>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <p v-else-if="error" class="text-red-500 text-center">{{ error }}</p>
      <p v-else class="text-center">loading...</p>
    </main>
  </div>
</template>

<script setup>
import { useUsers } from '~/composables/useUsers';

const { users, error, fetchUsers } = useUsers();
fetchUsers();
</script>