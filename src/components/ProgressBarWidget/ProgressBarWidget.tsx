import React from "react";
import './ProgressBarWidget.scss';
import {ProgressBar} from "../ProgressBar/ProgressBar";

type Props = {
    title: string;
}

export const ProgressBarWidget: React.FC<Props> = ({title}: Props) => {

    return <div className={'progress-bar-widget-wrapper'}>
        <div className={'progress-bar-widget-wrapper__header'}>
            <span className={'progress-bar-widget-wrapper__header__title'}>{title}</span>
            <ProgressBar progressPercentage={"40"} />
        </div>

        <div className={'progress-bar-widget-wrapper__content'}>
            {/*Tasks list*/}
        </div>
    </div>
}