import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/App';
import registerServiceWorker from './module/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
