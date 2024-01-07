import RecommendationBarItem from "./RecommendationBarItem"
export default (props) => (
    <div>
        <nav className="nav-extended">
            <div className="nav-wrapper">
                <a className="brand-logo center ">{props.title}</a>
            </div>
            {props.barItem && props.barItem}
        </nav>
        
    </div>
)