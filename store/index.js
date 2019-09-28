export const state =()=>({
  selectedCities: []
})

export const mutations = {
  addCities(state,data) {
    state.cities = data;
  }
}