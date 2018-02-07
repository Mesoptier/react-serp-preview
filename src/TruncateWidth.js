import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';

const propTypes = {
    element: PropTypes.string,
    maxWidth: PropTypes.number.isRequired,
    children: PropTypes.string.isRequired,
};

const defaultProps = {
    element: 'div',
};

const ellipsis = ' …';

function truncateWord(str) {
    return str.replace(/\s+\S+$/, '');
}

class TruncateWidth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            truncatedChildren: props.children,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            truncatedChildren: nextProps.children,
        });
    }

    componentDidMount() {
        this.checkWidth();
    }

    componentDidUpdate(prevProps) {
        if (this.props.children !== prevProps.children) {
            this.checkWidth();
        }
    }

    checkWidth() {
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

    render() {
        const {
            element: Element,
            maxWidth,
            children,
            style: userStyle = {},
            ...otherProps
        } = this.props;
        const { truncatedChildren } = this.state;
        const style = {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            ...userStyle,
        };

        return (
            <Element style={style} {...otherProps}>
                {truncatedChildren}
            </Element>
        );
    }
}

TruncateWidth.propTypes = propTypes;
TruncateWidth.defaultProps = defaultProps;

export default TruncateWidth;
