import React from 'react';
import Task from './task';
import {deleteTask} from '../Actions';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';


const TaskList = (props) => {
    const listOfDone = props.taskDone.map((task) => {
        return (
            <div key={task} onClick={()=>props.deleteTask(task)}>
            <Task isCompleted={false} task={task}></Task>
            </div>
        )
    })

    return (
        <div>
            {listOfDone}
        </div>
    );
} 

const mapStateToProps = (state) => {
    return state;
  }
  const mapDispatchToProps = (dispach) => {
    return bindActionCreators({
      deleteTask
    },dispach)
  }
export default connect(mapStateToProps,mapDispatchToProps)(TaskList);