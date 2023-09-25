import React, {useEffect, useState} from "react";
import styles from './UserProfileCreationProgressWidget.module.scss';
import {ProgressBar} from "../ProgressBar/ProgressBar";
import {Accordion} from "../Accordion/Accordion";
import BookingFeaturesNotAllCheckedIcon from '../../assets/icons/booking-features-not-all-checked-icon.svg';
import BookingFeaturesAllCheckedIcon from '../../assets/icons/booking-features-all-checked-icon.svg';
import {CheckBox} from "../CheckBox/CheckBox";
import {GroupTasks, Tasks} from "./types";
import {checkIfAllGroupTasksAreChecked, calculateTasksProgress} from "../../utils/groupTasks";

export type Props = {
    title: string;
    groupTasks: GroupTasks[];
}

export const UserProfileCreationProgressWidget: React.FC<Props> = ({title, groupTasks}: Props) => {

    const [groupTasksData, setGroupTasksData] = useState<GroupTasks[]>([]);
    const progressPercentage = calculateTasksProgress(groupTasksData);

    useEffect(() => {
        // set expanded property to each task group in order to toggle it
        setGroupTasksData(groupTasks.map(
            (group: GroupTasks) => ({...group, expanded: false})
        ));
    }, [groupTasks]);

    const onAccordionToggle = (groupIndex: number) => {
        // match the index and only open one accordion at a time
        setGroupTasksData((prevGroupTasksData: GroupTasks[]) =>
            prevGroupTasksData.map((group: GroupTasks, index: number) => (
                 {...group, expanded: index === groupIndex ? !group.expanded : false}
            ))
        )
    }

    const onCheckBoxToggle = (groupIndex: number, taskIndex: number) => {
        // create shallow copy of the state
        const updatedGroupTasks = [...groupTasksData] as GroupTasks[];
        // Toggle the 'checked' property of the group task at the specified task index
        updatedGroupTasks[groupIndex].tasks[taskIndex].checked = !updatedGroupTasks[groupIndex].tasks[taskIndex].checked;
        setGroupTasksData(updatedGroupTasks);
    }

    return <div className={styles['wrapper']}>
        <div className={styles['wrapper__header']}>
            <span className={styles['wrapper__header__title']}>
                {title}
            </span>
            <ProgressBar progressPercentage={progressPercentage}/>
        </div>

        <div className={styles['wrapper__content']}>
            {groupTasksData.length && groupTasksData.map((groups: GroupTasks, groupIndex: number) => {
                const isAllGroupTasksChecked = checkIfAllGroupTasksAreChecked(groups);

                return <Accordion
                    key={groupIndex}
                    expanded={groups.expanded}
                    onAccordionToggle={() => onAccordionToggle(groupIndex)}
                    header={
                        <div className={styles['wrapper__accordion-header']}>
                            <img src={isAllGroupTasksChecked ? BookingFeaturesAllCheckedIcon :
                                BookingFeaturesNotAllCheckedIcon} alt={'clip-icon'}/>
                            <span className={isAllGroupTasksChecked ?
                                `${styles['wrapper__accordion-header--green']}` : ''}>
                                {groups.name}
                            </span>
                        </div>
                    }
                    content={
                        groups.tasks.map((task: Tasks, taskIndex: number) =>
                            <CheckBox
                                key={taskIndex}
                                onToggleCheck={() => onCheckBoxToggle(groupIndex, taskIndex)}
                                text={task.description}
                                checked={task.checked}
                            />)
                    }
                />
            })
            }
        </div>
    </div>
}