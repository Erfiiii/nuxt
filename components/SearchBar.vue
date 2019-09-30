<template>
  <div class="bg-blue-mi pl-40 p-2 mt-10 full-width flex align-middle relative border">
    <div>
      <button
        @click="toggleCities"
        class="button relative custom-border p-1 px-2 text-base mr-2 rounded border-2"
        :class="{'bg-blue-300 text-white': stringCitiesButtonDisplay}"
      >{{destionationButton}}</button>
      <div
        class="cities-card ml-40 bg-white w-64 shadow absolute left-0 mt-2 h-64 overflow-y-scroll"
        v-if="citiesStatus"
      >
        <div class="head p-1" :class="{'border-b-2': selectedCities.lenght>0}">
          <span
            v-for="item in selectedCities"
            :key="item.name"
            @click="removeCity(item)"
            class="py-1 px-2 m-1 text-sm inline-block bg-blue-200 rounded"
          >{{item.name}}</span>
        </div>
        <div class="body p-2">
          <div class="p-2" v-for="city in cities" :key="city.name">
            <input
              :id="city.name"
              class="mr-2 leading-tight"
              type="checkbox"
              v-model="selectedCities"
              :value="city"
            />
            <label class="text ml-2 text-sm" :for="city.name">{{city.name}}</label>
          </div>
        </div>
        <div class="p-2 text-right">
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm py-1 px-4 rounded"
            @click="cancelCities"
          >Cancel</button>
          <button
            class="bg-blue-500 hover:bg-blue-400 text-white text-sm py-1 px-4 rounded"
            @click="applyCities"
          >Apply</button>
        </div>
      </div>
    </div>
    <div>
      <button
        class="button custom-border relative p-1 mr-2 px-2 text-base rounded border-2"
        @click="toggleDates"
      >Dates</button>
      <div class="month-card bg-white w-64 absolute shadow mt-2" v-if="datesStatus">
        <div class="body p-2">
          <div
            class="p-2 inline-block cursor-pointer"
            :class="{'bg-blue-100': selectedMonth.map((item)=>item.id).includes(month.id)}"
            v-for="month in dates"
            :key="month.id"
            @click="selectMonth(month)"
          >
            <span class="text ml-2 text-sm">{{month.name}}</span>
          </div>
        </div>
        <div class="p-2 text-right">
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm py-1 px-4 rounded"
          >Cancel</button>
          <button class="bg-blue-500 hover:bg-blue-400 text-white text-sm py-1 px-4 rounded">Apply</button>
        </div>
      </div>
    </div>
    <div>
      <button
        @click="toggleDurations"
        class="button relative custom-border p-1 mr-2 px-2 rounded text-base border-2"
      >Duration</button>
      <div class="duration-card bg-white w-48 absolute shadow mt-2" v-if="durationStatus">
        <div class="body p-2">
          <div class="p-2" v-for="item in durations" :key="item.id">
            <input
              :id="item.name"
              class="mr-2 leading-tight"
              type="radio"
              :value="item"
              v-model="selectedDuration"
            />
            <label :for="item.name" class="text ml-2 text-sm">{{item.name}}</label>
          </div>
        </div>
        <div class="p-2 text-right">
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm py-1 px-4 rounded"
          >Cancel</button>
          <button class="bg-blue-500 hover:bg-blue-400 text-white text-sm py-1 px-4 rounded">Apply</button>
        </div>
      </div>
    </div>
    <a
      v-if="showSearchButton"
      target="_blank"
      :href="`/itirenanties?cities=${JSON.stringify(selectedCities.map(city=>city.name))}`"
      class="bg-red-500 hover:bg-red-400 text-white text-sm py-1 px-4 rounded"
    >Search</a>
  </div>
</template>

<script>
export default {
  name: "searchBar",
  props: {
    cities: {
      type: Array
    },
    defaultCities: {
      type: Array
    }
  },
  data() {
    return {
      citiesStatus: false,
      datesStatus: false,
      durationStatus: false,
      selectedCities: [] || this.selectedFilters.selectedCities,
      selectedMonth: [],
      selectedDuration: "",
      stringCitiesButtonDisplay: "",
      dates: [
        {
          id: 1,
          name: "Jan"
        },
        {
          id: 2,
          name: "Feb"
        },
        {
          id: 3,
          name: "Mar"
        },
        {
          id: 4,
          name: "Apr"
        },
        {
          id: 5,
          name: "May"
        },
        {
          id: 6,
          name: "Jun"
        },
        {
          id: 7,
          name: "Jul"
        },
        {
          id: 8,
          name: "Aug"
        },
        {
          id: 9,
          name: "Sep"
        },
        {
          id: 10,
          name: "Oct"
        },
        {
          id: 11,
          name: "Nov"
        },
        {
          id: 12,
          name: "Dec"
        }
      ],
      durations: [
        {
          id: 1,
          name: "1 Week"
        },
        {
          id: 2,
          name: "2 Week"
        },
        {
          id: 3,
          name: "1 Month"
        }
      ]
    };
  },
  mounted() {
    if (this.defaultCities) {
      this.processDefaultCities()
    }
  },
  computed: {
    destionationButton() {
      return this.stringCitiesButtonDisplay
        ? this.stringCitiesButtonDisplay.slice(1)
        : "Destination";
    },
    showSearchButton() {
      return this.selectedCities.length>0 &&
      this.citiesStatus === false
    }
  },
  methods: {
    processDefaultCities() {
      this.defaultCities.forEach(item =>
        this.selectedCities.push(
          this.cities.find(city => item === city.name)
        )
      );

      this.applyCities();
    },
    toggleCities() {
      this.datesStatus = false;
      this.durationStatus = false;
      this.citiesStatus = !this.citiesStatus;
    },
    toggleDates() {
      this.citiesStatus = false;
      this.durationStatus = false;
      this.datesStatus = !this.datesStatus;
    },
    toggleDurations() {
      this.citiesStatus = false;
      this.datesStatus = false;
      this.durationStatus = !this.durationStatus;
    },
    selectMonth(month) {
      this.selectedMonth.push(month);
    },
    removeCity(city) {
      this.selectedCities = this.selectedCities.filter(
        item => item.name !== city.name
      );
    },
    applyCities() {
      this.stringCitiesButtonDisplay = this.selectedCities.reduce(
        (pre, cur) => pre + "," + cur.name,
        ''
      );
      this.citiesStatus = false;
    },
    cancelCities() {  
    
      this.citiesStatus = false;
      this.stringCitiesButtonDisplay = "";
      this.selectedCities = [];
      this.processDefaultCities()
    }
  }
};
</script>