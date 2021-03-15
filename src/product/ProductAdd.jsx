import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderPage } from '../partials/header';
import { Button } from 'react-bootstrap';
import { productActions } from '../_actions';

function ProductAdd() {
    const {error} = useSelector(state => state.products);


    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description:'',
       });
       const [image, setImage] = useState("");
       const [imageName, setImageName] = useState("Choose file");
       const { title, price, description} = formData;
       const onFileChange = (e) => {
        setImage(e.target.files[0]);
        setImageName(e.target.files[0].name);
       };
       const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
       };
       const onSubmit = (e) => {
        e.preventDefault();
        const payload = new FormData();
        payload.append("image", image);
        payload.append("title", formData.title);
        payload.append("price", formData.price,);
        payload.append("description", formData.description,);
        dispatch(productActions.addProduct(payload));
       };
        const dispatch = useDispatch();
        const location = useLocation();

  

    return (
       <>
        <div className="col-lg-8 offset-lg-2  p-5">
            <div className="d-flex">
                <h2>Add Product</h2>
                <Link className="float-right ml-auto" to="/"><Button >  Product List</Button></Link>                
            </div>
         </div>
        <div className="col-lg-8 offset-lg-2">
            <form onSubmit={ (e) => onSubmit(e) } 
              encType="multipart/form-data" >
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control" type="title" name="title" value={title} onChange={(e) => onChange(e)} />
                    {error && error.title  && <div className="invalid-feedback" style={{display:"block"}}>{error.title[0]}</div>}
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input className="form-control" type="number" name="price" value={price} onChange={(e) => onChange(e)} />
                    {error && error.price  && <div className="invalid-feedback" style={{display:"block"}}>{error.price[0]}</div>}
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control"  name="description" value={description} onChange={(e) => onChange(e)}></textarea>
                    
                    {error && error.description  && <div className="invalid-feedback" style={{display:"block"}}>{error.description[0]}</div>}
                </div>

                <div className="form-group">
                    <label>Image</label>
                    <input className="form-control" type="file" name="image"  onChange={(e) => onFileChange(e)}  accept="image/*" />                    
                    {error && error.image  && <div className="invalid-feedback" style={{display:"block"}}>{error.image[0]}</div>}
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
        </>
    );
}

export { ProductAdd };