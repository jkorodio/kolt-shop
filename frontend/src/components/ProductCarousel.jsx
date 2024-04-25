import React from 'react';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';
import { Carousel, Image } from 'react-bootstrap';
import Loader from './Loader';
import Message from './Message';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';

const ProductCarousel = () => {
    const { data: products, isLoading, error } = useGetTopProductsQuery();

    return (
        isLoading ? <Loader /> : error ? <Message variant='danger'>{error?.data?.message || error.error}</Message> :
            <Carousel pause='hover' className='bg-primary'>
                {products.map(product => (
                    <Carousel.Item key={product._id}>
                        <Link to={`/product/${product._id}`}>
                            <Image src={product.image} alt={product.name} fluid style={!isMobile ? { width: '900px', height: '650px' } : {}} />
                            <Carousel.Caption className='carousel-caption'>
                                <h2>{product.name} (${product.price})</h2>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel>
    )
}

export default ProductCarousel