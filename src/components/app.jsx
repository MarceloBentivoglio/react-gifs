import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

import giphy from 'giphy-api';


class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			gifs: [],
			selectedGifId: "xT9IgDEI1iZyb2wqo8"
		}
	}

	search = (query) => {
		giphy('grCsJjAA7wzITnPbOKFTjLZ8n9g4M43Q').search({
			q: query,
			rating: 'g',
			limit: 20,
		}, (err, res) => {
			this.setState({
				gifs: res.data
			})
		});
	}

	updateGifId = (id) => {
		this.setState({
			selectedGifId: id
		});
	}

	render() {
		return (
			<div>
				<div className="left-scene">
					<SearchBar search={this.search}/>
					<div className="selected-gif">
						<Gif id={this.state.selectedGifId} />
					</div>
				</div>
				<div className="right-scene">
					<GifList gifs={this.state.gifs} updateGifId={this.updateGifId} />
				</div>
			</div>
		);
	}
}

export default App;