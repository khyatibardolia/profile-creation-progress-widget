import {GroupTasks} from "../components/UserProfileCreationProgressWidget/types";

export const groupTasksMock: GroupTasks[] = ([
    {
        name: 'Group1',
        tasks: [
            { description: 'Task1', value: 10, checked: false },
            { description: 'Task2', value: 5, checked: true },
        ],
        expanded: false,
    },
    {
        name: 'Group2',
        tasks: [{ description: 'Task3', value: 20, checked: true }],
        expanded: true,
    },
])