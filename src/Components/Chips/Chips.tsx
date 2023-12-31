import {memo, useState} from 'react';
import {classNames} from '../../helpers/classNames';
import cls from './Chips.module.css';
import {ChipsType} from "../../types/ChipsType.ts";

interface ChipsProps {
    className?: string;
    chips: ChipsType;
}

export const Chips = memo((props: ChipsProps) => {
    const {
        className, chips
    } = props;

    const [isSelected, setIsSelected] = useState(false);

    const selected = isSelected ? cls.selected : '';

    const onSelectChips = () => {
        setIsSelected(prevState => !prevState);
    };

    return (
        <div
            onClick={onSelectChips}
            className={classNames(cls.Chips, className, selected)}
        >
            {chips.name}
        </div>
    );
});
