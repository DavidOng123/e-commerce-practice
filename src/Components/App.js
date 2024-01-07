import React  from "react";
import Carousel from "./Carousel";
import Recommendation from "./Recommendation";
import RecommendationBar from "./RecommendationBar";
import RecommendationBarItem from "./RecommendationBarItem";
import './style.css';

const App = () => {
  return (
    <div className="App">
      <Carousel />
      <RecommendationBar title={'Recommendation'} />
      <Recommendation/>
      <RecommendationBar title={'Browse Collections'} barItem={<RecommendationBarItem />} />
      <Recommendation flag={true}/>
    </div>
  )

}

export default App;
