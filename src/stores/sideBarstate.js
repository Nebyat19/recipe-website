import { defineStore } from 'pinia'

export const useSideBarState = defineStore('sideBarState', {
state:()=>({
    isSideBarHidden:true
}),

actions:{
    toggleSate(){
        this.isSideBarHidden=!this.isSideBarHidden
    } 
}

})
