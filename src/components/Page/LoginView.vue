<template>
    <div class="flex min-h-screen items-center justify-center bg-gray-100">
      <div class="bg-white px-8 py-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-6">Login</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 mb-2">Email:</label>
            <input type="email" id="email" v-model="email" class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500">
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700 mb-2">Password:</label>
            <input type="password" id="password" v-model="password" class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500">
          </div>
          <div class="flex items-center justify-between">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">Login</button>
            <a href="#" class="text-sm text-gray-600 hover:text-gray-700">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      handleSubmit() {
        // Implement login logic here (e.g., API call, authentication)
        console.log('Login form submitted:', this.email, this.password);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any specific styles for the login page here */
  </style>
  