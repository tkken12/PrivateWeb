import APICaller from "components/APIController/APICaller"
import { APIPath } from "components/APIController/APIPath"
import { useEffect, useState } from "react"
import "./Guacamole.css"
import ViewContainer from "components/Guacamole/ViewContainer"

const Service = () => { 

    const [ vdiItems, setVdiItems ] = useState([])
    
    useEffect( async() => { 
        let item = await APICaller({ "method": "GET", "reqPath": APIPath.VDI.GET.STATUS, "query": "" })
        !!item !== false ? setVdiItems( item["data"] ) : setVdiItems([])
    }, [])
    
    return (
        <section id="vdi" className="section">
            <h2>
                { "컨테이너 & VM VDI 서비스" } 
            </h2>
            <div className="service__grid service" >
                <ViewContainer
                    items = { vdiItems["data"] }
                />
            </div>
        </section>
    )
}

export default Service