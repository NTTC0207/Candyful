
import * as actionTypes from './actionTypes'

export const setLogin=()=>({
    type:actionTypes.LOGIN,
    data:true
   
})

export const setLogout=()=>({
    type:actionTypes.LOGOUT,
    data:false
})

export const setRole=(data:string)=>({
    type:actionTypes.MYROLE,
    data
})

export const setCart=(data:string)=>({
    type:actionTypes.MYCart,
    data
})

export const setLoad=(data:boolean)=>({
    type:actionTypes.LOAD,
    data
})


export const setRefresh=(data:number)=>({
    type:actionTypes.REFRESH,
    data
})

export const setProduct=(data:any)=>({
    type:actionTypes.PRODUCT,
    data
})

export const setProfile=(data:any)=>({
    type:actionTypes.PROFILE,
    data
})