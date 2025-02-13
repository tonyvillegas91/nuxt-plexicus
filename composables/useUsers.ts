// composables/useUsers.ts

import { ref } from 'vue';

export function useUsers() {
  const users = ref([]);
  const error = ref<string | null>(null); // Define el tipo de error como string o null

  async function fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      // Verifica si la respuesta es exitosa
      if (!response.ok) {
        throw new Error(`Error al obtener usuarios: ${response.status} ${response.statusText}`);
      }

      users.value = await response.json(); // Guarda los datos en users.value
    } catch (err: any) {
      // Asegúrate de que el mensaje de error sea una cadena
      error.value = err.message || 'Ocurrió un error desconocido';
    }
  }

  return { users, error, fetchUsers };
}