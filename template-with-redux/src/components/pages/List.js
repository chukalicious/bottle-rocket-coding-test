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
        <Detail
          key={i}
          category={restaurants.category}
          name={restaurants.name}
          imageURL={restaurants.backgroundImageURL}
          contact={restaurants.contact}
          location={restaurants.location}
        ></Detail>
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
