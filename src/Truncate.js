import * as PropTypes from 'prop-types';
import * as React from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const propTypes = {
    element: PropTypes.string,
    maxWidth: PropTypes.number,
    maxChars: PropTypes.number,
    children: PropTypes.string.isRequired,
};

const defaultProps = {
    element: 'div',
};

const ellipsis = '\u00A0…';

function truncateWord(str) {
    return str.replace(/\s+\S+$/, '');
}

function Truncate({
    element: Element,
    maxWidth,
    maxChars,
    children,
    style,
    ...otherProps
}) {
    const nodeRef = useRef(null);
    const [truncatedChildren, setTruncatedChildren] = useState(children);

    // Truncate width
    useLayoutEffect(() => {
        if (!maxWidth) return;

        /** @type HTMLElement */
        const node = nodeRef.current;
        node.innerText = children;

        if (node.scrollWidth > maxWidth) {
            node.innerText = children + ellipsis;

            let newChildren = children;
            while (
                node.scrollWidth > maxWidth &&
                newChildren !== truncateWord(newChildren)
            ) {
                newChildren = truncateWord(newChildren);
                node.innerText = newChildren + ellipsis;
            }

            setTruncatedChildren(newChildren + ellipsis);
        } else {
            setTruncatedChildren(children);
        }
    }, [maxWidth, children]);

    // Truncate chars
    useEffect(() => {
        if (!maxChars) return;

        if (children.length > maxChars) {
            let newChildren = children;
            while (
                (newChildren + ellipsis).length > maxChars &&
                newChildren !== truncateWord(newChildren)
            ) {
                newChildren = truncateWord(newChildren);
            }

            setTruncatedChildren(newChildren + ellipsis);
        } else {
            setTruncatedChildren(children);
        }
    }, [maxChars, children]);

    // Set required styles
    let ownStyle = {};
    if (maxWidth) {
        ownStyle = {
            ...ownStyle,
            maxWidth,
            overflow: 'hidden',
        };
    }

    return (
        <Element
            ref={nodeRef}
            style={{
                ...ownStyle,
                ...style,
            }}
            {...otherProps}
        >
            {truncatedChildren}
        </Element>
    );
}

Truncate.propTypes = propTypes;
Truncate.defaultProps = defaultProps;

export default Truncate;
