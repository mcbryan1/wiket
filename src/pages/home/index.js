import MainHome from "./MainHome";
import "../../App.css";
import phoneHeaderLine from "../../images/svg/header-line-phone-portrait.svg";

const Home = () => {
  return (
    <div className="homeConatainer">
      <img src={phoneHeaderLine} alt="phone line" className='img-fluid phoneHeaderLine' />
      <MainHome />
    </div>
  );
};

export default Home;
