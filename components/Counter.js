import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

export default class Counter extends Component {
    constructor(){
        super()
        this.state = {
            startCounter: false
        }
    }

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({startCounter: true});
        }
    }

    render(){
        return (

            <section className="fact-one" id='fact-one'>
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">Progress Reports
                        </h2>
                    </div>
                    {/* <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="fact-one__single">
                                <div className="fact-one__inner">
                                    <h3 className="fact-one__count counter">
                                       <InsertDriveFileOutlinedIcon></InsertDriveFileOutlinedIcon>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="fact-one__single">
                                <div className="fact-one__inner">
                                    <h3 className="fact-one__count counter">
                                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 6400 : 0} /></VisibilitySensor>
                                    </h3>
                                    <p className="fact-one__text">customers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="fact-one__single">
                                <div className="fact-one__inner">
                                    <h3 className="fact-one__count counter">
                                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 960 : 0} /></VisibilitySensor>
                                    </h3>
                                    <p className="fact-one__text">success</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="fact-one__single">
                                <div className="fact-one__inner">
                                    <h3 className="fact-one__count counter">
                                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 378 : 0} /></VisibilitySensor>
                                    </h3>
                                    <p className="fact-one__text">awards</p>
                                </div>
                            </div>
                        </div>
                    </div>*/}
                    <div style={{display: "flex", justifyContent: "center"}}>
                    <div className="fact-one__single">
                        <div className="fact-one__inner">
                            <a href="https://drive.google.com/file/d/1rTGBljqY81yz0srHfa4I4QjLiHry35RY/view?usp=sharing"  target="_blank"  rel="noopener noreferrer">  
                            <InsertDriveFileOutlinedIcon style={{fontSize: "4em",}} ></InsertDriveFileOutlinedIcon>
                            </a>    
                            <a href="https://drive.google.com/file/d/1rTGBljqY81yz0srHfa4I4QjLiHry35RY/view?usp=sharing"  target="_blank" rel="noopener noreferrer">  
                            <p className="fact-one__text">PROJECT SPECIFICATION</p>
                            </a>
                        </div>
                    </div>
                </div>
                </div> 
            </section>
        )
    }
}