import * as React from 'react';
import * as PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string,
    metaDescription: PropTypes.string,
    url: PropTypes.string,
};

function SerpPreview({ title, metaDescription, url, ...otherProps }) {
    return (
        <div {...otherProps}>
            <h3>{title}</h3>
            <span>{url}</span>
            <span>{metaDescription}</span>
        </div>
    );
}

SerpPreview.propTypes = propTypes;

export default SerpPreview;
