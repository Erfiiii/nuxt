<template>
  <div>
    <search-bar-cm :cities=""></search-bar-cm>
    {{tours}}
  </div>
</template>

<script>
import { mapState } from "vuex";
import SearchBarCm from "../components/SearchBar";

export default {
  data() {
    return {
      tours: []
    }
  },
  components: {
    SearchBarCm
  },
  computed: {
    ...mapState({
      selectedCities: state => state.selectedCities;
    })
  },
  async created() {
    let citiesForSearch = this.selectedCities.map(city => city.name);
    try {
      let res = await HTTPClient(`${GET_ITINENARIES_BY_CITY}?cities=${citiesForSearch}`);
      this.tours = res.data;
    } catch (error) {
      throw e;
    }
  }
};
</script>