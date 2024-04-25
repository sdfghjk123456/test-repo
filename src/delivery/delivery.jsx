import React from 'react'
import "./delivery.css";

export default function delivery() {
    return (
        <div>
            <div class="delivery-and-payment-section pt-5 pb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-6 col-md-4 order-1 order-md-2">
                            <div class="text-center">
                                <img
                                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png"
                                    class="delivery-and-payment-section-img"
                                />
                            </div>
                        </div>
                        <div class="col-6 col-md-4 order-2 order-md-1">
                            <h1 class="delivery-and-payment-section-heading">
                                Delivery and Payment
                            </h1>
                            <p class="delivery-and-payment-section-description">
                                Enjoy hassle-free payment with the plenitude of payment options
                                available for you. Get live tracking and locate your food on a
                                live map. It's quite a sight to see your food arrive to your door.
                                Plus, you get a 5% discount on every order every time you pay
                                online.
                            </p>
                            <button class="custom-button">Order Now</button>
                            <div class="mt-3">
                                <img
                                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/visa-card-img.png"
                                    class="payment-card-img"
                                />
                                <img
                                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/master-card-img.png"
                                    class="payment-card-img"
                                />
                                <img
                                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/paypal-card-img.png"
                                    class="payment-card-img"
                                />
                                <img
                                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/american-express-img.png"
                                    class="payment-card-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="thanking-customers-section pt-5 pb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-7 d-flex flex-column justify-content-center">
                            <h1 class="thanking-customers-section-heading">
                                Thank you for being a valuable customer to us.
                            </h1>
                            <p class="thanking-customers-section-description">
                                We have a surprise gift for you
                            </p>
                            <div class="d-md-none">
                                <img
                                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
                                    class="thanking-customers-section-img"
                                />
                            </div>
                            <div>
                                <button class="custom-button">Redeem Gift</button>
                            </div>
                        </div>
                        <div class="col-12 col-md-5 d-none d-md-block">
                            <img
                                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
                                class="thanking-customers-section-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
