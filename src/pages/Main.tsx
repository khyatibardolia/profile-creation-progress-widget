import React from "react";
import './Main.scss';
import {TasksProgressWidget} from "../components/TasksProgressWidget/TasksProgressWidget";
import {useFetchGroupTasksData} from "../hooks/useFetchGroupTasksData";
import {GroupTasks} from "../components/TasksProgressWidget/types";

export const Main: React.FC = () => {
    const {groupTasks} = useFetchGroupTasksData();

    return <div className={'main-container'}>
        {groupTasks.length && <div className={'main-container__tasks-card'}>
            <div className={'main-container__tasks-card__content'}>
                <TasksProgressWidget title={'Lodgify Grouped Tasks'} groupTasks={groupTasks as GroupTasks[]}/>
            </div>
        </div>}
    </div>
}