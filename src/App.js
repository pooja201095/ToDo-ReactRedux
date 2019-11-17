import React from 'react';
import TaskList from './Components/taskList';
import TaskDone from './Components/taskDone';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';
import {addTask, captureInput} from './Actions';

class App extends React.Component {
  handelClick = (e) => {
    e.preventDefault();
    if(this.props.task === '') {
      return;
    } else {
      this.props.addTask(this.props.task);
    }
    const form = document.getElementById('myForm');
    form.reset();
  }
  render () {
    return (
      <div className="ui container">
      <div className="ui raised very padded grid segment two column centered ">
        <div className="two column">
        <div className="ui center aligned header">
        <h1>TO DO APP</h1>
        </div>
        <div>
        <form id= "myForm" onSubmit={this.handelClick} className="ui form">
          <input type="text" placeholder="Enter a task" onChange={(e)=>this.props.captureInput(e.target.value)} />
        </form>
        </div>
        </div>
        <div className="three column centered row">
          <div className="column">
          <div className="ui center aligned header">TO DO</div>
          <TaskList/>
          </div>
          <div className="column">
          <div className="ui center aligned header">DONE</div>
          <TaskDone></TaskDone>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispach) => {
  return bindActionCreators({
    addTask,
    captureInput
  },dispach)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
