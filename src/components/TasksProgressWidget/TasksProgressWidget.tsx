import React, {useEffect, useState} from "react";
import './TasksProgressWidget.scss';
import {ProgressBar} from "../ProgressBar/ProgressBar";
import {Accordion} from "../Accordion/Accordion";
import BookingFeaturesNotAllCheckedIcon from '../../assets/icons/booking-features-not-all-checked-icon.svg';
import {CheckBox} from "../CheckBox/CheckBox";
import {GroupTasks, Tasks} from "./types";

type Props = {
    title: string;
    groupTasks: GroupTasks[];
}

export const TasksProgressWidget: React.FC<Props> = ({title, groupTasks}: Props) => {

    const [groupTasksData, setGroupTasksData] = useState<GroupTasks[]>(groupTasks);

    useEffect(() => {
        // set expanded property to each task group in order to toggle it
        setGroupTasksData(groupTasks.map(
            (group: GroupTasks) => ({...group, expanded: false})
        ));
    }, [groupTasks]);

    const onAccordionToggle = (groupIndex: number) => {
        // create shallow copy of the state
        const updatedGroups = [...groupTasksData] as GroupTasks[];
        // Toggle the 'expanded' property of the group at the specified index
        updatedGroups[groupIndex].expanded = !updatedGroups[groupIndex].expanded;
        setGroupTasksData(updatedGroups);
    }

    const onCheckBoxToggle = (groupIndex: number, taskIndex: number) => {
        // create shallow copy of the state
        const updatedGroupTasks = [...groupTasksData] as GroupTasks[];
        // Toggle the 'checked' property of the group task at the specified task index
        updatedGroupTasks[groupIndex].tasks[taskIndex].checked = !updatedGroupTasks[groupIndex].tasks[taskIndex].checked;
        setGroupTasksData(updatedGroupTasks);
    }

    return <div className={'progress-bar-widget-wrapper'}>
        <div className={'progress-bar-widget-wrapper__header'}>
            <span className={'progress-bar-widget-wrapper__header__title'}>{title}</span>
            <ProgressBar progressPercentage={"40"}/>
        </div>

        <div className={'progress-bar-widget-wrapper__content'}>
            {groupTasksData.length && groupTasksData.map((groups: GroupTasks, groupIndex: number) =>
                <Accordion
                    key={groupIndex}
                    expanded={groups.expanded}
                    onAccordionToggle={() => onAccordionToggle(groupIndex)}
                    header={
                        <div className={'progress-bar-widget-wrapper__accordion-header'}>
                            <img src={BookingFeaturesNotAllCheckedIcon} alt={'clip-icon'}/>
                            <span>{groups.name}</span>
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
                />)}
        </div>
    </div>
}