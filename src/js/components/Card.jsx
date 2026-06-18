import React from "react";

function Card({title, text, button}){

return (

<div className="card mb-4">

    <img
      className="card-img-top"
      src="https://static.vecteezy.com/system/resources/thumbnails/009/273/280/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg"
    />

    <div className="card-body text-center">

      <h5 className="card-title">
        {title}
      </h5>

      <p className="card-text">
        {text}
      </p>

    </div>


    <div className="card-footer text-center">

      <button className="btn btn-primary">
        {button}
      </button>

    </div>

</div>

);

}

export default Card;