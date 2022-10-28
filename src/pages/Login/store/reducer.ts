import  * as actionTypes from './actionTypes'

type System = {
 login:boolean
 role:string
 cart:number
 load:boolean
 refresh:number
 product:any
 profile:any
};


const defaultState :System = {
  login:false,
  role:"",
  cart:0,
  load:false,
  refresh:0,
  product:[],
  profile:[]

}

export default (state = defaultState, action:any) => {
   const newState = JSON.parse(JSON.stringify(state))

   
if(action.type===actionTypes.LOGIN){
    newState.login = action.data
    return newState
}
if(action.type===actionTypes.LOGOUT){
    newState.login = action.data
    return newState
}
if(action.type===actionTypes.MYROLE){
  newState.role = action.data
  return newState
}
if(action.type===actionTypes.MYCart){
  newState.cart = action.data
  return newState
}
if(action.type===actionTypes.LOAD){
  newState.load = action.data
  return newState
}
if(action.type===actionTypes.REFRESH){
  newState.refresh = action.data +1 
  return newState
}
if(action.type===actionTypes.PRODUCT){
  newState.product =action.data  
  return newState
}
if(action.type===actionTypes.PROFILE){
  newState.profile =action.data  
  return newState
}

   return state;

}