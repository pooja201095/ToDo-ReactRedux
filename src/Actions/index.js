export const addTask = (taskToAdd) => {
    return  {
        type:'Add_Task',
        payload:taskToAdd
    }
}

export const removeTask = (taskToRemove) => {
    return {
        type:'Remove_Task',
        payload:taskToRemove
    }
}

export const captureInput = (inputText) => {
    return {
        type:'Capture_Input',
        payload:inputText
    }
}

export const deleteTask = (taskToDelete) => {
    return {
        type:'Delete_Task',
        payload:taskToDelete
    }
}


