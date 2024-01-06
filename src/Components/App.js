import React, { useReducer, useEffect } from "react";
import Carousel from "./Carousel";
import Recommendation from "./Recommendation";
import RecommendationBar from "./RecommendationBar";
import RecommendationBarItem from "./RecommendationBarItem";
import ProductReducer, { defaultState } from "../Reducer/Product";
import './style.css';

const App = () => {
  // const [state, dispatch] = useReducer(ProductReducer, defaultState);
  // useEffect(()=>{
  //   console.log(state)
  // },[state]);

  return (
    <div className="App">
      {/* <button onClick={()=>dispatch({type:"ADD_PRODUCT", product:{name:"Test",age:23}})}>test</button> */}
      <Carousel />
      <RecommendationBar title={'Recommendation'} />
      <Recommendation />
      <RecommendationBar title={'Browse Collections'} barItem={<RecommendationBarItem />} />
      <Recommendation flag={true}/>
    </div>
  )

}

export default App;
