import { defineStore } from 'pinia'
import { axiosClient } from '@/axiosMealClient'

const useRecipeStore = defineStore('RecipeStore', {
  state: () => ({
    meals: [],
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredients: [],
    ingredients: [],
    mealDetail:[],

    loading: false,
    error: null
  }),
  getters: {
    getSearchedMeals() {
      return this.searchedMeals
    }
  },
  actions: {
    searchMealsByName(keyword) {
      this.loading = true
      axiosClient
        .get(`/search.php?s=${keyword}`)
        .then((response) => response.data)
        .then((res) => (this.searchedMeals = res.meals || []))
        .catch((error) => {
          this.error = error
        })
        .finally(() => {
          this.loading = false
        })
    },
    searchMealsByLetter(letter) {
      this.loading = true
      axiosClient
        .get(`/search.php?f=${letter}`)

        .then((response) => response.data)
        .then((res) => (this.mealsByLetter = res.meals || []))

        .catch((error) => {
          this.error = error
        })
        .finally(() => {
          this.loading = false
        })
    },
    searchMealsByIngredients(ingredients) {
      this.loading = true
      axiosClient
        .get(`/filter.php?i=${ingredients}`)
        .then((response) => response.data)
        .then((res) => (this.mealsByIngredients = res.meals || []))
        .catch((error) => {
          this.error = error
        })
        .finally(() => {
          this.loading = false
        })
    },
    fetchIngredients() {
      this.loading = true

      axiosClient
        .get('/list.php?i=list')
        .then((res) => res.data)
        .then((data) => (this.ingredients = data.meals || []))

        .catch((error) => {
          this.error = error
        })
        .finally(() => {
          this.loading = false
        })
    },
    setMealsByName(meals){
      this.searchedMeals= meals
    },
    fetchRandomMeals(letter){
      this.loading = true
       axiosClient.get(`/search.php?f=${letter}`)
       .then((res) => res.data)
       .then(data => this.meals=data.meals)
       .catch((error) => {
        this.error = error
      })
      .finally(() => {
        this.loading = false
      })
    },
    fetchMealDetail(id){
      this.loading = true
      axiosClient
      .get(`/lookup.php?i=${id}`)
      .then((data) => data.data.meals || {})
      .then((data) => (this.mealDetail = data[0] || {}))
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
