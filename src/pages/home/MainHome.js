import { useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import "../../App.css";
import florist from "../../images/jpg/header-img-florist.jpg";
import potter from "../../images/jpg/header-img-pottery.jpg";
import gardener from "../../images/jpg/header-img-gardener.jpg";
import barista from "../../images/jpg/header-img-barista.jpg";
import pin1 from "../../images/svg/pin-01.svg";
import pin2 from "../../images/svg/pin-02.svg";
import headerLine from "../../images/svg/header-line-desktop.svg";
import {
  mainVariant,
  mainImageVariant,
  mainImageMobileVariant,
  mainImageContainerTextVariant,
  baristaVariant,
  potterVariant,
  gardenerVariant,
  rightTextContainerVariant,
  rightTextContainerMainTextVariant,
  rightTextContainerSubTextVariant,
  rightTextContainerTextVariant,
  rightTextContainerSubVariant,
} from "../../components/animations";

const MainHome = () => {
  const [animation, cycleAnimation] = useCycle(
    "firstAnimation",
    "secondAnimation"
  );
  const [width, setWidth] = useState(window.innerWidth);

  const screenSize = () => {
    setWidth(width);
  };

  useEffect(() => {
    window.addEventListener("resize", screenSize);
    setTimeout(() => {
      cycleAnimation();
    }, 4000);

    return () => {
      window.removeEventListener("resize", screenSize);
    };
  }, []);
  return (
    <motion.div
      className="container-fluid"
      variants={mainVariant}
      initial="initial"
      animate="animate"
    >
      <div className="row">
        <div className="col-md-7 order-2 order-md-1 mainContainer">
          {/********  Potter Card   ********/}
          <motion.div
            className="innerContent1 shadow-lg"
            variants={potterVariant}
            animate={animation}
          >
            <img src={potter} alt="potter" />
            <p>
              Potject <br /> <span>Pottery in Bangkok</span>
            </p>
          </motion.div>

          {/********  Gardener Card   ********/}
          <motion.div
            className="innerContent2 shadow-lg"
            variants={gardenerVariant}
            animate={animation}
          >
            <img src={gardener} alt="gardener" />
            <p>
              Green Thumb <br /> <span>Gardener in CheChe</span>
            </p>
          </motion.div>

          {/********  Barista Card   ********/}
          <motion.div
            className="innerContent3 shadow-lg"
            variants={baristaVariant}
            animate={animation}
          >
            <img src={barista} alt="barista" />
            <p>
              Green Cafe <br /> <span>Cafe in Bangkok</span>
            </p>
          </motion.div>

          {/********  Main Image Container   *******/}

          <motion.div
            className="bgImages imgContainer"
            variants={mainImageContainerTextVariant}
          >
            <img src={pin2} alt="pinetwo" className="img-fluid pin2" />
            <img src={pin1} alt="pineone" className="img-fluid pin1" />
            <img
              src={headerLine}
              alt="headerline"
              className="img-fluid headerLine"
            />
          </motion.div>
          <div className="imgContainer">
            <motion.div
              variants={
                width <= 768 ? mainImageMobileVariant : mainImageVariant
              }
            >
              <h6>
                Hanging Garden <br />
                <span>Florist in Bangkok</span>
              </h6>
              <div className="text-center">
                <img src={florist} alt="florist" className="img-fluid" />
              </div>
              <p>
                Hanging Garden <br />
                <span>Florist in Bangkok</span>{" "}
              </p>
            </motion.div>
          </div>
        </div>

        {/********  Right Column   *******/}
        <motion.div
          className="col-md-4 order-1 order-md-2"
          variants={width <= 768 ? rightTextContainerVariant : null}
        >
          <div className="rightTextContainer">
            <motion.div
              className="rightContainer text-left"
              variants={
                width <= 768
                  ? rightTextContainerMainTextVariant
                  : rightTextContainerTextVariant
              }
            >
              <p className="">Explore new opportunities.</p>
              <h1>
                Grow <span>your business.</span>
              </h1>
            </motion.div>
            <div className="row">
              <div className="col-md-2"></div>
              <motion.div className="col-md-8 rightContainerDetails"variants={
                width <= 768
                  ? rightTextContainerSubTextVariant
                  : rightTextContainerSubVariant
              }>
                <p>
                  Wiket is the first business to business network
                  <span> which lets you connect to mind like people.</span>
                </p>
              </motion.div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MainHome;
