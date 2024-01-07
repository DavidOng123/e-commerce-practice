import { useContext } from "react"
import { ProductContext } from "../Provider"
import RecommendationItem from "./RecommendationItem"
import {Link} from 'react-router-dom'

export default ()=>{
    const {state, dispatch}=useContext(ProductContext)
    return (
    <div>
        <button onClick={()=>{dispatch({type:"ADD_PRODUCT",product:{title:"Test",content:"TEST"}});}}>test</button>
        <div className="row">
        {state.products.slice(0, state.products.length).map((item, index) => (
          <div key={index}>
            <Link to={`/product/${item.id}`}>
            <RecommendationItem title={item.title} content={item.content} />
            </Link>
          </div>
        ))}
      </div>
    </div>
    )
}