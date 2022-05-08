import Main from "views/main"
import Vdi from "views/vdi"

let routePath = [
    { 
        "component": Main,
        "path"     : "/",
        "navString": "currier"
    },
    {
        "component": Vdi,
        "path"     : "/vdi",
        "navString": "vdi"
    },
    // {
    //     "component": Terminal,
    //     "path"     : "/terminal" 
    // }
] 

export default routePath