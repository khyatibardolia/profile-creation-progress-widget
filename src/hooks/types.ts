import {GroupTasks} from "../components/UserProfileCreationProgressWidget/types";

export interface InitialState {
    isLoading: boolean,
    groupTasks: GroupTasks[],
    hasError: boolean,
}