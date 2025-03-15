import React, { useEffect } from 'react'
import Banner from '../Components/Banner/Banner'
// import Products from '../Components/Products/Products'
import ProductList from '../Components/ProducList/ProductList'
import { useSelector, useDispatch } from 'react-redux'
import { getGadgets } from '../redux/gadgetsSlice/Gadgetslice'


function Home() {
    const dispatch = useDispatch()
    const { gadgets, loding, error } = useSelector((state) => state.gadgets)
    useEffect(() => {
        dispatch(getGadgets())
    }, [dispatch])
    // console.log(gadgets)

    return (
        <div>
            <Banner />
            {/* <Products /> */}
            <ProductList data={gadgets} />
        </div>
    )
}

export default Home
