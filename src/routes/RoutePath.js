import Main from "views/Main"
import Vdi from "views/VDI"

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