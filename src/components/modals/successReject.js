
import "./css/successNotify.css"
import CloseBtn from "../../img/Close-Square.svg"
import SNotify from "../../img/completed.svg"
import { useState } from "react"

export default function SuccessReject() {
    const [display, setDisplay] = useState("")
    const closeDisplay = ()=> {
        setDisplay("close")
    }
    return (
        <>
             <div class={`modbox ${display}`}>
                <div onClick={closeDisplay}><strong class="bold-text">Reject</strong></div>
                <div class="flexedcont"><img src={SNotify} loading="lazy" width="63" height="63" alt="" class="image"/>
                <div class="text-block-2">You have successfully rejected the customer`s selfie</div>
                <a href="#/" className="button w-button"><strong>Reject</strong></a>
                </div>
                <img src={CloseBtn} loading="lazy" width="24" height="24" alt="" class="image-2" onClick={closeDisplay}/>
             </div>
        </>
    )
}