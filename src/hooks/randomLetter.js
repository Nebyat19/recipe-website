
const letters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export const useRandomLetter=()=>{
  
    return letters[Math.floor(Math.random() * letters.length)] || "c"
}