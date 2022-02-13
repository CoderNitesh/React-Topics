import React from 'react'


const IMAGE_CART = 'https://www.pngitem.com/pimgs/m/45-457113_transparent-cart-small-shopping-cart-icon-hd-png.png'

const styleCount = {
    position: 'absolute',
    backgroundColor: 'black',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '50%',
    right: "28px",
    top: "3px"
}

export default function NavBar(props) {
    // console.log('NavBar', props.data)
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <p className="navbar-brand">Nit Shopping Center</p>
                <div className="count" style={styleCount}>{props.data.length}</div>
                <img src={IMAGE_CART} alt="IMAGE_CART" style={{width: '50px', height:'50px', marginRight: '25px'}} />
            </div>
        </nav>
    )
}
