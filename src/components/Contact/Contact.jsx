import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="ct_wrapper" id="Contact">
      <div className="paddings innerWidht flexCenter ct_container">
        {/* Left Side */}
        <div className="flexColStart ct_left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.{" "}
            <br /> We beleive a good blace to live can make your life better
          </span>

          <div className="flexColStart contactModes">
            {/* First Row */}
            <div className="flexStart row">
              {/* First Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColCenter detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">00 11 223 344</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* Second Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColCenter detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">00 11 223 344</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flexStart row">
              {/* Third Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColCenter detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">00 11 223 344</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>
              {/* Second Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColCenter detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">00 11 223 344</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flexEnd ct_right">
          <div className=" img_container">
            <img src="./contact.jpg" alt="Contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
