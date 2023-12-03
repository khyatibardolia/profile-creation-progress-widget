import React from "react";
import styles from './ProgressBar.module.scss';

export type Props = {
    progressPercentage: number;
}

export const ProgressBar: React.FC<Props> = React.memo(({progressPercentage}: Props) => {
    return <div className={styles['wrapper']}>
        <div className={styles['wrapper__section']}>
                <div data-testid="progress-percentage"
                     className={`${styles['wrapper__percentage']} ${styles['progress-percentage__zero']}`}
                     style={{width: progressPercentage > 5 ? `${progressPercentage}%` : '30px'}}>
                    {progressPercentage}%
                </div>
        </div>
    </div>
})