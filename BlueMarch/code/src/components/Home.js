import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TabBar from './TabBar';

const styles = {
    padding: 50,
    margin: 50,
}

class Home extends Component {

    GridListExampleComplex() {
        return (
		
		
            <div>
                <Card style={styles}>
                    <CardMedia overlay={
                        <CardTitle 
                            title="We are QA Music" 
                            subtitle="We host an expansive and diverse range of music available as CD and MP3 download. 
                            Browse our catologue and be inspired." />
                    }>
                        <img src="https://wallpaperstock.net/woman-face-music-abstract-wallpapers_41698_1920x1080.jpg" href="/shop" width="50" height="400" alt="" />
                    </CardMedia>
                </Card>
            </div>
        );
    }
        //                 <CardTitle title="Shop" subtitle="Browse all products" />
        //                 <CardText>
        //                     Browse through all the available MP3 and CD products
        //                     available to purchase and download through our online store
        //          </CardText>
        //                 <CardActions>
        //                     <FlatButton label="Go Shopping!" />
        //                 </CardActions>
        //             </Card>
        //         </div>
        //         <div>
        //             <Card style={styles}>
        //                 <CardMedia
        //                     overlay={<CardTitle title="New" subtitle="Browse New items" />}
        //                 >
        //                     <img src="https://explorebuxton.co.uk/wp-content/uploads/2014/05/band-live-graphic.jpg" href="/new" width="50" height="400" alt="" />
        //                 </CardMedia>

        //                 <CardTitle title="New" subtitle="Browse New items" />
        //                 <CardText>
        //                     See all new items to the store available to purchase
        //          </CardText>
        //                 <CardActions>
        //                     <FlatButton label="View New" />
        //                 </CardActions>

        //         </Card>
        //         </div >


        //         <div>
        //             <Card style={styles}>
        //                 <CardMedia
        //                     overlay={<CardTitle title="Offers" subtitle="Save money with offers" />}
        //                 >
        //                     <img src="http://newseasoncc.org/wp-content/uploads/2014/02/music-arts-media-banner.jpg" href="/offers" width="50" height="300" alt="" />
        //                 </CardMedia>

        //                 <CardTitle title="Offers" subtitle="Save money with offers" />
        //                 <CardText>
        //                     Save some ££ with B.O.G.O.F, 50% discount and multibuy offers!
        //  </CardText>
        //                 <CardActions>
        //                     <FlatButton label="Go Saving!" />
        //                 </CardActions>
        //             </Card >
        //         </div>

        //     </div>


    render() {
        return (
            <div className="App">
                <this.GridListExampleComplex />
            </div>

        );
    }
}

export default Home;