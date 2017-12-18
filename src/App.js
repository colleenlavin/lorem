import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Collapse } from 'reactstrap';

class App extends Component {
  constructor() {
    super();

    // Initial state
    this.state = { open: false };

  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Accordion</h1>
        <ul>
          <li>
            <div className="title" onClick={this.toggle.bind(this)}>Item #1</div>
            <div className={"collapse" + (this.state.open ? ' in' : '')}>
              <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta enim in ultricies tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce malesuada a augue id varius. Suspendisse feugiat ut nisl ac consectetur. Duis tincidunt velit eu nunc tempus, vitae rhoncus quam sagittis. In auctor mi in sapien consectetur, ut tristique ex facilisis. Vestibulum sed bibendum nunc, sit amet ultrices tellus. Sed at faucibus tortor.</div>
            </div>
          </li>
          <li>
            <div className="title"  onClick={this.toggle.bind(this)}>Item #2</div>
            <div  className={"collapse" + (this.state.open ? ' in' : '')}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta enim in ultricies tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce malesuada a augue id varius. Suspendisse feugiat ut nisl ac consectetur. Duis tincidunt velit eu nunc tempus, vitae rhoncus quam sagittis. In auctor mi in sapien consectetur, ut tristique ex facilisis. Vestibulum sed bibendum nunc, sit amet ultrices tellus. Sed at faucibus tortor.</div>
          </li>
          <li>
            <div className="title"  onClick={this.toggle.bind(this)}>Item #3</div>
            <div className={"collapse" + (this.state.open ? ' in' : '')}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta enim in ultricies tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce malesuada a augue id varius. Suspendisse feugiat ut nisl ac consectetur. Duis tincidunt velit eu nunc tempus, vitae rhoncus quam sagittis. In auctor mi in sapien consectetur, ut tristique ex facilisis. Vestibulum sed bibendum nunc, sit amet ultrices tellus. Sed at faucibus tortor.</div>
          </li>
        </ul>
      </div>

    );
  }
}

export default App;
