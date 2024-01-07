import React from "react"
import { useParams } from 'react-router-dom';

export default () => {
    const { id } = useParams()
    return (
        <div>
            <div class="row">
                <div class="col s12 m6" >
                    <div class="card">
                        <div class="card-image">
                            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1692845699311" />
                        </div>
                    </div>
                </div>
                <div class="col s12 m6" >
                    <div class="card">
                        <div class="card-content">
                            <p>My id is {id}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}