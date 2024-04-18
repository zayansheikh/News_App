import './App.css';
import React, { Component } from 'react'
import Navabr from './components/Navabr';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 50;

  state = {
    progress: 0
  }

  setProgress(progress){
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navabr/>
<LoadingBar
color='#f11946'
progress={this.state.progress}
/>
        <Routes>
        <Route exact path="/home" element={<News setProgress={setProgress}  key="home" pageSize={this.pageSize} country="us" category="general"/>}></Route>
        <Route exact path="/general" element={<News setProgress={setProgress}  key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route>
        <Route exact path="/business" element={<News setProgress={setProgress}  key="business" pageSize={this.pageSize} country="us" category="business"/>}></Route>
        <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/>}></Route>
        <Route exact path="/health" element={<News setProgress={setProgress}  key="health" pageSize={this.pageSize} country="us" category="health"/>}></Route>
        <Route exact path="/science" element={<News setProgress={setProgress}  key="science" pageSize={this.pageSize} country="us" category="science"/>}></Route>
        <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" pageSize={this.pageSize} country="in" category="sports"/>}></Route>
        <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" pageSize={this.pageSize} country="us" category="technology"/>}></Route>
        {/* <Route exact path="/us" element={<News setProgress={setProgress}  key="us" pageSize={this.pageSize} country="us"/>}></Route>
        <Route exact path="/in" element={<News setProgress={setProgress}  key="in" pageSize={this.pageSize} country="in"/>}></Route>
      <Route exact path="/ae" element={<News setProgress={setProgress}  key="ae" pageSize={this.pageSize} country="ae"/>}></Route> */}
        </Routes>
        </Router>
      </div>
    )
  }
}




