import React, { Component, Suspense } from 'react';
import ReactResizeDetector from 'react-resize-detector';
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import { DrawerAppContent } from '@material/react-drawer';
import NavDrawer from './NavDrawer'
import AppTopBar from './AppTopBar'
import Content from './Content'

import './App.scss';

class App extends Component {
  state = { dismissible: true, navOpen: false, selectedIndex: 0, selectedValue: null, selectedTitle: null };
  onResize = (width) => {
    // for smaller screens use the modal drawer
    if (width < 920) {
      this.setState({dismissible: true, navOpen: false});
    } else {
      // for bigger screens always display the drawer
      this.setState({dismissible: false, navOpen: true});
    }
  }
  onListItemClick = (e) => {
    let title = '';
    for (let child of e.target.children) {
      title += child.textContent;
    }
    this.setState({selectedValue: e.target.getAttribute('data-regex'), selectedTitle: title});
  }
  render() {
    return (
      <div className='drawer-container'>
        <ReactResizeDetector handleWidth onResize={this.onResize} />
        <Suspense fallback='loading'>
          <NavDrawer dismissible={this.state.dismissible} open={this.state.navOpen} selectedIndex={this.state.selectedIndex} onListItemClick={this.onListItemClick} />

          <DrawerAppContent className='drawer-app-content'>
            <AppTopBar navIcon={this.state.dismissible} onNavIconClick={() => this.setState({ navOpen: !this.state.navOpen })} />

            <TopAppBarFixedAdjust>
              <Content regex={this.state.selectedValue} title={this.state.selectedTitle} />
            </TopAppBarFixedAdjust>
          </DrawerAppContent>
        </Suspense>
      </div>
    );
  }
}

export default App;
