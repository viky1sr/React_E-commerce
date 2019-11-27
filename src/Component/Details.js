import React, {Component} from 'react';
import {ProductConsumer} from "../Context";
import {Link} from "react-router-dom";
import {ButtonContainer} from "./Styled";

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id,price ,company, img, info, title, inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-center">
                                    <img src={img} className="img-fluid" alt="Product"/>
                                </div>
                                <div className="col-10 mx-auto text-center text-capitalize text-slanted text-blu my-5">
                                    <h1>Model : {title}</h1>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">made by:
                                        <span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h4>
                                    <h4 className="text-blue"><strong>Price : <span>Rp. </span>{price}</strong></h4>
                                    <p className="text-capitalize font-weight-blod mt-3 mb-0">some info about product :</p>
                                    <p className="text-muted lead">{info}</p>
                                    <div>
                                        <Link>
                                            <ButtonContainer className="mr-2">Back to product</ButtonContainer>
                                        </Link>
                                            <ButtonContainer disabled = {inCart?true:false}
                                            >
                                                {inCart?"InCart":"Add to Cart"}
                                            </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;