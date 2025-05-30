import React from 'react'
import axios from 'axios'

function Mainpage() {
const api = axios.get("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_BjpWI1ayikhN6xJcWD1hZa4UUjeKPPR3I11G6Ket&currencies=INR&base_currency=USD")
api.then((res)=>{
    const value = res.data.data.INR
    const num = prompt("Please enter the value of INR you want to convert")
    const final = num * value
    console.log(final)
})



  return (
  <>
  
  
  </>
  )
}

export default Mainpage