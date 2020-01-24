<template>
  <div class="flex-fill d-flex flex-column">
    <nav class="navbar bg-white border-bottom navbar-light">
      <router-link class="navbar-brand mr-auto" :to="{ name: 'index' }">
        Home
      </router-link>
      <router-link class="btn nav-button" :to="{ name: 'bookable' }">
        Bookable
      </router-link>
    </nav>
    <main class="flex-fill d-flex">
      <div class="container mt-4 mb-4 pr-4 pl-4">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
export default {}
</script>
