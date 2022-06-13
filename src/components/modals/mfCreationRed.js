
import "./css/mfCreationRed.css"
import CloseBtn from "../../img/Close-Square.svg"
import Completed from "../../img/note-remove.svg"
import { useState } from "react"

export default function MfRed() {
    const [display, setDisplay] = useState("")
    const closeDisplay = ()=> {
        setDisplay("close")
    }
    return (
        <>
             <div class={`modbox ${display}`}>
                <div onClick={closeDisplay}><strong class="bold-text">Cancel</strong></div>
                <div class="flexedcont"><img src={Completed} loading="lazy" width="63" height="63" alt="" class="image"/>
                <div class="text-block-2">Are you sure want to approve this customer`s selfie</div>
                <a href="#/" className="button w-button"><strong>Reject</strong></a>
                </div>
                <img src={CloseBtn} loading="lazy" width="24" height="24" alt="" class="image-2" onClick={closeDisplay}/>
             </div>
        </>
    )
}