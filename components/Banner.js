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
                                <p className="banner-one__title" style={{fontStyle: "italic", fontSize: "2em"}}><span>VISIO</span> /vizio/</p>
                                <h3 className="banner-one__title">Organize and enhance your <br />
                                    <span>gallery</span>.</h3>
                                <p className="banner-one__text">
                                Visio is a mobile app designed to redefine how you organize and enhance your photo albums. Through AI technologies, it not only aims to sort your photos into customizable albums but also helps you find the best shot from similar photos, rating each photo based on quality. Whether it's a family trip, a special event, or daily snapshot, Visio seeks to help you find, organize, and collect your memories effortlessly. The app pursues providing enhancements and restores missing details for a more complete visual. Plus, you can easily eliminate unwanted distractions. Perfect for anyone looking to declutter their digital photo collection and keep their memories organized, all in one place.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Banner;