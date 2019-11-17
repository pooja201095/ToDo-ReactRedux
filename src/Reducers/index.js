
import {combineReducers} from 'redux';

const taskReducer = (taskList=[],action) => {
    if(action.type === 'Add_Task') {
        return [...taskList, action.payload]
    } else if(action.type === 'Remove_Task') {
        return taskList.filter((task)=>{return task !== action.payload})
    } else {
        return taskList;
    }
}
const removeTaskReducer = (taskDone=[],action) => {
    if(action.type === 'Remove_Task') {
        return [...taskDone, action.payload]
    } else if (action.type === 'Delete_Task') {
        return taskDone.filter((task)=>{return task !== action.payload})
    } else {
        return taskDone;
    }
}
 const captureInput = (task = '', action) => {
     if(action.type === 'Capture_Input') {
         return task=action.payload;
     } else {
         return task;
     }
 }


const rootReducer = combineReducers({
    taskList:taskReducer,
    taskDone:removeTaskReducer,
    task:captureInput
})

export default rootReducer;