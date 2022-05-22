import { useEffect, useMemo } from "react"
import { render, createPortal } from "react-dom"
import Main from "views/Main"


const NewWindow = ( props ) => {
    const newWindow = useMemo(() =>  
        // TODO - Guacamole 설정 값을 동적으로 받게 수정해야함
        window.open(
            "about:blank",
            "newWin",
            "`width=400, height=300, left=${window.screen.availWidth / 2 - 200},top=${window.screen.availHeight / 2 - 150}`"
        )
    ) 
    newWindow.onbeforeunload = () => { 
        props.close()
    }
    useEffect( () => () => newWindow.close() )
    return createPortal( props.children, newWindow.document.body )

}

// render( <Main />, document.getElementById("root"))

export default NewWindow