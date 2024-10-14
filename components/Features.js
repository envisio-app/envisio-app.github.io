import React from 'react';

const Features = () => {
        return (
            <section className="service-one" id="features">
                <div className="container" style={{paddingBottom: "150px"}}>
                    <div className="block-title text-center">
                        <h2 className="block-title__title">Meet Our Team<span></span> <br />
                        </h2>
                    </div>
                    <div className="row" style={{justifyContent:"center"}}>
                        <div className="col-lg-2 col-md-4 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <img src="/assets/images/erdem.jpeg" className="service-one__icon dimon-icon-laptop" style={{objectFit:"cover"}}></img>
                                    <h3><a href="#">Erdem Eren Çağlar<br /></a></h3>
                                    <a className="fa fa-github" href="https://github.com/erdemerencaglar"></a>
                                   {/*  <p>Lorem ipsum is are <br /> many variations of <br /> pass of majority.</p> 
                                    <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-12 wow fadeInDown" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
{/*                                     <i className="service-one__icon dimon-icon-presentation"></i>
 */}                                    
                                     <img src="/assets/images/oyku.jpg" className="service-one__icon dimon-icon-laptop" style={{objectFit:"cover"}}></img>
                                    <h3><a href="#">Öykü Demir<br /></a></h3>
                                  {/*   <p>Lorem ipsum is are <br /> many variations of <br /> pass of majority.</p> 
                                    <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>*/}
                                    <a className="fa fa-github" href="https://github.com/oykudemir"></a>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    {/* <i className="service-one__icon dimon-icon-target"></i> */}
                                    <img src="/assets/images/doruk.jpeg" className="service-one__icon dimon-icon-laptop" style={{objectFit:"cover"}}></img>
                                    <h3><a href="#">Doruk Işık<br /></a></h3>
                                    <a className="fa fa-github" href="https://github.com/dorukiskk"></a>
                                    {/* <p>Lorem ipsum is are <br /> many variations of <br /> pass of majority.</p>
                                    <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-12 wow fadeInDown" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
{/*                                     <i className="service-one__icon dimon-icon-visualization"></i>
 */}                                    <img src="/assets/images/doga.jpeg" className="service-one__icon dimon-icon-laptop" style={{objectFit:"cover"}}></img>
                                        <h3><a href="#">Doğa Elif Konuk <br /></a></h3>
                                        <a className="fa fa-github" href="https://github.com/dogaelifkonuk"></a>
                                    {/* <p>Lorem ipsum is are <br /> many variations of <br /> pass of majority.</p>
                                  <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a> */}  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-12 wow fadeInDown" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <img src="/assets/images/emre.jpg" className="service-one__icon dimon-icon-laptop" style={{objectFit:"cover"}}></img>                                    <h3><a href="#">Mehmet Emre Kantaş<br /></a></h3>
                                    <a className="fa fa-github" href="https://github.com/emrekantas"></a>
                                    {/* <p>Lorem ipsum is are <br /> many variations of <br /> pass of majority.</p>
                                   <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a> */} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Features;