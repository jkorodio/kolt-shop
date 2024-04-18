import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Meta from '../components/Meta';


const HomeScreen = () => {
    const { pageNumber, keyword } = useParams();
    const { data, isLoading, error } = useGetProductsQuery({ keyword, pageNumber });

    return (
        <>
            {!keyword ? <ProductCarousel /> : (<Link to='/' className='btn btn-light'>Go Back</Link>)}
            {isLoading ? (<Loader />) : error ? (<Message variant='danger'>{error?.data?.message || error.error}</Message>) :
                (
                    <>
                        <Meta title='KOLT' />
                        <h1>Lates Products</h1 >
                        {data.products.length === 0 && <Message variant='danger'>No result found</Message>}
                        <Row>
                            {data.products.map((product) => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        <Paginate pages={data.pages} page={data.page} keyword={keyword ? keyword : ''} />
                    </>
                )}
        </>
    )
}

export default HomeScreen