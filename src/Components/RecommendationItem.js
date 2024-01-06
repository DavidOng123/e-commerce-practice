export default (props) => (
    <div class="col s12 m4 hoverable" >
        <div class="card">
            <div class="card-image">
                <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1692845699311" />
                <span class="card-title">{props.title}</span>
            </div>
            <div class="card-content">
                <p>{props.content}</p>
            </div>
        <div class="card-action">
          <a href="#">View Details</a>
        </div>
        </div>
    </div>
)