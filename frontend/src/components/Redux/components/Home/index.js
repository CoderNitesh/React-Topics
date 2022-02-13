import React from 'react'

const IMAGE_URL = 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'

const product = {
    id: 1,
    name: 'Iphone 11',
    price: 1000.00
}


export default function Home(props) {
    // console.log('Home', props.data)
    return (
        <div className='container my-5'> 
            <h1 className='h1'>Shopping Items</h1>
            <div className="card" style={{width: '18rem'}}>
                <img src={IMAGE_URL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>
                    <button className="btn btn-primary" onClick={() => props.addToCartHandler(product)}>Add To Cart</button>
                    <button className="btn btn-primary my-2" onClick={() => props.removeFromCartHandler()} disabled={0 >= props.data.length}>Remove From Cart</button>
                </div>
            </div>
        </div>
    )
}