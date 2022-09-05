import "./Card.css";
import { NavLink } from "react-router-dom";


const Card = (props) => {
  const playlistId = props.value.id;
  const imageUrl = props.value.images[0].url;
  const playlistNmae = props.value.name;

  return (
    <>
      <div className="card bg-dark ms-0 mb-5">
        <NavLink to={`/tracks/${playlistId}`}>
          <img
            className="card-img-top cards"
            src={imageUrl}
            alt="Card image cap"
          />
        </NavLink>
        <div className="card-body">
          <h5 className="card-title text-white">{playlistNmae}</h5>
          <p className="card-text text-secondary">
            A song is a single musical composition that has a melody and, often,
            words that are sung by a vocalist.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
