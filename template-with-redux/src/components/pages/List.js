import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getRestaurants } from "../../store/actions";
import { restaurantsReducer } from "../../store/reducers";

const List = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    props.getRestaurants();
    setList(props.restaurants);
  }, []);

  return (
    <div>
      {list.map((restaurants) => (
        <p>{restaurants.name}</p>
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
