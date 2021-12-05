import Map from "./Map";
const Detail = (props) => {
  return (
    <div>
      {/* inpute style for div dimensions */}
      <div>
        <h3>Map Goes Here</h3>
        {/* <Map /> */}
      </div>
      <div
        style={{ width: "100%", height: "15vh", backgroundColor: "#34b379" }}
      ></div>
      {/* inpute style for div dimensions */}
      <div>
        <h3>Details Go Here</h3>
      </div>
    </div>
  );
};

export default Detail;
