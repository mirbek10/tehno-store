import React, { useEffect } from 'react';

import Banner from '../../Components/Banner/Banner';
import ProductList from '../../Components/ProducList/ProductList' // исправлен импорт
import { useSelector, useDispatch } from 'react-redux';
// import { setCategory } from '../../redux/Product/ProductSlice';
import { getProduct } from '../../redux/Product/ProductSlice';

function Home() {
    const dispatch = useDispatch();
    const { products, cotegory, search } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProduct({cotegory , search}));
    }, [dispatch, cotegory , search]);

    

    return (
        <div>
            <Banner />
            <ProductList data={products} />
        </div>
    );
}

export default Home;