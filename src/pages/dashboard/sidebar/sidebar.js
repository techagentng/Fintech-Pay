import "./sidebar.css"
import profile from "../../../img/profile.svg"
import icon2 from "../../../img/d2.svg"
import d1 from "../../../img/d1.svg"
import d3 from "../../../img/d3.svg"
import d4 from "../../../img/d4.svg"
import d5 from "../../../img/d5.svg"
import d6 from "../../../img/d6.svg"

export default function Sidebar(){
    return (
        <>
            <div class="div-block-2">
                <div class="top"><img src={profile} loading="lazy" alt="" class="image-3"/>
                <a href="?#" class="button-2 w-button"><strong>Verifier</strong></a>
                <div class="text-block-6">Bola<br/>Soetan</div>
                </div>
                <div class="div-block-4">
                    <img src={d1} loading="lazy" alt=""/>
                    <img src={icon2} loading="lazy" alt=""/>
                    <img src={d3} loading="lazy" alt=""/>
                    <img src={d4} loading="lazy" alt=""/>
                    <img src={d5} loading="lazy" alt=""/>
                    <img src={d6} loading="lazy" alt=""/>
                <a href="?#" class="button-3 w-button"><strong>Logout</strong></a>
                </div>
            </div>
        </>
    )
}