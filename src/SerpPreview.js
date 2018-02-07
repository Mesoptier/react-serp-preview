import * as React from 'react';
import * as PropTypes from 'prop-types';
import Truncate from './Truncate';

const propTypes = {
    title: PropTypes.string.isRequired,
    metaDescription: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
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

        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    url: {
        height: 18,
        color: '#006621',
        fontSize: 14,
        lineHeight: '16px',

        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    description: {
        color: '#545454',
        fontSize: 13,
        lineHeight: 1.4,

        wordWrap: 'break-word',
    },
};

function SerpPreview({ title, metaDescription, url, ...otherProps }) {
    return (
        <div style={styles.root} {...otherProps}>
            <Truncate element="div" maxWidth={600} style={styles.title}>
                {title}
            </Truncate>
            <div style={styles.url}>{url}</div>
            <Truncate element="div" maxChars={300} style={styles.description}>
                {metaDescription}
            </Truncate>
        </div>
    );
}

SerpPreview.propTypes = propTypes;

export default SerpPreview;
