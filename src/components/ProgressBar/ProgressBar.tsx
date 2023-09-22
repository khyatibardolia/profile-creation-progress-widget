import React from "react";
import './ProgressBar.scss';

type Props = {
    progressPercentage: number;
}

export const ProgressBar: React.FC<Props> = ({progressPercentage}: Props) => {
    return <div className={'progress-bar-wrapper'}>
        <div className={'progress-bar-wrapper__section'}>
            {progressPercentage > 0 &&
                <div className={'progress-bar-wrapper__percentage'} style={{width: `${progressPercentage}%`}}>
                    {progressPercentage}%
                </div>}
        </div>
    </div>
}