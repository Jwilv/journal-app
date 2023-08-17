import { types } from "../type/types";



export const setSidebarState = (state)=>({
type:types.sidebarSet,
payload:{
    state
}
})