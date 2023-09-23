import React from "react";
import styles from './Main.module.scss';
import {UserProfileCreationProgressWidget} from "../../components/UserProfileCreationProgressWidget/UserProfileCreationProgressWidget";
import {useFetchGroupTasksData} from "../../hooks/useFetchGroupTasksData";

export const Main: React.FC = () => {
    const {groupTasks, isLoading, hasError} = useFetchGroupTasksData();

    return <div className={styles['container']}>
        {isLoading && <span>Loading...</span>}

        {hasError && <span className={styles['container__error-text']}>
            Something went wrong, Please try again later!
        </span>
        }

        {!isLoading && groupTasks?.length > 0 &&
            <div className={styles['container__tasks-card']}>
                <div className={styles['container__tasks-card__content']}>
                    <UserProfileCreationProgressWidget
                        title={'Lodgify Grouped Tasks'}
                        groupTasks={groupTasks}
                    />
                </div>
            </div>
        }
    </div>
}