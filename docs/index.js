import * as React from 'react';
import * as ReactDOM from 'react-dom';

import SerpPreview from '../src/SerpPreview';

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title:
                'Example Domain – Titles are truncated when they exceed the 600 pixels mark',
            metaDescription:
                'Example Domain. This domain is established to be used for illustrative examples in documents. You may use this domain in examples without prior coordination or asking for permission. – Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum sed eros iaculis congue. Aliquam erat volutpat. Aenean tortor sapien, porta ac interdum vel, interdum sed sapien.',
            url: 'https://example.com/',
            width: 600,
        };

        this.changeTitle = this.changeTitle.bind(this);
        this.changeMetaDescription = this.changeMetaDescription.bind(this);
        this.changeUrl = this.changeUrl.bind(this);
        this.changeWidth = this.changeWidth.bind(this);
    }

    changeTitle(e) {
        this.setState({
            title: e.target.value,
        });
    }

    changeMetaDescription(e) {
        this.setState({
            metaDescription: e.target.value,
        });
    }

    changeUrl(e) {
        this.setState({
            url: e.target.value,
        });
    }

    changeWidth(e) {
        this.setState({
            width: parseInt(e.target.value, 10),
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <h1>
                        React{' '}
                        <abbr title="Search Engine Result Page">SERP</abbr>{' '}
                        Preview
                    </h1>
                    <p>
                        Visualise how your website will appear in the Google
                        search results.
                    </p>
                    <div className="links">
                        <a href="https://github.com/Mesoptier/react-serp-preview">
                            Code and docs on GitHub
                        </a>
                    </div>
                </div>
                <div className="preview" style={{ width: this.state.width }}>
                    <SerpPreview
                        title={this.state.title}
                        metaDescription={this.state.metaDescription}
                        url={this.state.url}
                        width={this.state.width}
                    />
                </div>
                <div className="options">
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            type="text"
                            value={this.state.title}
                            onChange={this.changeTitle}
                        />
                    </div>
                    <div>
                        <label htmlFor="metaDescription">
                            Meta description
                        </label>
                        <textarea
                            id="metaDescription"
                            value={this.state.metaDescription}
                            onChange={this.changeMetaDescription}
                        />
                    </div>
                    <div>
                        <label htmlFor="url">URL</label>
                        <input
                            id="url"
                            type="text"
                            value={this.state.url}
                            onChange={this.changeUrl}
                        />
                    </div>
                    <div>
                        <label htmlFor="width">Width</label>
                        <input
                            id="width"
                            type="number"
                            step="50"
                            min="300"
                            max="800"
                            value={this.state.width}
                            onChange={this.changeWidth}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const container = document.getElementById('container');
ReactDOM.render(<Demo />, container);
