<template>
  <div class="container">
    <span class="bg-cover"></span>
    <div class="h-screen w-screen bg-img">
      <div class="logo relative">
        <span class="block ml-1 text-white text text-l font-extrabold p1">IRAN TRIP PLANNER</span>
        <span class="block ml-1 text-white text text-l font-medium p1">By</span>
      </div>
      <div class="p-5 pl-40 max-w-xl relative">
        <h1 class="text-2xl text-white font-bold">Plan Your trip to Iran</h1>
        <p
          class="text-l text-white font-normal"
        >Find or create your best plan to visit Iran based on +300 plans designed by professional tour guides and travelers</p>
      </div>
      <search-bar-cm :cities="cities"></search-bar-cm>
    </div>
  </div>
</template>

<script>
import SearchBarCm from "../components/SearchBar";
import HTTPClient from "../utils/http";
import {mapMutations} from "vuex"
import {GET_CITES, GET_ITINENARIES_BY_CITY} from "../utils/endpoints"

export default {
  data() {
    return {
      cities: [
        {
          latitude: "35.6892",
          longitude: "51.3890",
          name: "Tehran",
          slug: "tehran"
        },
        {
          latitude: "33.9850",
          longitude: "51.4100",
          name: "Kashan",
          slug: "kashan"
        },
        {
          latitude: "32.6539",
          longitude: "51.6660",
          name: "Isfahan",
          slug: "isfahan"
        },
        {
          latitude: "31.8974",
          longitude: "54.3569",
          name: "Yazd",
          slug: "yazd"
        },
        {
          latitude: "29.5926",
          longitude: "52.5836",
          name: "Shiraz",
          slug: "shiraz"
        },
        {
          latitude: "38.0962",
          longitude: "46.2738",
          name: "Tabriz",
          slug: "tabriz"
        },
        {
          latitude: "33.5860",
          longitude: "51.5900",
          name: "Abyaneh",
          slug: "abyaneh"
        },
        {
          latitude: "36.6830",
          longitude: "48.5087",
          name: "Zanjan",
          slug: "zanjan"
        },
        {
          latitude: "30.2839",
          longitude: "57.0834",
          name: "Kerman",
          slug: "kerman"
        },
        {
          latitude: "30.0630",
          longitude: "57.2875",
          name: "Mahan",
          slug: "mahan"
        },
        {
          latitude: "34.6416",
          longitude: "50.8746",
          name: "Qom",
          slug: "qom"
        },
        {
          latitude: "36.2605",
          longitude: "59.6168",
          name: "Mashhad",
          slug: "mashhad"
        }
      ]
    };
  },
  components: {
    SearchBarCm
  },
  async created() {
    try {
      // THERE IS CORS ERROR IN YOUR API SO I COULD NOT GET RESPONSE
      let res = await HTTPClient.getRequest(GET_CITES);
    } catch (error) {
      // throw error;
    }
  },
  methods: {
    ...mapMutations({
      addCities : 'addCities'
    }),
    search({cities}) {
      this.addCities(cities)
    }
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.bg-img {
  background-image: url("../assets/images/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.bg-cover {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000);
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  height: 100%;
  display: block;
  opacity: 0.24;
  backdrop-filter: blur(30px);
}

.bg-blue-mi {
  background-color: #eaf0f4;
}

.custom-border {
  border: solid 1px #e7e8eb;
}
</style>
