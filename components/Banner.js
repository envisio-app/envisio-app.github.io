import React from 'react';

const Banner = () => {
        return (
            <section className="banner-one" id="banner">
                <span className="banner-one__shape-1"></span>
                <span className="banner-one__shape-2"></span>
                <span className="banner-one__shape-3"></span>
                <span className="banner-one__shape-4"></span>
                <div className="container">
                    <div className="row" style={{padding: "30px"}}>
                        <div>
                            <div className="banner-one__content">
                                <p className="banner-one__title" style={{fontStyle: "italic", fontSize: "2em"}}><span>ENVISIO</span> /ɛnˈvɪziˌoʊ/</p>
                                <h3 className="banner-one__title">Organize and enhance your <br />
                                    <span>gallery</span>.</h3>
                                <p className="banner-one__text">
                                Envisio is a mobile app designed to redefine how you organize and enhance your photo albums. Whether it's a family trip, a special event, or a daily snapshot, Envisio seeks to help you find, organize, and collect your memories effortlessly. Through AI technologies, the app aims to sort your photos into customizable albums. It helps you find the best shot from similar photos by assessing each photo based on its quality. The app also offers to automate gallery cleaning. Furthermore, you can easily tune your background by clearing away any unnecessary elements or adding missing details. Perfect for anyone looking to declutter their digital photo collection and keep their memories organized, all in one place.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Banner;