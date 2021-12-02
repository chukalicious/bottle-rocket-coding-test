import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getRestaurants } from "../../store/actions";
import Detail from "./Detail";

const List = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    props.getRestaurants();
    setList(props.restaurants);
  }, []);

  return (
    <div>
      {list.map((restaurants, i) => (
        <div key={i}>
          <h2>{restaurants.name}</h2>
          <h3>{restaurants.category}</h3>
          <img src={restaurants.backgroundImageURL} alt="dish" />
          <Detail
            category={restaurants.category}
            name={restaurants.name}
            contact={restaurants.contact}
            //not all list items have a twitter value
            location={restaurants.location}
          ></Detail>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
  };
};

export default connect(mapStateToProps, { getRestaurants })(List);
