import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getRestaurants } from "../../store/actions";

const List = (props) => {
  const [list, setList] = useState([]);
  console.log("List: list", list);

  useEffect(() => {
    props.getRestaurants();
  }, []);

  return <div></div>;
};

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
  };
};

export default connect(mapStateToProps, { getRestaurants })(List);
