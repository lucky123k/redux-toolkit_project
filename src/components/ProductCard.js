import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../features/cartSlice';

export default function App() {
    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();

    return (
        <div className="md-2" style={{ marginTop: "100px" }}>
            <Link to="/cart">Cart</Link>
            <MDBContainer >
                <MDBRow className='mb-3'>
                    {items.map((item) => (
                        <MDBCol key={item.id} size="md">
                            <MDBCard>
                                <MDBCardImage src={item.img} position='top' alt='...' />
                                <MDBCardBody>
                                    <MDBCardTitle>{item.title}</MDBCardTitle>
                                    <MDBCardText>{item.price}</MDBCardText>
                                    <MDBBtn onClick={() => dispatch(addToCart(item))}>Add to cart</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBContainer>
        </div>
    );
}
