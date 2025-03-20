import React from 'react'

import './ProductList.scss'
import Card from '../Card/Cars'
import Loading from '../Loading/Loading'
import { useSelector } from 'react-redux'



function ProductList({ data }) {
    const { loading, error } = useSelector((state) => state.products);

    if (loading) return <Loading />;
    if (error) return <p>{error.message}</p>;
    return (
        <div className='corausel container'>
            {data?.map((item) => (
                <Card key={item.id} el={item} />

            ))
            }
        </div>
    )
}

export default ProductList
