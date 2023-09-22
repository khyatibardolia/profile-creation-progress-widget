import React from "react";
import './ProgressBar.scss';

export type Props = {
    progressPercentage: number;
}

export const ProgressBar: React.FC<Props> = ({progressPercentage}: Props) => {
    return <div className={'progress-bar-wrapper'}>
        <div className={'progress-bar-wrapper__section'}>
            {progressPercentage > 0 &&
                <div data-testid="progress-percentage"
                     className={'progress-bar-wrapper__percentage'}
                     style={{width: `${progressPercentage}%`}}>
                    {progressPercentage}%
                </div>}
        </div>
    </div>
}