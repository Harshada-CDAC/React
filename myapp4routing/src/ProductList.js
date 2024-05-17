import axios from 'axios';
import React, { useEffect, useState } from 'react';
 
function ProductList(props) {
    // const [state,setState]=useState<IState>(
    //     {loading:false,products: [] as IProduct[],errorMsg:''})
    const [productList,setState]=useState([])
   
    useEffect(()=>{
       
        axios.get('https://fakestoreapi.com/products').then(res=>{
            //setState({...state,loading:true,products:res.data})
            console.log("res",res)
            setState(res.data)
            console.log("productList",productList)
        }).catch(error=>{
 
        })
    })
   
    return (
     
        <div>
            ProductList
            {
                productList.map(product=>{
                    if(product.price>200)
                    {
                        return (
                        <div>
                            <h1>{product.title}</h1>
                            <h1>{product.description}</h1>
                        </div>
                       
                        )
                    }
                   
                })
            }
        </div>
    );
}
 
export default ProductList;