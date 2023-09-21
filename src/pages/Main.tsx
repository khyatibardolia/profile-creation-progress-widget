import React from "react";
import './Main.scss';
import { ProfileCreation } from "../components/ProfileCreation/ProfileCreation";

export const Main: React.FC = () => {
    return <div className={'main-container'}>
        <div className={'main-container__tasks-card'}>
            <div className={'main-container__tasks-card__content'}>
                <ProfileCreation title={'Lodgify Grouped Tasks'}/>
            </div>
        </div>
    </div>
}