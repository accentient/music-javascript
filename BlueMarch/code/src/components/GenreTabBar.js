import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

export default class TabsExampleControlled extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
        console.log(value);
    };

    render() {
        return (
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab style={{backgroundColor: '#005BAB'}} label="Jazz" value="jazz">
                </Tab>
                <Tab style={{backgroundColor: '#005BAB'}} label="Rock" value="rock">
                </Tab>
                <Tab style={{backgroundColor: '#005BAB'}} label="Pop" value="pop">
                </Tab>
                <Tab style={{backgroundColor: '#005BAB'}} label="Classical" value="classical">
                </Tab>
                <Tab style={{backgroundColor: '#005BAB'}} label="Country/Western" value="countrywestern">
                </Tab>
            </Tabs>
        );
    }
}