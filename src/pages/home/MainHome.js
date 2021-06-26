import "../../App.css";
import florist from "../../images/jpg/header-img-florist.jpg";
import potter from "../../images/jpg/header-img-pottery.jpg";
import gardener from "../../images/jpg/header-img-gardener.jpg";
import barista from "../../images/jpg/header-img-barista.jpg";

const MainHome = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-7 order-2 order-md-1 mainContainer">
          {/********  Potter Card   ********/}
          <div className="innerContent1 shadow-lg">
            <img src={potter} alt="potter" />
            <p>
              Potject <br /> <span>Potter in Bangkok</span>
            </p>
          </div>

          {/********  Gardener Card   ********/}
          <div className="innerContent2 shadow-lg">
            <img src={gardener} alt="gardener" />
            <p>
              Potject <br /> <span>Gardener in CheChe</span>
            </p>
          </div>

          {/********  Barista Card   ********/}
          <div className="innerContent3 shadow-lg">
            <img src={barista} alt="barista" />
            <p>
              Green Cafe <br /> <span>Cafe in Bangkok</span>
            </p>
          </div>

          {/********  Main Image Container   *******/}
          <div className="imgContainer">
            <div className="text-center">
              <img src={florist} alt="florist" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="col-md-4 order-1 order-md-2">
          <div className="rightContainer text-left">
            <p>Explore new opportunities.</p>
            <h1>
              Grow <span>your business.</span>
            </h1>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 rightContainerDetails">
              <p>
                Wiket is the first business to business network
                <span> which lets you connect to mind like people.</span>
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
