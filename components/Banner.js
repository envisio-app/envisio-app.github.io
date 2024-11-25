import React from 'react';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

const Banner = () => {
        return (
            <section className="banner-one" id="banner">
                <span className="banner-one__shape-1"></span>
                <span className="banner-one__shape-2"></span>
                <span className="banner-one__shape-3"></span>
                <span className="banner-one__shape-4"></span>
                <div className="container">
                    <div className="banner-one__content">
{/*                         <div className='banner-one__spell'>
                            <h2 className='banner-one__head'>/ɛnˈvɪziˌoʊ/</h2>
                        </div> */}
                        <h3 className="banner-one__title">Keep your gallery <br />
                            organized perfectly </h3>
{/*                             <a href='#cta-one'><div className="explore_button">EXPLORE</div></a>
 */}                   </div>
                </div>
            </section>
        )
}
export default Banner;