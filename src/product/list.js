import React, { useEffect } from 'react';
import  LoadingBox  from '../_components/LoadingBox'
import MessageBox from '../_components/MessageBox';
import { Link } from 'react-router-dom';
import config from 'config';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table'
import { userActions,productActions } from '../_actions';
import { Button,Pagination } from 'react-bootstrap';
import { history } from '../_helpers';
const ProductList = (props) => {
    const dispatch = useDispatch();
    const { loading, error,  products } =useSelector(state => state.products);
    useEffect(() => {
        dispatch(productActions.getproductAll());
    }, []);
  
    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }
    return (
        <>
        {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {!products ? (<MessageBox>No Product Found</MessageBox>) :
              (
                  <>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.data.map((product, index) =>
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title.length  > 20 ? product.title.substr(0, 20) +'...' : product.title } </td>
                            <td>{product.price}</td>
                            <td> <img src={`${config.base_Url}/${product.image}`} alt="image" width="40" /></td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to={`/product/${product.id}/view`} className="btn btn-sm btn-primary mr-1">View</Link>
                                <Link to={`/product/${product.id}/edit`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                                
                                <button onClick={() => handleDeleteUser(product.id)} className="btn btn-sm btn-danger btn-delete-user" >
                                  <span>Delete</span>
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            </>
                )
               }
            </>
            
          )}
          </>
       
    );
}

export default ProductList;