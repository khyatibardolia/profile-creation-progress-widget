import {GroupTasks} from "../components/TasksProgressWidget/types";

export interface InitialState {
    isLoading: boolean,
    groupTasks: GroupTasks[],
    hasError: boolean,
}