import React from 'react';
import '../App.css';


const Product = (props)=>{
    return(
        <div className="card">
            <div>
                <img className="cartImg" src={props.product.img} alt={props.product.img}/>
            </div>
            <div className="cardTitle">
                <h2>{props.product.title}</h2>
            </div>
            <div className="cardContent">
                <h3>{props.product.desc}</h3>
            </div>
            <div className="cardPrice">
                <h3>{props.product.price} <span id="price">THB</span> </h3>
            </div>
            <div className="bttn">
                <button className="btn" onClick={()=> props.addToCart(props.product)}>Add To Cart</button>
            </div>
        </div>
    );
}


const Shop = (props) =>{
    return(
        <div className="center">
            <div className="box">
                {props.products.map(product=>{
                    return(
                        <Product key={product.id} product={product} addToCart={props.addToCart} />
                        );
                    })}
            </div>
        </div>
    );
}
 
export default Shop;