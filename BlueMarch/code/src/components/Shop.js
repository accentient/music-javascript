import React, { Component } from 'react';
import Search from './Search';
import TracksList from './TracksList';
import TabBar from './TabBar';
import GenreTab from './GenreTabBar';
import DATA from '../musicdata.json';
import Paper from 'material-ui/Paper';

class Shop extends Component {
    render() {
        return (
            <div className="searchpage-container">
                <SearchableMusicTable tracks={DATA} />
            </div>
        );
    }
}

const style = {
    height: "80%",
    width: "90%",
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

class SearchableMusicTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            show: true,
        }
    }

    handleUserInput(filterText) {
        this.setState({
            filterText: filterText,
            show: false
        });
    }

    render() {
        let selectedTracks = []
        if (this.state.filterText !== '') {
            selectedTracks = this.props.tracks.filter(track => track.title === this.state.filterText || track.artist === this.state.filterText || track.album === this.state.filterText);
        } else {
            selectedTracks = this.props.tracks;
        }
        return (
            <div>
                {/* <GenreTab style={{ backgroundColor: '#005BAB' }} /> */}
                <Paper style={style} zDepth={3}>
                    <Search filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} />
                    <TracksList tracks={selectedTracks} />
                </Paper>
            </div >
        )

    }

}


export default Shop;
