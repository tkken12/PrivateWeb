import { useEffect  } from "react"

const Redirection = ( props ) => { 

    useEffect(() => {
        props.history.push("/")
    }, [])

    return ( 
        <>
        </>
    )
}

export default Redirection 