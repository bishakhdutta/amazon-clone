const Card = ({id,image,title,price,fetchProduct}) => {
  return (
    <div id={`product_no_${id}`} className="card" onClick={() => fetchProduct(id)}>
      <div className="img-cont">
        <img src={image} />
      </div>
      <div className="title">{title}</div>
      <div>${price}</div>
    </div>
  );
};
export default Card;