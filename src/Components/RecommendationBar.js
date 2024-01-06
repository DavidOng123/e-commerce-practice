import RecommendationBarItem from "./RecommendationBarItem"
export default (props) => (
    <div>
        <nav class="nav-extended">
            <div class="nav-wrapper">
                <a class="brand-logo center ">{props.title}</a>
            </div>
            {props.barItem && props.barItem}
        </nav>
        
    </div>
)