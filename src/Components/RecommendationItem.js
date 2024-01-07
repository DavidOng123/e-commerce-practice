import { Link } from "react-router-dom";
import { FaHeart } from 'react-icons/fa';
import React, { useContext, useEffect } from "react";
import { ProductContext } from "../Provider";

export default (props) => {
    const {state, dispatch } = useContext(ProductContext)
    useEffect(() => {
       console.log("State changed:", state);
    }, [state]);
    return (
        <div className="col s12 m4 hoverable" >
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1692845699311" />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{props.item.title}</span>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{props.item.title}<i className="material-icons right">close</i></span>
                    <span className="card-title grey-text text-darken-4">{props.item.content}<i className="material-icons right">
                        <a className="waves-effect waves-light btn red" onClick={() => dispatch({ type: "ADD_FAVORITE", favorite: props.item })}>
                            <i className="material-icons right">
                                <FaHeart /></i>Favorite</a>
                    </i></span>

                    <p><Link to={`/product/${props.item.id}`}>View Details</Link></p>
                </div>
            </div>
        </div>
    )
}