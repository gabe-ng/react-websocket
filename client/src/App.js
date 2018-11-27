import React, { Component } from 'react';
import Sockette from 'sockette';

import Table from './Table';

class App extends Component {
  state = {
    items: null,
    mps: null,
    data: []
  };

  // Establish Websocket connection
  ws = new Sockette("ws://localhost:7770", {
    onopen: e => console.log("Connected!", e),
    onmessage: e => {
      let message = null;
      try {
        message = JSON.parse(e.data);
      } catch (e) {
        console.log("malformed message");
      }
      if (message) {
        console.log(JSON.stringify(message));
        this.handleNewData(message);
      }
    }
  });

  // After component mounts, fetch num_items and messages_per_second
  // as well as fill in default data up to the number of items
  async componentDidMount() {
    const response = await fetch("/api/data");
    const json = await response.json();

    let defaultData = [];

    for (let i = 0; i < json.numberItems; i++) {
      defaultData.push({
        id: i,
        value: i,
        name: `test name - ${i}`
      });
    }

    this.setState({
      items: json.numberItems,
      mps: json.numberMessages,
      data: defaultData
    });
  }

  // Handles incoming data from websocket
  handleNewData = data => {
    // Slightly throttle set state so UI doesn't freeze
    setTimeout(() => {
      this.setState({
        data: [...this.state.data, data]
      });
    }, 100);
  };

  // Method to initiate websocket data flow
  fetchData = () => {
    this.ws.send("init");
  };

  // Method to cancel websocket data flow
  stopFetchData = () => {
    this.ws.send("close");
  };

  render() {
    return (
      <div>
        <div className="top-wrap">
          <h1 className="title">React Websocket Update</h1>
          <button onClick={this.fetchData} className="data-button">
            Fetch Data
          </button>
          <button onClick={this.stopFetchData} className="data-button">
            Stop Fetching
          </button>
        </div>
        <Table data={this.state.data} rows={this.state.items} />
      </div>
    );
  }
}

export default App;
