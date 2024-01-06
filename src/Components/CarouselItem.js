import React from "react";

const CarouselItem=(props)=>(
<a className="carousel-item red" >
        <img
          className="responsive-img" // Add the responsive-img class to make the image responsive
          style={{ height: '100%', width: '100%', objectFit: 'cover' }} // Set the height and width to 100% and use object-fit to cover the container
          src={props.src}
          alt="Slide"
        />
      </a>  
)

export default CarouselItem;