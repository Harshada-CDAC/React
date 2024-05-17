import React, { useState } from 'react';

function ProductList(props) {
    const [productArray,setProduct]=useState([{"id":1,"product_name":"Vonni","price":"MacCartney","description":"vmaccartney0@fotki.com"},
    {"id":2,"product_name":"Russ","price":"Schollick","description":"rschollick1@reuters.com"},
    {"id":3,"product_name":"Anthe","price":"Iuorio","description":"aiuorio2@abc.net.au"},
    {"id":4,"product_name":"Lek","price":"Figgess","description":"lfiggess3@theguardian.com"},
    {"id":5,"product_name":"Arley","price":"Sherburn","description":"asherburn4@bizjournals.com"},
    {"id":6,"product_name":"Michail","price":"Venables","description":"mvenables5@answers.com"},
    {"id":7,"product_name":"Peggi","price":"Loeber","description":"ploeber6@networksolutions.com"},
    {"id":8,"product_name":"Corey","price":"Clemenceau","description":"cclemenceau7@pcworld.com"},
    {"id":9,"product_name":"Fredric","price":"Alabone","description":"falabone8@baidu.com"},
    {"id":10,"product_name":"Hillier","price":"Nevitt","description":"hnevitt9@va.gov"}])
    return (
        <div>
            {
                productArray.map(product=>{
                    
return(
    <div className='product-list'>
    <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtBUK3Z1Ot2C4_WwV7o7DYI4JWNkGLDZj6kg&s" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{product.product_name}</h5>
      <p class="card-text">{product.price}</p>
      <p class="card-text">{product.description}</p>
  
      <a href="#" class="btn btn-primary">Add To Cart</a>
    </div>
  </div>
  </div>
            )
            })
        }  
        </div>
    );
}

export default ProductList;