import Logo from "./logo";
import "../css/footer.css";
import facebook from "../assets(png)/icon-social-facebook-white@2x.png";
import twitter from "../assets(png)/icon-social-twitter-white@2x.png";
import insta from "../assets(png)/insta.png";

export default function Footer({ faq, feature }) {
  let newYr = new Date().getFullYear();

  const scrollDown = () => {
    window.scrollTo({
      top: faq.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scrollDownToFeature = () => {
    window.scrollTo({
      top: feature.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scrollDownToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="landing-footer">
      <div className="footer-header">
        <Logo />
        <p className="footer-info">
          ZojaPay is a P2P financial inclusion platform that aggregates
          <br className="h2" /> and digitize Point of Sales agents & services
          <br className="h2" /> by simplifying access to cash for users.
        </p>
        <p className="footer-web footer-year">
          &copy;{newYr} Zojapay, All Rights Reserved
        </p>
      </div>
      <div className="landing-footer-info">
        <div>
          <p className="footer-title">Product Features</p>
          <ul>
            <li>
              <a className='footer-links' href="#cash"> Cash Request</a>
            </li>
            <li>
              <a className='footer-links' href="#transfer">Transfer Cash</a>
            </li>
            <li>
              <a className='footer-links' href="#utility">Utility Payment</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-title">Company</p>
          <ul>
            <li>
              <a className='footer-links' href="#about" onClick={scrollDownToTop}>
                {" "}
                About
              </a>
            </li>
            <li>
              <a className='footer-links' href="#faq" onClick={scrollDown}>
                {" "}
                FAQS
              </a>
            </li>
            <li>
              <a className='footer-links' href="#feature" onClick={scrollDownToFeature}>
                Feature
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-title">Support</p>
          <ul>
            <li>Gbagada Lagos</li>
            <li>
              <a className='footer-links' href="mailto:info@zojapay.com">Info@zojapay.com</a>
            </li>
            <li>
              <span className="followUs">Follow us</span>
              <span>
                <a href="https://m.facebook.com/zojapay/">
                  <img
                    className="facebook-img"
                    style={{ marginLeft: "20.53px" }}
                    width="7.47px"
                    height="14px"
                    src={facebook}
                    alt="facebook"
                  />
                </a>
              </span>
              <span>
                <a href="https://twitter.com/zojapay?s=21">
                  <img
                    style={{ marginRight: "20.53px", marginLeft: "20.53px" }}
                    width="13px"
                    height="11px"
                    src={twitter}
                    alt="twitter"
                  />
                </a>
              </span>
              <span>
                <a href="https://instagram.com/zojapay?igshid=YmMyMTA2M2Y">
                  <img width="14px" height="14px" src={insta} alt="insta" />
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-mobile footer-year">
        &copy;{newYr} Zojapay, All Rights Reserved.
      </p>
    </footer>
  );
}
