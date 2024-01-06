import React, { useState } from "react";
import RecommendationItem from "./RecommendationItem";

const Recommendation = (props) => {
  const initialItemsToShow = 3; 
  const itemsToAdd = 3; 
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

  const recommendationItems = [
    { title: 'Title 1', content: 'content 1' },
    { title: 'Title 2', content: 'content 2' },
    { title: 'Title 3', content: 'content 3' },
    { title: 'Title 3', content: 'content 3' },
    { title: 'Title 1', content: 'content 1' },
    { title: 'Title 2', content: 'content 2' },
    { title: 'Title 3', content: 'content 3' },
    { title: 'Title 3', content: 'content 3' },
  ];

  const loadMore = () => {
    setItemsToShow(itemsToShow + itemsToAdd);
  };

  return (
    <div>
      <div className="row">
        {recommendationItems.slice(0, itemsToShow).map((item, index) => (
          <div key={index} >
            <RecommendationItem title={item.title} content={item.content} />
          </div>
        ))}
      </div>

      {/* Show "Load More" button if there are more items to display */}
      {props.flag && itemsToShow < recommendationItems.length && (
        <div className="center-align">
          <button className="btn" onClick={loadMore}  style={{ marginBottom: '20px' }}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Recommendation;
