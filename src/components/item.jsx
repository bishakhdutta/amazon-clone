const Item = ({image,price,title,setShowList}) => {
  return (
    <div className="card" onClick={() => setShowList(true)}>
      <div className="img-cont">
        <img src={image} />
      </div>
      <div className="title">{title}</div>
      <div>${price}</div>
    </div>
  );
};
export default Item;
