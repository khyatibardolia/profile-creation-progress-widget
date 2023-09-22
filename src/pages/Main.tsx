import React from "react";
import './Main.scss';
import {UserProfileCreationProgressWidget} from "../components/UserProfileCreationProgressWidget/UserProfileCreationProgressWidget";
import {useFetchGroupTasksData} from "../hooks/useFetchGroupTasksData";
import {GroupTasks} from "../components/UserProfileCreationProgressWidget/types";

export const Main: React.FC = () => {
    const {groupTasks, isLoading, hasError} = useFetchGroupTasksData();

    return <div className={'main-container'}>
        {isLoading && <span>Loading...</span>}

        {hasError && <span className={'main-container__error-text'}>
            Something went wrong, Please try again later!
        </span>
        }

        {!isLoading && groupTasks?.length > 0 &&
            <div className={'main-container__tasks-card'}>
                <div className={'main-container__tasks-card__content'}>
                    <UserProfileCreationProgressWidget
                        title={'Lodgify Grouped Tasks'}
                        groupTasks={groupTasks as GroupTasks[]}
                    />
                </div>
            </div>
        }
    </div>
}