import React from 'react';
import Navbar from ".././Navbar/Navbar";
import Featured from '../FeaturedProducts/Featured';

export default function Landing(props) {
    return (
        <div>
            <Navbar/>
            <div className="jumbotron">
                <h1>Welcome to Vandl 3D Shop</h1>
            </div>
            <Featured products={props.products} setSelected={props.setSelected}/>
        </div>
    )
}
