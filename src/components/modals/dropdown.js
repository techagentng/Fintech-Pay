import "./css/dropdownmodal.css"
import rejection from "../../img/rejection.svg"
import closeBtn from "../../img/Close-Square.svg"

export default function DropdownModal (){
    return (
        <>
            <div className="modbox">
            <div className="flexedcont"><img src={rejection} loading="lazy" alt=""/>
            <div className="text-block-3">Select Regection Reason</div>
            <div className="dropwrapper">
                <div data-w-id="b8ac2197-3e0d-0904-6648-bd2463ad6898" className="droptrigger">
                <div>Menu</div>
                </div>
                <div className="dropcontent">
                <a href="#l" className="droplink w-inline-block">
                    <div className="text-block-4">Blury Image</div>
                </a>
                <a href="#l" className="droplink w-inline-block">
                    <div className="text-block-4">Selfie is different from BVN image.</div>
                </a>
                <a href="#l" className="droplink w-inline-block">
                    <div className="text-block-4">Poor background lightning.</div>
                </a>
                <a href="#l" className="droplink w-inline-block">
                    <div className="text-block-4">Image not fully captured</div>
                </a>
                <a href="#l" className="droplink w-inline-block">
                    <div className="text-block-4">Invalid image</div>
                </a>
                </div>
            </div>
            <a href="#l" class="button w-button"><strong>Approve</strong></a>
            </div><img src={closeBtn} loading="lazy" width="24" height="24" alt="" class="image-2"/>
        </div>
        </>
    )
}