import { ThemeContext } from "contexts/Theme"
import { useContext, useState, useCallback } from "react"
import NewWindow from "components/Guacamole/common/NewWindow"

const ViewContainer = ( props ) => { 
        
    const [{ themeName }] = useContext(ThemeContext)
    const [ isOpen, setOpenState ] = useState(false)
    const close = useCallback(() => { setOpenState(false) } ) 
    const open = useCallback(() => { setOpenState(true) }) 

    const guacConn = () => { 
        open()
    }

    return ( 
        <div className="viewContainer">
            { !!props["items"] !== false ? props["items"].map( item => { 
                return ( 
                        <div className="viewContainerItem" onClick={ guacConn }>
                            <div className={ themeName === "light" ? "viewContainerItemLight" : "viewContainerItemDark" }>
                                
                            </div>
                            <div className="viewContainerCaption">
                                    { item["connection_name"] }
                            </div>
                        </div>

                       )
                }) : null 
            }
            { isOpen && ( 
                <NewWindow close={ close } >
                    test
                </NewWindow>
            )}
        </div>

    )
}

export default ViewContainer