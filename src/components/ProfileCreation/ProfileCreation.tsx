import React from "react";
import './ProfileCreation.scss';
import { ProgressBarWidget } from "../ProgressBarWidget/ProgressBarWidget";

type Props = {
    title: string;
}

export const ProfileCreation: React.FC<Props> = ({title}: Props) => {
    return <div className={'profile-creation-wrapper'}>
        <span>{title}</span>
        <ProgressBarWidget/>
    </div>
}