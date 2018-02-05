import * as React from 'react';
import * as ReactDOM from 'react-dom';

import SerpPreview from '../src/SerpPreview';

const container = document.getElementById('container');
ReactDOM.render(
    <SerpPreview
        title="My cool page title"
        metaDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac vehicula odio. Duis quis rhoncus quam. Nullam ac velit nec neque auctor ullamcorper."
        url="http://example.com/"
    />,
    container
);
