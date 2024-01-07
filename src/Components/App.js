import React , {useEffect, useReducer, useContext } from "react";
import Carousel from "./Carousel";
import Recommendation from "./Recommendation";
import RecommendationBar from "./RecommendationBar";
import RecommendationBarItem from "./RecommendationBarItem";
import './style.css';
import { ProductContext } from "../Provider";

const App = () => {
  const { state, dispatch } = useContext(ProductContext);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const addProduct = () => {
    dispatch({ type: "ADD_PRODUCT", product: { title: "Test", content: 23 } });
  };

  return (
    <div className="App">
      <button onClick={()=>addProduct()}>test</button>
      <Carousel />
      <RecommendationBar title={'Recommendation'} />
      <Recommendation/>
      <RecommendationBar title={'Browse Collections'} barItem={<RecommendationBarItem />} />
      <Recommendation flag={true}/>
    </div>
  )

}

export default App;
