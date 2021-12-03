import iconmap from "../../assets/iconmap.png";
import ic_webBack from "../../assets/ic_webBack.png";
import { HeaderDiv, IconDiv, HeaderTitle } from "../../styles/headerStyles";

const Header = () => {
  return (
    <HeaderDiv>
      <IconDiv>
        {" "}
        <img src={ic_webBack} alt="back" />
      </IconDiv>
      <HeaderTitle>Lunch Tyme</HeaderTitle>
      <IconDiv>
        <img src={iconmap} alt="map" />
      </IconDiv>
    </HeaderDiv>
  );
};

export default Header;
