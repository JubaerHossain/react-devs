import React, { useEffect } from 'react';
import  LoadingBox  from '../_components/LoadingBox'
import MessageBox from '../_components/MessageBox';
import config from 'config';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table'
import { userActions,productActions } from '../_actions';
import { history } from '../_helpers';
import Pagination from 'react-bootstrap-4-pagination';
const ProductList = (props) => {
    const dispatch = useDispatch();
    const { loading, error,  products } =useSelector(state => state.products);
    useEffect(() => {
        dispatch(productActions.getproductAll());
        
    }, []);
  
    function handleDeleteUser(id) {
        alert("Are you want delete?");
        dispatch(productActions.productdelete(id));
        window.location.reload()
    }
    function goToEdit(data,id) {
        history.push(data,id);
    }
    let prod = products ? products.meta : ''
  
     console.log(prod.last_page - prod.current_page);
      let paginationConfig = {
        totalPages: prod.last_page,
        currentPage: prod.current_page,
        showMax: prod.per_page,
        size: "sm",
        threeDots: true,
        prevNext:  true,
        borderColor: 'red',
        activeBorderColor: 'black',
        activeBgColor: 'green',
        disabledBgColor: 'red',
        activeColor: 'red',
        color: 'purple',
        disabledColor: 'grey',
        circle: true,
        shadow: true,
        onClick: function (page) {
            dispatch(productActions.getproductAll(page));
         }
      };
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
                                <button onClick={() => goToEdit(`/product-view`,product.id)} className="btn btn-sm btn-primary mr-1" >
                                  <span>View</span>
                                </button>
                                <button onClick={() => goToEdit(`/product-edit`,product.id)} className="btn btn-sm btn-primary mr-1" >
                                  <span>Edit</span>
                                </button>
                                <button onClick={() => handleDeleteUser(product.id)} className="btn btn-sm btn-danger btn-delete-user" >
                                  <span>Delete</span>
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <Pagination {...paginationConfig} />
            </>
                )
               }
            </>
            
          )}
          </>
       
    );
}

export default ProductList;