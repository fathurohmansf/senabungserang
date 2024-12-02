<template>
      <section class="call-to-action bg-purple-progress pt-64 pb-10">
        <div class="container mx-auto">
          <div class="w-full text-center">
            <h1 class="text-5xl text-white font-semibold">
              Cara mudah untuk berdonasi
              <br />
              sisihkan uang terbaik anda
            </h1>
            <button
              @click="$router.push({ path: '/register' })"
              class="inline-block bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 mt-8 text-lg rounded-full"
            >
              Donasi Sekarang
            </button>
          </div>
        </div>
      </section>
</template>
