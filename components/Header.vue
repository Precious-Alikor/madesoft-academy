<template>
  <nav class="flex justify-between items-center py-2 px-12">
    <div class="logo">
      <img src="../assets/images/logo.svg" alt="logo" class="w-32" />
    </div>
    <div class="nav-menu">
      <NuxtLink
        to="/home"
        class="text-black hover:underline hover:underline-offset-8 hover:font-semibold decoration-primary decoration-2 cursor-pointer pe-5"
        >Home
      </NuxtLink>
      <NuxtLink
        to="#"
        class="text-black hover:underline hover:underline-offset-8 hover:font-semibold decoration-primary decoration-2 cursor-pointer pe-5"
        >Programs
      </NuxtLink>
      <NuxtLink
        to="#"
        class="text-black hover:underline hover:underline-offset-8 hover:font-semibold decoration-primary decoration-2 cursor-pointer pe-5"
        >For business
      </NuxtLink>
      <NuxtLink
        to="#"
        class="text-black hover:underline hover:underline-offset-8 hover:font-semibold decoration-primary decoration-2 cursor-pointer pe-5"
        >Partnership
      </NuxtLink>
      <NuxtLink
        to="#"
        class="text-black hover:underline hover:underline-offset-8 hover:font-semibold decoration-primary decoration-2 cursor-pointer pe-5"
        >About Us
      </NuxtLink>
    </div>
    <div>
      <NuxtLink to="#" class="text-black me-7">Log In</NuxtLink>
      <button
        class="bg-black border h-10 px-9 border-black text-white rounded-md font-light text-sm"
      >
        Contact Us
      </button>
    </div>
  </nav>
</template>


<style>
</style>