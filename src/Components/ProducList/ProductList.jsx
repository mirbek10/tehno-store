import React from 'react'

import './ProductList.scss'
import Card from '../Card/Cars'


function ProductList({ data }) {
    return (
        <div className='corausel container'>{data?.map((item)=>(
            <Card key={item.id} el={item}/>

        ))
            }
        </div>
    )
}

export default ProductList
