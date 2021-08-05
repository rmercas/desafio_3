import React from 'react';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icon';
import App from '../App';

function CartWidget(props){
    return(
        <div className="CartWidget">
            <FontAwesomeIcon icon={faCartPlus}/>

        </div>
    );
}

export default CartWidget;