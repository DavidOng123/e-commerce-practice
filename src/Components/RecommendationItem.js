import { Link } from "react-router-dom";

export default (props) => (
    <div class="col s12 m4 hoverable" >
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1692845699311" />
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{props.item.title}</span>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{props.item.title}<i class="material-icons right">close</i></span>
                <p>{props.item.content}</p>

                <p><Link to={`/product/${props.item.id}`}>View Details</Link></p>
            </div>
        </div>
    </div>
)