import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { Switch, Route } from 'react-router-dom'
import Home from "./components/Home";
import Offers from './components/Offers';
import Shop from './components/Shop';
import New from './components/New';
import AppBar from 'material-ui/AppBar';
import TabBar from './components/TabBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar style={{ backgroundColor: '#005BAB' }}
            title={<span><img src="https://pbs.twimg.com/profile_images/945616581488447488/E5d03Eve_400x400.jpg" alt="Landing page image featuring person wearing headphones" width="70" height="70" /></span>}
            //onTitleClick={}
          />
          <TabBar style={{ backgroundColor: '#005BAB' }} />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/offers' component={Offers} />
            <Route path='/shop' component={Shop} />
            <Route path='/new' component={New} />
          </Switch>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
