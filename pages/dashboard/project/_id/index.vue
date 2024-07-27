
import Navbar from '~/components/Navbar.vue';
<template>
  <div class="project-page">
  <section class="dashboard-header pt-5">
        <div class="container mx-auto relative">
          <Navbar />
        </div>
      </section>
  <section class="container mx-auto pt-8">
        <div class="flex justify-between items-center">
          <div class="w-full mr-6">
            <h2 class="text-4xl text-gray-900 mb-2 font-medium">Dashboard</h2>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="w-3/4 mr-6">
            <h3 class="text-2xl text-gray-900 mb-4">Campaign Details</h3>
          </div>
          <div class="w-1/4 text-right">
            <nuxt-link
              :to="{
                name: 'dashboard-project-id-edit',
                params: {id: campaign.data.id}
              }"
              class="bg-green-button hover:bg-green-button text-white font-bold px-4 py-1 rounded inline-flex items-center"
            >
              Edit
            </nuxt-link>
          </div>
        </div>
        <div class="block mb-2">
          <div class="w-full lg:max-w-full lg:flex mb-4">
            <div
              class="w-full border border-gray-400 bg-white rounded p-8 flex flex-col justify-between leading-normal"
            >
              <div>
                <div class="text-gray-900 font-bold text-xl mb-2">
                  {{ campaign.data.name }}
                </div>
                <p class="text-sm font-bold flex items-center mb-1">
                  Short Description
                </p>
                <p class="text-gray-700 text-base">
               {{ campaign.data.short_description }}
                </p>
                <p class="text-sm font-bold flex items-center mb-1">
                  Description
                </p>
                <p class="text-gray-700 text-base">
                  {{ campaign.data.description }}
                </p>
                <p class="text-sm font-bold flex items-center mb-1 mt-4">
                  What Will Funders Get
                </p>
                <ul class="list-disc ml-5" v-for="perk in campaign.data.perks" :key="perk">
                  <li>{{ perk }}</li>
                </ul>
                <p class="text-sm font-bold flex items-center mb-1 mt-4">
                  Price
                </p>
                <p class="text-4xl text-gray-700 text-base">
                  Rp. {{ new Intl.NumberFormat().format(campaign.data.goal_amount) }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="w-2/4 mr-6">
            <h3 class="text-2xl text-gray-900 mb-4 mt-5">Gallery</h3>
          </div>
          <div class="w-2/4 text-right">
            <input type="file" ref="file"
            @change="selectFile"
            class="border p-1 rounded overflow-hidden">
            <button
              @click="upload"
              class="bg-green-button hover:bg-green-button text-white font-bold px-4 py-2 rounded inline-flex items-center"
            >
              Upload
            </button>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-4 -mx-2">
          <div
            class="relative w-full bg-white m-2 p-2 border border-gray-400 rounded"
            v-for="image in campaign.data.images" :key="image.image_url"
          >
            <figure class="item-thumbnail">
              <img
              :src="$axios.defaults.baseURL +
              '/'+
               image.image_url"
              alt=""
              class="rounded w-full" />
            </figure>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="w-3/4 mr-6">
            <h3 class="text-2xl text-gray-900 mb-4 mt-5">
              Transaction History
            </h3>
          </div>
        </div>
        <div class="block mb-2">
          <div class="w-full lg:max-w-full lg:flex mb-4" v-for="transaction in transactions.data" :key="transaction.id">
            <div
              class="w-full border border-gray-400 lg:border-gray-400 bg-white rounded p-8 flex flex-col justify-between leading-normal"
            >
              <div>
                <div class="text-gray-900 font-bold text-xl mb-1">
                  {{ transaction.name }}
                </div>
                <p class="text-sm text-gray-600 flex items-center mb-2">
                  Rp. {{ new Intl.NumberFormat().format(transaction.amount) }} &middot;
                  <br>
                  Date: {{ transaction.created_at }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData ({ $axios, params }) {
    const campaign = await $axios.$get('/api/v1/campaigns/' + params.id)
    const transactions = await $axios.$get('/api/v1/campaigns/'+ params.id +'/transactions')
    return {campaign, transactions}
  },
  data() {
    return {
      url: '',
      selectedFile : undefined,
    }
  },
  methods: {
    selectFile() {
      this.selectedFiles = this.$refs.file.files
    },
    // fungsi untuk menload data image yg sudah di upload
    async load() {
      try {
        const campaign = await this.$axios.$get('/api/v1/campaigns/' + this.$route.params.id)
        this.campaign = campaign
      } catch (error) {
        console.error('Error loading campaign:', error)
      }
    },
    // fungsi upload image
    async upload(){
      let formData = new FormData()
      formData.append('campaign_id', this.$route.params.id)
      formData.append('file', this.selectedFiles.item(0))
      formData.append('is_primary', true)
      // lanjut proses upload
      try {
        let response = await this.$axios.post('/api/v1/campaign-images', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        console.log(response)
        this.load()
        this.selectedFiles = undefined
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
