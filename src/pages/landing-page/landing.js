import "./landing.css";
import { useRef } from "react";
import Feature from "../../components/feature";
import GetStarted from "../../components/GetStarted";
import Footer from "../../components/footer";
import Card from "../../components/card";
import Nav from "../../components/nav";
import Hero from "../../components/hero";
import mobileGroup from "../../img/accordion/Image_eexubx.png";
import playstore from "../../img/accordion/playimg.png";
import Accord from "./accord/accord";

import circle from "../../img/half-circle.svg";
import shape2 from "../../img/shape-2.svg";
import bake1 from "../../img/half-bake.svg";

import { useState } from "react";
import Modal from "../../components/modal";

export default function Landing(props) {
  const [isActive, setIsActive] = useState(false);
  const [hidden, setHidden] = useState({
    display: "none",
  });
  function handleActive() {
    if (!isActive) {
      setIsActive((c) => (c = true));
      setHidden((c) => (c = { display: "block" }));
      console.log("here " + isActive);
    } else {
      setIsActive((c) => (c = false));
      setHidden((c) => (c = { display: "none" }));
      console.log("here " + isActive);
    }
  }

  const faq = useRef(null);

  // const scrollToBottom = () => {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: "smooth",
  //   });
  // };

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  const feature = useRef(null);

  return (
    <div className="landing-container">
      {/* <InfoSucess /> */}
      <div style={hidden}>
        <Modal setIsOpen={handleActive} />
      </div>
      <div className="landing-content">
        <Nav faq={faq} feature={feature} handleActive={handleActive} />

        <Hero handleClick={handleActive} />

        {/* <div class="pagedown" onClick={scrollToBottom}>
          <img src={downAngle} alt="" />
        </div> */}

        <section ref={feature}>
          <Card />
        </section>

        <section className="contents">
          <GetStarted handleClick={handleActive} />
        </section>
        <section className="feature-section">
          <Feature handleClick={handleActive} />
        </section>
        <section class="help" ref={faq}>
          <div class="help__head">
            <p>Frequently Asked Question?</p>
            <h2>We Can Help!</h2>
          </div>
          <img
            style={{
              position: "absolute",
              marginLeft: "40%",
              marginTop: "-43px",
            }}
            src={shape2}
            alt="svg"
          />

          <img
            style={{ position: "absolute", marginLeft: "64%", marginTop: "0%" }}
            src={circle}
            alt="svg"
          />

          <div class="accordCont">
            {/* <div class="pageup" onClick={scrollToTop}>
              <img src={upAngle} alt="" />
            </div> */}
            <div class="accordion__child">
              <Accord
                title="What is Zojapay?"
                content=" ZojaPay helps make cash request delivery seamless by connecting you in real-time with a cash provider. With
                ZojaPay, you can get cash delivered to friends and colleagues"
              />
              <Accord
                title="What do I need to open account with 
                ZojaPay?"
                content="To open a ZojaPay account, all you need is your valid BVN & phone number"
              />
              <Accord
                title="How does ZojaPay work?"
                content="Zojapay simplify access to cash by connecting users with mobile money agents."
              />
            </div>
            <div class="accordion__child">
              <Accord
                title="Can I make money on Zojapay?"
                content="Yes, you can. All you need to do is join the waitlist so you can be signed up as a Mobile Money Agent on ZojaPay."
              />
              <Accord
                title="Is the app available for download?"
                content="Not yet! The app is currently in a beta testing phase."
              />
              <Accord
                title="What other services does ZojaPay offer?"
                content="Zojapay will also provide additional services like cash request , bills payment e.g utility bills, buy airtime, data bundle and cable TV."
              />
            </div>
            <img
              style={{
                position: "absolute",
                marginLeft: "12%",
                marginTop: "13%",
              }}
              src={bake1}
              alt="svg"
            />
          </div>
          <div class="make"></div>
        </section>
        <section class="app">
          <div class="mobCont">
            <div class="mobc l">
              <h2>Zojapay app Coming Soon !</h2>
              <img src={playstore} alt="" />
            </div>
            <div class="mobc c2">
              <img src={mobileGroup} alt="group-mobile-icons" />
            </div>
          </div>
        </section>
        <Footer faq={faq} feature={feature} />
      </div>
    </div>
  );
}

// const cardSection = {
//   icon: Card,
//   heading,
//   content,
// }

/* <section className="app">
          <div class="app__wrapper">
            <img class="app__wrapper_lines" src={lines} alt="lines" />
            <div class="app__play">
              <h2>Zojapay Coming Soon !</h2>
              <img src={playstore} alt="mobile_download_icon" />
              <img class="app__wrapper_linesDex" src={lines} alt="lines" />
            </div>
            <div class="app__img">
              <img src={mobileGroup} alt="group-mobile-icons" />
            </div>
          </div>
        </section> */
