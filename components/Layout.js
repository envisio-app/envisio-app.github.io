import React from 'react';
import Head from 'next/head';

const Layout = (props) => {

        return (
            <div>
                <Head>
                    <title>{props.pageTitle}</title>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"/>                    
                    <link rel="stylesheet" href="/assets/css/animate.min.css" />
                    <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="/assets/css/style.css" />
                    <link rel="stylesheet" href="/assets/css/responsive.css" />

                </Head>

                <div className="page-wrapper">

                {props.children}

                </div>

            </div>
        )
}
export default Layout;