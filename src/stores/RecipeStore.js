import { defineStore } from 'pinia'
import { axiosClient } from '@/axiosMealClient'

const useRecipeStore = defineStore('RecipeStore', {
  state: () => ({
    meals: [],
    searchedMeals: [],
    loading: false,
    error: null,
    data: []
  }),
  getters: {
    getSearchedMeals() {
      return this.searchedMeals
    }
  },
  actions: {
    searchMeals(keyword) {
      this.loading = true
      axiosClient
        .get(`/search.php?s=${keyword}`)
        .then((response) => {
          this.searchedMeals = response.data
        })
        .catch((error) => {
          this.error = error
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
})

export { useRecipeStore }
