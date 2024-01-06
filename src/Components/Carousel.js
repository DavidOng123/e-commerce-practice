import { useEffect } from "react";
import React from "react";
import 'materialize-css/dist/css/materialize.min.css'; 
import M from 'materialize-css/dist/js/materialize.min.js';
import CarouselItem from "./CarouselItem";

const Carousel=()=>{
    
    useEffect(() => {
        const elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {
            duration: 1000, 
        });
      }, []);

      return (
        <div className="carousel">
      <CarouselItem key={1} src={'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1692845699311'}/>
      <CarouselItem key={2} src={'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=1692923776655'}/>
      <CarouselItem key={3} src={'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=1661026404489'}/>
        </div>

      )
    
}


export default Carousel;