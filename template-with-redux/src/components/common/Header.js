import { Link, useNavigate } from "react-router-dom";
import iconmap from "../../assets/iconmap.png";
import ic_webBack from "../../assets/ic_webBack.png";
import { HeaderDiv, IconDiv, HeaderTitle } from "../../styles/headerStyles";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderDiv>
      <IconDiv onClick={(e) => navigate(-1)}>
        {" "}
        <img src={ic_webBack} alt="back" />
      </IconDiv>
      <HeaderTitle>Lunch Tyme</HeaderTitle>
      <IconDiv onClick={(e) => navigate("/map")}>
        <img src={iconmap} alt="map" />
      </IconDiv>
    </HeaderDiv>
  );
};

export default Header;
