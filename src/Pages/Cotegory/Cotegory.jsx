import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../redux/Product/ProductSlice'


import './Cotegory.scss'
import ProductList from '../../Components/ProducList/ProductList'

function Cotegory() {
    const dispatch = useDispatch()
    const { cotegory } = useParams()
    const { products } = useSelector((state) => state.products)
    useEffect(() => {
        dispatch(getProduct(cotegory))
    }, [dispatch, cotegory])
    console.log(products);


    return (
        <div>
            <div className='info-up'>
                <div className='text-info-up'>
                    <h2>Cotegory: {cotegory}</h2>
                    <h3>Wishlist ({products.length})</h3>
                </div>
                <div className='button-info'>
                    <button>Move All To Bag</button>
                </div>
            </div>

            <ProductList data={products} />
        </div>
    )
}

export default Cotegory
