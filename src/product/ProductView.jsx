import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,  useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import config from 'config';
import { productActions } from '../_actions';
function ProductView(props,match) {
       const { product } = useSelector(state => state.product); 
        let location = props.history.location;
        const dispatch = useDispatch();
        useEffect(() => {
            props.history.push(location.pathname, location.state);
            dispatch(productActions.getproduct(location.state));
        }, []);

  

    return (
       <>
        <div className="col-lg-8 offset-lg-2  p-5">
            <div className="d-flex">
                <h2>Product View</h2>
                <Link className="float-right ml-auto" to="/"><Button >  Product List</Button></Link>                
            </div>
         </div>
        <div className="col-lg-8 offset-lg-2">
            <form onSubmit={ (e) => onSubmit(e) } 
              encType="multipart/form-data" >
                <div className="form-group">
                    <label>Title</label>: {product && product.data[0].title}
                </div>
                <div className="form-group"><label>Price :</label> {product && product.data[0].price} </div>
                <div className="form-group"><label>Description :</label> {product && product.data[0].description} </div>
                <div className="form-group"><p>Image</p> <img src={`${config.base_Url}/${product && product.data[0].image}`} alt="image" width="400" /> </div>

      
            </form>
        </div>
        </>
    );
}

export { ProductView };