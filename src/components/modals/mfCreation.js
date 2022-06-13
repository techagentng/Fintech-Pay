
import "./css/mfCreation.css"
import CloseBtn from "../../img/Close-Square.svg"
import Icomf from "../../img/icomf.svg"
import { useState } from "react"

export default function Lilmodal() {
    const [display, setDisplay] = useState("")
    const closeDisplay = ()=> {
        setDisplay("close")
    }
    return (
        <>
             <div class={`modbox ${display}`}>
                <div onClick={closeDisplay}><strong class="bold-text">Cancel</strong></div>
                <div class="flexedcont"><img src={Icomf} loading="lazy" width="63" height="63" alt="" class="image"/>
                <div class="text-block-2">Are you sure want to approve this customer`s selfie</div>
                <a href="#/" className="button w-button"><strong>Approve</strong></a>
                </div>
                <img src={CloseBtn} loading="lazy" width="24" height="24" alt="" class="image-2" onClick={closeDisplay}/>
             </div>
        </>
    )
}