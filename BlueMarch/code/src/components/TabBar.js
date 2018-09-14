import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import HomeSVG from 'material-ui/svg-icons/action/home';
import ShopSVG from 'material-ui/svg-icons/action/shopping-cart';
// import NewSVG from 'material-ui/svg-icons/av/fiber-new'
// import OfferSVG from 'material-ui/svg-icons/maps/local-offer';
import Shop from './Shop.js'
import Home from './Home.js'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


export default class TabsComponent extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			value: this.props.value
		}
	}

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    handleActive = (value) => {
        this.setState({
            value: value
        });
    };

    render() {
        return (
            <Tabs onChange={this.handleChange} onActive={this.handleActive} value={this.state.value}>
                <Tab style={{backgroundColor: '#005BAB'}}
                    icon={<HomeSVG />}
                    label="Home"
                    value="Home"
					containerElement={<Link to="/"/>}
					
                />
                <Tab style={{backgroundColor: '#005BAB'}}
                    icon={<ShopSVG />}
                    label="Shop"
                    value="Shop"
					containerElement={<Link to="/shop"/>}
					
                /> */}
            </Tabs>
        );
    }
}