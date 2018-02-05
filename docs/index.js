import * as React from 'react';
import * as ReactDOM from 'react-dom';

import SerpPreview from '../src/SerpPreview';

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'My cool page title',
            metaDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac vehicula odio. Duis quis rhoncus quam. Nullam ac velit nec neque auctor ullamcorper.',
            url: 'https://example.com/',
        };

        this.changeTitle = this.changeTitle.bind(this);
        this.changeMetaDescription = this.changeMetaDescription.bind(this);
        this.changeUrl = this.changeUrl.bind(this);
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

    render() {
        return (
            <React.Fragment>
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
                        <label htmlFor="metaDescription">Meta description</label>
                        <textarea
                            id="metaDescription"
                            value={this.state.metaDescription}
                            onChange={this.changeMetaDescription}
                        />
                    </div>
                    <div>
                        <label htmlFor="url">URL</label>
                        <input
                            type="text"
                            value={this.state.url}
                            onChange={this.changeUrl}
                        />
                    </div>
                </div>
                <div className="preview">
                    <SerpPreview
                        title={this.state.title}
                        metaDescription={this.state.metaDescription}
                        url={this.state.url}
                    />
                </div>
            </React.Fragment>
        );
    }
}

const container = document.getElementById('container');
ReactDOM.render(<Demo />, container);
