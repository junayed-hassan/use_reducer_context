export default function tasksReducer(tasks, action) {
    const {type, payload} = action;

    switch (type) {
        case "ADD_TASK":{
            return [
                ...tasks,
                payload,
            ]
        }

        case "UPDATE_TASK":{
            return tasks.map(task => {
                if (task.id === payload.id) {
                    return payload
                } else {
                    return task
                }
            })
        }
        case "DELETE_TASK":{
            return tasks.filter((t) => t.id !== payload)
        }
        case "DELETE_ALL":{
            return []
        }
                
        default:
            break;
    }
    
}
