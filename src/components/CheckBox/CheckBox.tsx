import React from "react";
import './CheckBox.scss';
import CheckedIcon from '../../assets/icons/checkbox-checked-icon.svg';
import UncheckedIcon from '../../assets/icons/checkbox-unchecked-icon.svg';

type Props = {
    onToggleCheck: () => void;
    text: string;
    checked: boolean;
}

export const CheckBox: React.FC<Props> = ({onToggleCheck, text, checked}: Props) => {
    return <div className={'checkbox-wrapper'} onClick={onToggleCheck}>
        <input type={'checkbox'} checked={checked}/>
        <img className={'checkbox-wrapper__checkbox-img'}
             src={checked ? CheckedIcon : UncheckedIcon}
             alt={'checkbox-icon'}
        />
        {text}
    </div>
}