import React from 'react';

const Task = ({task, isCompleted}) => {
    return (
        <div className="ui center aligned segment" >
        {task}
        {isCompleted ? <i style={{float:"right"}} className="check green icon"></i> : <i style={{float:"right"}} className="trash red icon"></i>}
        </div>
    );
}

export default Task;