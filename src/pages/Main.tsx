import React from "react";
import './Main.scss';
import {ProgressBarWidget} from "../components/ProgressBarWidget/ProgressBarWidget";

export const Main: React.FC = () => {
    return <div className={'main-container'}>
        <div className={'main-container__tasks-card'}>
            <div className={'main-container__tasks-card__content'}>
                <ProgressBarWidget title={'Lodgify Grouped Tasks'} />
            </div>
        </div>
    </div>
}