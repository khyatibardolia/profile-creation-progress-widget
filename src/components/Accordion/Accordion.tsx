import React, {ReactNode} from "react";
import styles from './Accordion.module.scss';
import ArrowUpIcon from '../../assets/icons/arrow-up-icon.svg';
import ArrowDownIcon from '../../assets/icons/arrow-down-icon.svg';

export type Props = {
    header: ReactNode;
    content: ReactNode;
    expanded: boolean | undefined;
    onAccordionToggle: () => void;
}

export const Accordion: React.FC<Props> = ({header, content, expanded, onAccordionToggle}: Props) => {
    return <div className={styles['wrapper']}>
        <div className={styles['wrapper__header']} onClick={onAccordionToggle}>
            {header}
            <div className={styles['wrapper__header__expand']}>
                <span>{!expanded ? 'Show' : 'Hide'}</span>
                <img src={expanded ? ArrowUpIcon : ArrowDownIcon} alt={'arrow-icon'} />
            </div>
        </div>
        {expanded && <div className={styles['wrapper__content']}>
            {content}
        </div>}
    </div>
}