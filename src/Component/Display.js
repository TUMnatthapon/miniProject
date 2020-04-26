import React,{useState} from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shoes from './Shoes';
import Navbar from './Navbar';
import Cart from './Cart';
import Shop from './Shop';

const Display = props => {
    const [products] = useState(Shoes);
    const [cart, setCart] = useState([]);

    
    const addToCart = (item) => {
      const cartItem = cart.filter(p => p.id === item.id );

      if(cartItem.length>0){
        const addedItem = cart.filter(p => p.id !== item.id);
        const updateQuantity = {
          ...cartItem[0],
          quantity: cartItem[0].quantity + item.quantity
        };
        setCart([...addedItem, updateQuantity]);
      }else{
        setCart([...cart, item]);
      }
    };


    const removeItem = (item) => {
      const newItem = cart.filter(i => {
        return i !== item;
      });
      setCart([...newItem]);
    }


    const increment = (item) => {
      let add = cart.find(i => i.id === item.id)
      add.quantity += 1
      setCart([...cart])
    }


    const decrement = (item) => {
      let sub = cart.find(i => i.id === item.id)
      if(sub.quantity === 1){
        let newSub = cart.filter(i => i.id !== item.id)
        setCart([...newSub])
      }else{
        sub.quantity -= 1
        setCart([...cart])
      }
    }

    return(
      <div className="App">
        <Router>
          <Navbar cart={cart} />
          <Switch>
            <Route exact path="/" render={()=>(<Shop products={products} addToCart={addToCart} />)} />
            <Route path="/cart" render={()=> <Cart cart={cart} removeItem={removeItem} increment={increment} decrement={decrement} />}/>
          </Switch>
        </Router>
      </div>
    )
}

export default Display;