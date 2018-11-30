import React, { Component } from 'react';
import Toolbar from './components/Toolbar';
import Messages from './components/Messages';

class App extends Component {
  state = {
    messages: [
      {
        id: 1,
        subject:
          "You can't input the protocol without calculating the mobile RSS protocol!",
        read: false,
        starred: true,
        labels: ['dev', 'personal'],
      },
      {
        id: 2,
        subject:
          "connecting the system won't do anything, we need to input the mobile AI panel!",
        read: false,
        starred: false,
        selected: true,
        labels: [],
      },
      {
        id: 3,
        subject:
          'Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!',
        read: false,
        starred: true,
        labels: ['dev'],
      },
      {
        id: 4,
        subject: 'We need to program the primary TCP hard drive!',
        read: true,
        starred: false,
        selected: true,
        labels: [],
      },
      {
        id: 5,
        subject:
          'If we override the interface, we can get to the HTTP feed through the virtual EXE interface!',
        read: false,
        starred: false,
        labels: ['personal'],
      },
      {
        id: 6,
        subject: 'We need to back up the wireless GB driver!',
        read: true,
        starred: true,
        labels: [],
      },
      {
        id: 7,
        subject: 'We need to index the mobile PCI bus!',
        read: true,
        starred: false,
        labels: ['dev', 'personal'],
      },
      {
        id: 8,
        subject:
          'If we connect the sensor, we can get to the HDD port through the redundant IB firewall!',
        read: true,
        starred: true,
        labels: [],
      },
    ],
  };

  toggleStarred = message => {
    console.log('in toggle Starred...');
    console.log('message===>>', message);
    message.starred = !message.starred;
    const messages = [...this.state.messages];
    this.setState({ messages });
    // concat is making a copy of array and merging so not updating state directly
    // this.setState(this.state.messages.concat(message));
  };

  toggleSelected = message => {
    console.log('in toggle selected...');
    message.selected = !message.selected;
    this.setState(this.state.messages.concat(message));
  };

  markedRead = message => {
    console.log('in markedRead...');
    // message.read
    // this.setState(this.state.message.concat(message));
  };

  selectAll = () => {
    console.log('in select All...');
    // make a copy of messages and filter out selected
    // if all messages are selected, deselect all
    const messages = this.state.messages.map(el => {
      el.selected = true;
      return el;

      // const messages = this.state.messages.filter( el => el.selected = true)
    });
    this.setState({ messages });
  };

  deselectAll = () => {
    console.log('in deselect All...');
    const messages = this.state.messages.map(el => {
      el.selected = false;
      return el;
    });
  };

  selectedIndicator = () => {
    let totalMessageCnt = this.state.messages.length;
    let selectedAmt = this.state.messages.filter(message => message.selected)
      .length;

    let indicator = '';

    if (selectedAmt === totalMessageCnt) {
      indicator = '-check';
    } else if (selectedAmt === 0) {
      indicator = '';
    } else {
      indicator = '-minus';
    }

    return indicator;
  };

  isSelected = (selectAll, deselectAll) => {
    console.log('in isSelected...');
    let totalMessageCnt = this.state.messages.length;
    console.log('total # messages>>>', totalMessageCnt);
    let selectedAmt = this.state.messages.filter(message => message.selected)
      .length;
    console.log('selected # messages>>>', selectedAmt);

    if (selectedAmt === totalMessageCnt) {
      deselectAll();
    } else {
      selectAll();
    }

    // make a copy of messages and filter out selected
    // const messages = this.state.messages.filter(el => (el.selected = true));
    // console.log('messages selected-->', messages);
  };

  render() {
    return (
      <div className="App">
        <Toolbar
          selectAll={this.selectAll}
          markedRead={this.markedRead}
          isSelected={this.isSelected}
          selectedIndicator={this.selectedIndicator}
        />
        <Messages
          messages={this.state.messages}
          toggleStarred={this.toggleStarred}
          toggleSelected={this.toggleSelected}
        />
      </div>
    );
  }
}

export default App;
