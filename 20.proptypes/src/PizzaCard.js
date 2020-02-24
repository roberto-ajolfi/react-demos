import React from 'react';
import PropTypes from 'prop-types';

const PizzaCard = ({name, description, price, toppings, discount}) => {
    return(
        <div style={{ margin: "auto", width: 300, backgroundColor: "darkgray", padding: "5px" }}>
            <div style={{ backgroundColor: "white"}}>
                <h1 style={{ color: "red"}}>{name}</h1>
                <span style={{ textDecoration: discount ? "line-through" : "", border: "1px solid black", padding:"10px", color: "black", backgroundColor: "yellow", borderRadius: "5px" }}>
                    {price}&nbsp;€
                </span>
                { discount && 
                <span style={{ color: "red", fontWeight: "bold", marginLeft: "10px"}}>Discount! {Math.round(price * 0.9)}&nbsp;€</span>}
            </div>
            <h3>{description}</h3>
            <h4>Toppings</h4>
            { toppings !== undefined && 
            <div>
                <table style={{width:"100%"}}>
                    <tbody>
                        {toppings.map(t => <tr key={t}><td>{t}</td></tr>)}
                    </tbody>
                </table>
            </div>
            }
        </div>
    );
}

PizzaCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    toppings: PropTypes.arrayOf(PropTypes.string),
    discount: PropTypes.bool
};

export default PizzaCard;