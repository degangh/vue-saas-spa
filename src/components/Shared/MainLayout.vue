<!-- Layout.vue -->
<template>
  <div class="flex h-screen">
    <!-- Side Navigation -->
    <aside class="bg-gray-800 text-white w-56">
      <div class="p-4 bg-gray-700 text-bold">Simple CRM</div>
      <ul class="pl-6 pt-6 space-y-3">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <!-- Add more links as needed -->
      </ul>
    </aside>
    
    <!-- Main Content -->
    <main class="flex-grow">
      <!-- Top Navigation -->
      <nav class="flex bg-white p-4 justify-between border-b">
        <!-- Add your top navigation content here -->
        <div>ABC Consulting</div>
        <div class="ml-2 p-0"><input type="text" placeholder="Search" class="border w-full px-3 h-6 rounded-xl focus:outline-none"/></div>
        <div class="mr-6">Welcome, John Doe</div>
        <!-- Add more links as needed -->
      </nav>
      
      <!-- Main Section -->
      <section class="p-4">
        <router-view></router-view>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
};
</script>
