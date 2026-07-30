// Learning Prop Drilling

const Card = (props) => {
  return (
    <>
      <div className="Card">
        <img
          src={props.img}
          alt=""
        />
        <div className="middle">
          <h1>{props.name}</h1>
          <p>{props.line}</p>
        </div>
        <div className="bottom">
          <button>View Anime Character</button>
        </div>
      </div>
    </>
  );
};

export default Card;
