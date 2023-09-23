import React from "react";
import styles from './CheckBox.module.scss';
import CheckedIcon from '../../assets/icons/checkbox-checked-icon.svg';
import UncheckedIcon from '../../assets/icons/checkbox-unchecked-icon.svg';

export type Props = {
    onToggleCheck: () => void;
    text: string;
    checked: boolean;
}

export const CheckBox: React.FC<Props> = ({onToggleCheck, text, checked}: Props) => {
    return <label className={styles['wrapper']}>
        <input type={'checkbox'} checked={checked} onChange={onToggleCheck}/>
        <img className={styles['wrapper__checkbox-img']}
             src={checked ? CheckedIcon : UncheckedIcon}
             alt={'checkbox-icon'}
        />
        {text}
    </label>
}