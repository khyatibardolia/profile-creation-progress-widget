import {GroupTasks, Tasks} from "../components/TasksProgressWidget/types";

export const calculateTasksProgress = (groupTasks: GroupTasks[]): number => {
    if (!groupTasks.length) {
        return 0;
    }

    let totalTasksValue = 0, checkedTaskValue = 0;

    groupTasks.forEach((group: GroupTasks) => {
        group.tasks.forEach((task: Tasks) => {
            if (task.checked) {
                checkedTaskValue += parseInt(task.value);
            }
            totalTasksValue += parseInt(task.value);
        });
    });

    return Math.round((checkedTaskValue * 100) / totalTasksValue);
}

export const checkIfAllGroupTasksAreChecked = (group: GroupTasks): boolean => {
    if(!group.tasks.length) {
        return false;
    }
    return group.tasks.every((task: Tasks) => task.checked);
}