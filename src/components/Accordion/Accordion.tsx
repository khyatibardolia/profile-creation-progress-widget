import React, {ReactNode} from "react";
import './Accordion.scss';
import ArrowUpIcon from '../../assets/icons/arrow-up-icon.svg';
import ArrowDownIcon from '../../assets/icons/arrow-down-icon.svg';

type Props = {
    header: ReactNode;
    content: ReactNode;
    expanded: boolean | undefined;
    onAccordionToggle: () => void;
}

export const Accordion: React.FC<Props> = ({header, content, expanded, onAccordionToggle}: Props) => {
    return <div className={'accordion-wrapper'}>
        <div className={'accordion-wrapper__header'} onClick={onAccordionToggle}>
            {header}
            <div className={'accordion-wrapper__header__expand'}>
                <span>{!expanded ? 'Show' : 'Hide'}</span>
                <img src={expanded ? ArrowUpIcon : ArrowDownIcon} alt={'arrow-icon'} />
            </div>
        </div>
        {expanded && <div className={'accordion-wrapper__content'}>
            {content}
        </div>}
    </div>
}