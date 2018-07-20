import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';

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

class Truncate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            truncatedChildren: props.children,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (
            this.props.children !== nextProps.children ||
            this.props.maxWidth !== nextProps.maxWidth ||
            this.props.maxChars !== nextProps.maxChars
        ) {
            this.setState({
                truncatedChildren: nextProps.children,
            });
        }
    }

    componentDidMount() {
        this.truncate();
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.children !== prevProps.children ||
            this.props.maxWidth !== prevProps.maxWidth ||
            this.props.maxChars !== prevProps.maxChars
        ) {
            this.truncate();
        }
    }

    truncate() {
        if (this.props.maxWidth) {
            this.truncateWidth();
        }

        if (this.props.maxChars) {
            this.truncateChars();
        }
    }

    truncateWidth() {
        const node = ReactDOM.findDOMNode(this);

        if (node.scrollWidth > this.props.maxWidth) {
            let children = this.props.children;
            node.innerText = children + ellipsis;

            while (
                node.scrollWidth > this.props.maxWidth &&
                children !== truncateWord(children)
            ) {
                children = truncateWord(children);
                node.innerText = children + ellipsis;
            }

            this.setState({
                truncatedChildren: children + ellipsis,
            });
        }
    }

    truncateChars() {
        if (this.props.children.length > this.props.maxChars) {
            let children = this.props.children;
            while (
                (children + ellipsis).length > this.props.maxChars &&
                children !== truncateWord(children)
            ) {
                children = truncateWord(children);
            }

            this.setState({
                truncatedChildren: children + ellipsis,
            });
        }
    }

    render() {
        const {
            element: Element,
            maxWidth,
            maxChars,
            children,
            ...otherProps
        } = this.props;
        const { truncatedChildren } = this.state;

        return <Element {...otherProps}>{truncatedChildren}</Element>;
    }
}

Truncate.propTypes = propTypes;
Truncate.defaultProps = defaultProps;

export default Truncate;
