import { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

const List = (props) => {
  const [list, setList] = useState([]);
  console.log("List: list", list);

  useEffect(() => {
    axios
      .get("https://s3.amazonaws.com/br-codingexams/restaurants.json")
      .then((res) => setList(res.data.restaurants))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div></div>;
};

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
  };
};

export default List;
// export default connect(mapStateToProps, {})(List);
