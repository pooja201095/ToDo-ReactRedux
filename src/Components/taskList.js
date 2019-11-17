import React from 'react';
import Task from './task';
import {removeTask} from '../Actions';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';


const TaskList = (props) => {
    const listOfTasks = props.taskList.map((task) => {
        return (
            <div key={task} onClick={()=>props.removeTask(task)}>
            <Task isCompleted={true} task={task}></Task>
            </div>
        )
    })

    return (
        <div>
            {listOfTasks}
        </div>
    );
} 

const mapStateToProps = (state) => {
    return state;
  }
  
  const mapDispatchToProps = (dispach) => {
    return bindActionCreators({
      removeTask
    },dispach)
  }
export default connect(mapStateToProps,mapDispatchToProps)(TaskList);