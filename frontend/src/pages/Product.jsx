import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {ShopContext} from '../context/ShopContext'
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products , currency , addToCart }  =  useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image,setImage] = useState('');
  const [size,setSize] = useState('');

  const fetchProductData = async () => {
     
    products.map((item)=>{

      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0])
        return null;
      }
    })

  }

  useEffect(()=>{
     fetchProductData();
  },[productId,products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
       {/* product data */}
       <div className='flex gap-12 sm:gap-1 flex-col sm:flex-row'>
         {/* product images */}
         <div className=' flex-1 flex flex-col-reverse gap-3 sm:flex-row'>

          <div className=' flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>

           {
             productData.image.map((item,index)=>(
               <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
             ))
           }

          </div>

           <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto' src={image} alt="" />
           </div>

         </div>

            {/* product Info */}

        <div className='flex-1'>
            <h2 className='font-medium text-2xl mt-2'>{productData.name}</h2>
            <div className='flex items-center gap-1 mt-2'>

              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className='pl-2'>(152)</p>

            </div>
            
              <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
              <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div className='flex gap-2'>
                  {productData.sizes.map((item,index)=>(

                      <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-black':'' }`} key={index}>{item}</button>
                ))}

                </div>
              </div>
               <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
               <hr className='mt-8 sm:w-4/5 border-black'/>
               <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% original product.</p>
                <p>cash on delivery is available.</p>
                <p>Easy return and exchange policy with in 7 days.</p>

               </div>
        </div>
            
       </div>
        {/* Description section */}

       <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
         <p>Discover the latest fashion trends and elevate your wardrobe with Style Fusion, your ultimate online shopping destination. Our curated collection of stylish clothing and accessories for men and women ensures you stay ahead of the fashion curve. From statement pieces to everyday essentials, our designs blend comfort, quality, and style to help you express your unique personality.
         </p>
         <p>Browse through our extensive range of clothing, including tops, bottoms, dresses, outerwear, and more. Our user-friendly interface and secure checkout process make shopping effortless. With new arrivals added regularly, you'll always find something fresh and exciting. Whether you're looking for casual wear, formal attire, or athleisure wear, Style Fusion has got you covered. Join our fashion community today and experience the art of stylish living!
         </p>
        </div>
       </div>
           {/* related product section */}
           <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ): <div className='opacity-0'></div>
}

export default Product