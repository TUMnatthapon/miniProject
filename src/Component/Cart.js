import React from 'react';
import '../App.css';


const Item = props => {

    return (

        <div className="cartItem">
            <img className="cartImg" src={props.img} alt={props.img} />

            <div className="left">
                <h3 className="title">Prices</h3>
                <h4>{props.price} THB</h4>
            </div>

            <div className="left2">
                <h4 className="title" >Quantitya</h4>
                <button className="sub" onClick={() => props.decrement(props.item)}>-</button>
                {props.quantity}
                <button className="add" onClick={() => props.increment(props.item)}>+</button>
            </div>

            <div className="left2">
                <button className="rmvbtn" onClick={() => props.removeItem(props.item)}>Remove</button>
            </div>
        </div>

    );

}

const Cart = (props) => {

    const Total = () => {
        return props.cart.reduce((added, existed) => {
            return added + existed.price * existed.quantity
        }, 0);
    }

    return (

        <div className="Cart">
            {props.cart.map(item => (
                <Item key={item.id}
                    {...item}
                    item={item}
                    removeItem={props.removeItem}
                    decrement={props.decrement}
                    increment={props.increment} />
            ))}

            <div className="checkout">
                <h1 className="Total"> Total {Total()} THB </h1>
                <button className="btn" onClick={()=>{ alert('Thank you have a good day.'); }} >checkout</button>
            </div>
        </div>

    );
}

export default Cart;