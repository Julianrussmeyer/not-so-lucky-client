import { useContext} from "react"
import {AuthContext} from "../context/auth.context.jsx"


export function useAuthContext(){
    const ctx = useContext(AuthContext)
    if(!ctx){
        throw new Error("Must provide valid context")
    }
    return ctx
}