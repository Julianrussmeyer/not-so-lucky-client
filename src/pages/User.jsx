import {useAuthContext} from "../lib/useAuthContext.js"

export default function Homepage(){
    const {user} = useAuthContext()
    if(!user) return <p className="text-white">...loading</p>
    return(
        <div className="text-white">
            <h1>
                Hello! Welcome {user.username}.
            </h1>
            <p>
                Your stats here?
            </p>
        </div>
    )
}