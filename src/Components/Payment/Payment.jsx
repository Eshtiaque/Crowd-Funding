// import { stringify } from 'postcss';
// import  { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOut from './CheckOut';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_51NEmG3IxzytApYUlrVvQjOkLBL4TdwZ6aTq4Mz4FnMKHgzjX83FRLIjyEjCddXis3csWUdu0pnLWkkt5QSxJAjb300a5y8iSib');
import img from "../../assets/img/section-banner/josh-appel-NeTPASr-bmQ-unsplash.jpg"
import SharedBanner from '../Contact/SharedBanner';
const Payment = () => {
    const { name, price } = useLoaderData();
    const fixedMoney = parseFloat(price)

    const tk = parseFloat(fixedMoney.toFixed(2));
    return (
        <div className=''>
            <div className="max-w-7xl mx-auto">
                <SharedBanner
                    background={img}
                    title="Donate Us"
                    titleHead="Donate to Change a Life"
                    titleDes={
                        <>
                            The Access to Water, Food Security & The Promotion of Women Are Major Challenges.
                            <br /> Our Work in Palestine. Social Promotion Foundation for Women. Liaison Status FAO.
                        </>
                    }
                ></SharedBanner>
            </div>

            <div className="text-center mt-8">
                <h2 className="text-3xl font-bold">Please Payment : ${tk}</h2>
                <hr className="border-b-[3px] w-[106px] mt-1 border-[#F99F24] mx-auto" />
            </div>
            <div className="max-w-xl mx-auto">
                <Elements stripe={stripePromise}>
                    <CheckOut name={name} price={price}></CheckOut>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;