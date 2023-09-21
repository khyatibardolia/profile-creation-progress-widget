import React from "react";
import './ProgressBarWidget.scss';
import {ProgressBar} from "../ProgressBar/ProgressBar";
import {Accordion} from "../Accordion/Accordion";
import BookingFeaturesNotAllCheckedIcon from '../../assets/icons/booking-features-not-all-checked-icon.svg';
import {CheckBox} from "../CheckBox/CheckBox";

type Props = {
    title: string;
}

export const ProgressBarWidget: React.FC<Props> = ({title}: Props) => {

    const onAccordionToggle = () => {
    }
    const onCheckBoxToggle = () => {
    }

    return <div className={'progress-bar-widget-wrapper'}>
        <div className={'progress-bar-widget-wrapper__header'}>
            <span className={'progress-bar-widget-wrapper__header__title'}>{title}</span>
            <ProgressBar progressPercentage={"40"}/>
        </div>

        <div className={'progress-bar-widget-wrapper__content'}>
            <Accordion
                header={
                    <div className={'progress-bar-widget-wrapper__accordion-header'}>
                        <img src={BookingFeaturesNotAllCheckedIcon} alt={'clip-icon'}/>
                        <span>title</span>
                    </div>
                }
                content={
                    <CheckBox
                        onToggleCheck={onCheckBoxToggle}
                        text={'task1'}
                        checked={false}
                    />
                }
                expanded={true}
                onAccordionToggle={onAccordionToggle}/>
        </div>
    </div>
}