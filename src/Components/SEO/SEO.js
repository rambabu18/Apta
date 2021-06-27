import PropTypes from "prop-types";
import React from 'react';
import {Helmet} from "react-helmet";

const SEO = ({title}) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="Samudayah Technologies – IT Company" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="keywords" content="Digital Marketing, IT Services, Content Writing, Web Development, Mobile Development,IT Support  " />
            <link rel="website" href="http://www.samudayah.com/#/" />
        </Helmet>
    )
}

SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;
