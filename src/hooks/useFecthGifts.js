import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifts"

//HOOKS: funcion de consumo de promesas(helpers)
export const useFetchGifts=(category)=>{
  const [state, setState] = useState({
    data:[],
    loading:true
  })

  //USEEFFECT: Son promesas sincronas
  useEffect(()=>{
    getGifs(category)
      .then(imgs=>{
          setState({
            data:imgs,
            loading:false
          })
      })
  },[category])

  return state
}