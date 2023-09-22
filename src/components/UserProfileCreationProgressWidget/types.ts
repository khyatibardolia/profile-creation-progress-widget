export interface GroupTasks {
    name: string;
    tasks: Tasks[];
    expanded?: boolean;
}

export interface Tasks {
    description: string;
    value: number;
    checked: boolean;
}