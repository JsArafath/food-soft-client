import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProducts.css';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:8000/products',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };
    return (
        <div className='add-course container'>
            <h1 className='text-center fw-bold  mt-5 text-dark'>Please Add a Products !!!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name",)} placeholder="Products Name" />
      <input {...register("description",)} placeholder="Description"/>
      <input type="number" {...register("price", )} placeholder="Price"/>
      <input {...register("img",)} placeholder="Image"/>
      <input type="submit" />
    </form> 
        </div>
    );
};

export default AddProducts;


