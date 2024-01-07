import React, { useState, useContext } from "react";
import RecommendationItem from "./RecommendationItem";
import {ProductContext} from '../Provider'

const Recommendation = (props) => {
  const {state}=useContext(ProductContext)
  const initialItemsToShow = 3;
  const itemsToAdd = 3;
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

  const loadMore = () => {
    setItemsToShow(itemsToShow + itemsToAdd);
  };

  return (
    <div>
      <div className="row">
        {state.products.slice(0, itemsToShow).map((item, index) => (
          <div key={index}>
            <RecommendationItem title={item.title} content={item.content} />
          </div>
        ))}
      </div>

      {/* Show "Load More" button if there are more items to display */}
      {props.flag && itemsToShow < state.products.length && (
        <div className="center-align">
          <button
            className="btn"
            onClick={loadMore}
            style={{ marginBottom: "20px" }}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Recommendation;
