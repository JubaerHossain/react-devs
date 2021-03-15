import React, { useEffect } from 'react';


import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductList from '../product/list'
function HomePage() {
 

    return (
        <>       
        <div className="col-lg-8 offset-lg-2  p-5">
            <div className="d-flex">
                <h2>Product List</h2>
                <Link className="float-right ml-auto" to="/product-add"><Button > Add Product</Button></Link>                
            </div>
         </div>
        <div className="col-lg-8 offset-lg-2">
          <ProductList></ProductList> 
        </div>
        </>
    );
}

export { HomePage };