import * as React from 'react';
import * as PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string,
    metaDescription: PropTypes.string,
    url: PropTypes.string,
};

const styles = {
    root: {
        width: 600,
        fontFamily: 'arial,sans-serif',
    },
    title: {
        color: '#1a0dab',
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 1.2,
    },
    url: {
        height: 18,
        color: '#006621',
        fontSize: 14,
        lineHeight: '16px',
    },
    description: {
        color: '#545454',
        fontSize: 13,
        lineHeight: 1.4,
    },
};

function SerpPreview({ title, metaDescription, url, ...otherProps }) {
    return (
        <div style={styles.root} {...otherProps}>
            <div style={styles.title}>{title}</div>
            <div style={styles.url}>{url}</div>
            <div style={styles.description}>{metaDescription}</div>
        </div>
    );
}

SerpPreview.propTypes = propTypes;

export default SerpPreview;
