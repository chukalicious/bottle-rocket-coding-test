import iconmap from "../../assets/iconmap.png";
import ic_webBack from "../../assets/ic_webBack.png";
import { HeaderDiv } from "../../styles/headerStyles";

const Header = () => {
  return (
    <HeaderDiv>
      <div>
        {" "}
        <img src={ic_webBack} alt="back" />
      </div>
      <h1>Lunch Tyme</h1>
      <div>
        <img src={iconmap} alt="map" />
      </div>
    </HeaderDiv>
  );
};

export default Header;
