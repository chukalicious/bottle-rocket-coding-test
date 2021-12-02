const Detail = (props) => {
  console.log("Detail: props:", props);
  return (
    <>
      <p>{props.name}</p>
      <p>{props.category}</p>
      <img src={props.imageURL} alt="Restaurant Photo" />
    </>
  );
};

export default Detail;
