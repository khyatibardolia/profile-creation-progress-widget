import React from "react";
import styles from './ProgressBar.module.scss';

export type Props = {
    progressPercentage: number;
}

export const ProgressBar: React.FC<Props> = ({progressPercentage}: Props) => {
    return <div className={styles['wrapper']}>
        <div className={styles['wrapper__section']}>
            {progressPercentage > 0 &&
                <div data-testid="progress-percentage"
                     className={styles['wrapper__percentage']}
                     style={{width: `${progressPercentage}%`}}>
                    {progressPercentage}%
                </div>}
        </div>
    </div>
}