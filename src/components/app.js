import React from 'react';

import PostList from './postList'

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="component">
          <PostList />
			</div>
		);
	}
}

export default App;

