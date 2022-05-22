import APICaller from "components/APIController/APICaller"
import { APIPath } from "components/APIController/APIPath"
import { useEffect, useState } from "react"
import "./Service.css"

const Service = () => { 

    const [ vdiItems, setVdiItems ] = useState([])
    
    useEffect( async() => { 
        setVdiItems( await APICaller( { "method": "GET", "reqPath": APIPath.VDI.GET.STATUS, "query": "" })) 
    }, [])

    return (
        <section id="vdi" className="section">
            <h2>
                { "컨테이너 & VM VDI 서비스" } 
            </h2>
            <div className="service__grid service" >
                list ...
            </div>
        </section>
    )
}

export default Service