import React from "react";
import './ProgressBar.scss';

type Props = {
    progressPercentage: string;
}

export const ProgressBar: React.FC<Props> = ({progressPercentage}: Props) => {
    return <div className={'progress-bar-wrapper'}>
        <div className={'progress-bar-wrapper__section'}>
            <div className={'progress-bar-wrapper__percentage'} style={{width: `${progressPercentage}%`}}>
                {progressPercentage}%
            </div>
        </div>
    </div>
}