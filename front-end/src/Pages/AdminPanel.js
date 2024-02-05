import { useDispatch } from "react-redux";
import "./css/admin-panel.css";
import { createNewProduct } from "../Redux/Slices/adminSlice";
import { useState } from "react";
export default function AdminPanel() {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [category,setCategory] = useState("");
    const [price,setPrice] = useState();
    const [sizes,setSizes] = useState([]);
    const [image,setImage] = useState("");
    const dispatch = useDispatch();
    function handleSubmit(e){
        e.preventDefault();
        dispatch(createNewProduct({title,description,category,price,sizes,image}))
    }
  return (
    <div className="add-product-form">
    <form method="post" onSubmit={handleSubmit}>
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Title</label>
    <input name="title" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)}/>
    </div>
    <div className="form-group">
    <label htmlFor="exampleInputPassword1">Description</label>
    <input name="description" type="text" className="form-control" id="exampleInputPassword1" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}/>
    </div>
    <div className="form-group">
    <label htmlFor="exampleInputPassword1">Category</label>
    <input name="category" type="text" className="form-control" id="exampleInputPassword1" placeholder="Category" onChange={(e)=>setCategory(e.target.value)}/>
    </div>
    <div className="form-group">
    <label htmlFor="exampleInputPassword1">Price</label>
    <input name="price" type="number" className="form-control" id="exampleInputPassword1" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/>
    </div>
    <div className="form-group">
    <label htmlFor="exampleInputPassword1">Sizes</label>
    <input name="sizes" type="text" className="form-control" id="exampleInputPassword1" placeholder="Sizes" onChange={(e)=>setSizes(e.target.value)}/>
    </div>
    <div className="form-group">
    <label htmlFor="exampleInputPassword1">Image</label>
    <input name="image" type="text" className="form-control" id="exampleInputPassword1" placeholder="Image Link" onChange={(e)=>setImage(e.target.value)}/>
    </div>
    {/* <div className="form-group">
    <label htmlFor="exampleInputPassword1">Image</label>
    <input name="image" type="file" accept="image/*" className="form-control" id="exampleInputPassword1" placeholder="Image"/>
    </div> */}
    
    <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
    </div>
  )
}
