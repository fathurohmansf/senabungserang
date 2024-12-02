<template>
  <div class="landing-page">
    <section class="landing-hero pt-5">
      <div class="header__bg"></div>
      <div class="container mx-auto relative">
        <Navbar />
        <div class="flex flex-col md:flex-row items-center pt-10 px-5 md:px-0">
          <div class="w-full md:w-1/2">
            <h1 class="text-2xl md:text-4xl text-white mb-5">
              Bantu kami menyebar <u class="hero-underline">kebaikan</u> <br> dengan
              Sedekah <u class="hero-underline">Nasi</u> <br />
              yang mereka butuhkan
            </h1>
            <p class="text-white text-lg md:text-xl font-light mb-8">
              Investasi ladang amal kebaikan <br />
              dengan berdonasi sebagai bentuk rasa kepedulian
            </p>
            <button @click="$router.push({ path: '/' })"
              class="block bg-orange-500 hover:bg-orange-700 text-white font-semibold px-12 py-3 text-lg md:text-xl rounded-full">
              Mulai Berdonasi
            </button>
          </div>
          <div class="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
            <img src="/tumb_senabung.png" alt="crowdfunding project" class="w-2/3 md:w-full"/>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto pt-24">
      <div class="flex flex-col md:flex-row justify-between items-center mb-10">
        <div class="w-auto">
          <h2 class="text-2xl md:text-3xl text-gray-900 mb-8">
            3 Langkah mudah untuk kamu <br />
            yang ingin berdonasi
          </h2>
        </div>
      </div>
      <div class="tristep">
      <div class="md:flex justify-center hidden">
        <div class="w-full px-5 md:px-56 mb-5">
          <img src="/line-step.svg" alt="" class="w-full" />
        </div>
      </div>
      <div class="md:flex flex-col md:flex-row justify-between items-center text-center">
        <div class="w-full md:w-1/3 mb-10 md:mb-0">
          <figure class="flex justify-center items-center">
            <img src="/step-1-illustration.svg" alt="" class="h-30 mb-8" />
          </figure>
          <div class="step-content">
            <h3 class="font-medium">Daftar</h3>
            <p class="font-light">
              Daftar akun dan mulai <br /> Mencari Program kita
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/3 mb-10 md:mb-0">
          <figure class="flex justify-center items-center md:-mt-24">
            <img src="/step-2-illustration.svg" alt="" class="h-30 mb-8" />
          </figure>
          <div class="step-content">
            <h3 class="font-medium">Buka Program kita</h3>
            <p class="font-light">
              Pilihlah salah satu program, <br />
              Dan Mulailah donasi
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/3 mb-10 md:mb-0">
          <figure class="flex justify-center items-center md:-mt-48">
            <img src="/step-3-illustration.svg" alt="" class="h-30 mb-8" />
          </figure>
          <div class="step-content">
            <h3 class="font-medium">Mulailah Berdonasi</h3>
            <p class="font-light">
              Untuk Saling Membantu dan memberikan kontribusi <br />
              bagi mereka yang membutuhkan
            </p>
          </div>
        </div>
      </div>
      </div>
      <!-- Mobile 3 Step -->
      <!-- <div class="flex justify-center hidden">
        <div class="w-full px-5 md:px-56 mb-5">
          <img src="/line-step.svg" alt="" class="w-full" />
        </div>
      </div>
      <div class="md:flex flex-col md:flex-row justify-between items-center text-center hidden">
        <div class="w-full md:w-1/3 mb-10 md:mb-0">
          <figure class="flex justify-center items-center">
            <img src="/step-1-illustration.svg" alt="" class="h-30 mb-8" />
          </figure>
          <div class="step-content">
            <h3 class="font-medium">Daftar</h3>
            <p class="font-light">
              Daftar akun dan mulai <br /> Mencari Program kita
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/3 mb-10 md:mb-0">
          <figure class="flex justify-center items-center -mt-24">
            <img src="/step-2-illustration.svg" alt="" class="h-30 mb-8" />
          </figure>
          <div class="step-content">
            <h3 class="font-medium">Buka Program kita</h3>
            <p class="font-light">
              Pilihlah salah satu program, <br />
              Dan Mulailah donasi
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/3 mb-10 md:mb-0">
          <figure class="md:flex justify-center items-center -mt-48">
            <img src="/step-3-illustration.svg" alt="" class="h-30 mb-8" />
          </figure>
          <div class="step-content">
            <h3 class="font-medium">Mulailah Berdonasi</h3>
            <p class="font-light">
              Untuk Saling Membantu dan memberikan kontribusi <br />
              bagi mereka yang membutuhkan
            </p>
          </div>
        </div>
      </div> -->
      <!-- dev -->
      <!-- <div class="flex justify-center">
        <div class="w-full px-5 md:px-56 mb-5">
          <img src="/line-step.svg" alt="" class="w-full" />
        </div>
      </div>
      <div class="md:flex flex-col md:flex-row justify-between items-center text-center">
        <div class="w-full md:w-1/3 mb-10 md:mb-0">
          <figure class="flex justify-center items-center">
            <img src="/step-1-illustration.svg" alt="" class="h-30 mb-8" />
          </figure>
          <div class="step-content">
            <h3 class="font-medium">Daftar</h3>
            <p class="font-light">
              Daftar akun dan mulai <br /> Mencari Program kita
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/3 mb-10 md:mb-0">
          <figure class="flex justify-center items-center -mt-24">
            <img src="/step-2-illustration.svg" alt="" class="h-30 mb-8" />
          </figure>
          <div class="step-content">
            <h3 class="font-medium">Buka Program kita</h3>
            <p class="font-light">
              Pilihlah salah satu program, <br />
              Dan Mulailah donasi
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/3 mb-10 md:mb-0">
          <figure class="md:flex justify-center items-center -mt-48">
            <img src="/step-3-illustration.svg" alt="" class="h-30 mb-8" />
          </figure>
          <div class="step-content">
            <h3 class="font-medium">Mulailah Berdonasi</h3>
            <p class="font-light">
              Untuk Saling Membantu dan memberikan kontribusi <br />
              bagi mereka yang membutuhkan
            </p>
          </div>
        </div>
      </div> -->
    </section>
    <section class="container mx-auto pt-24">
      <div class="md:flex flex-col md:flex-row justify-between items-center">
        <div class="w-auto">
          <h2 class="text-2xl md:text-3xl text-gray-900 mb-8">
            Beberapa program kita <br />
            untuk kamu pilih
          </h2>
        </div>
        <!-- <div class="w-auto mt-5">
          <nuxt-link class="text-gray-900 hover:underline text-md font-medium" to="">View All</nuxt-link>
        </div> -->
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
        <!-- ambil data dari api -->
        <div v-for="campaign in campaigns.data" :key="campaign.id"
          class="card-project w-full p-10 border border-gray-500 rounded-20">
          <div class="item">
            <figure class="item-image">
              <img :src="$axios.defaults.baseURL + '/' + campaign.image_url" alt="" class="rounded-20 w-full" />
            </figure>
            <div class="item-meta">
              <h4 class="text-2xl md:text-3xl font-medium text-gray-900 mt-5">
                {{ campaign.name }}
              </h4>
              <p class="text-md font-light text-gray-900 h-2">
                {{ campaign.description }}
              </p>
              <div class="relative pt-4 progress-bar">
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg">
                  <div
                  :style="'width:' + (campaign.current_amount / campaign.goal_amount) * 100 + '%'"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped">
                  </div>
                </div>
              </div>
              <div class="flex progress-info">
                <div>
                  {{ (campaign.current_amount / campaign.goal_amount) * 100 }}%
                </div>
                <div class="ml-auto font-semibold">
                  Rp. {{ new Intl.NumberFormat().format(campaign.goal_amount) }}
                </div>
              </div>
            </div>
            <button
            @click="$router.push({name:'projects-id',
            params: {id: campaign.id}
            })"
              class="text-center mt-5 button-cta block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-2 text-lg rounded-full">
              Fund Now
          </button>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto pt-24">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="w-auto">
          <h2 class="text-2xl md:text-3xl text-gray-900 mb-8">
            Lihat apa yang donatur <br />
            Merasa senang
          </h2>
        </div>
      </div>
      <div class="flex flex-col md:flex-row mb-10">
        <div class="w-full md:w-2/12 flex justify-center items-start">
          <img src="/testimonial-line.svg" alt="" />
        </div>
        <div class="w-full md:w-8/12 mt-16">
          <h2 class="text-2xl md:text-3xl text-gray-900 font-light">
            “Berdonasi di Senabung sangat mudah, nyaman dan transparant. <br />
            Tinggal cari program, klik dan mulai berdonasi.”
          </h2>
          <div class="testimonial-info mt-8">
            <div class="name text-xl font-semibold">Shopie Nicole</div>
            <div class="title text-xl font-light text-gray-400">
              Project Manager
            </div>
          </div>
          <div class="testimonial-icon mt-10">
            <img src="/testimonial-1-icon.png" alt="" class="w-20 mr-5 inline-block testimonial-user rounded-full" />
            <img src="/testimonial-2-icon.png" alt="" class="w-20 mr-5 inline-block testimonial-user rounded-full" />
            <img src="/testimonial-3-icon.png" alt=""
              class="w-20 mr-5 inline-block testimonial-user active rounded-full" />
          </div>
        </div>
        <div class="w-full md:w-2/12"></div>
      </div>
    </section>
    <div class="cta-clip -mt-20"></div>
    <CallToAction />
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const campaigns = await $axios.$get('/api/v1/campaigns')
    return { campaigns }
  },
}
</script>
