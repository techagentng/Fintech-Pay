
import "./css/successNotify.css"
import CloseBtn from "../../img/Close-Square.svg"
import SNotify from "../../img/successNotify.svg"
import { useState } from "react"

export default function SuccessNotify() {
    const [display, setDisplay] = useState("")
    const closeDisplay = ()=> {
        setDisplay("close")
    }
    return (
        <>
             <div class={`modbox ${display}`}>
                <div onClick={closeDisplay}><strong class="bold-text">Cancel</strong></div>
                <div class="flexedcont"><img src={SNotify} loading="lazy" width="63" height="63" alt="" class="image"/>
                <div class="text-block-2">You have successfully approved the customer`s selfie</div>
                <a href="#/" className="button w-button"><strong>Close</strong></a>
                </div>
                <img src={CloseBtn} loading="lazy" width="24" height="24" alt="" class="image-2" onClick={closeDisplay}/>
             </div>
        </>
    )
}