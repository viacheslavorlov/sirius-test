import {useEffect, useRef, useState} from 'react';
import treeDots from '../../assets/three-horizontal-buttons-svgrepo-com.svg';
import {classNames} from '../../helpers/classNames';
import {Chips} from '../Chips/Chips';
import cls from './ChipsList.module.css';
import {ChipsType} from "../../types/ChipsType.ts";

interface ChipsListProps {
    className?: string;
    chipsItems: ChipsType[];
}

export const ChipsList = ({chipsItems, className}: ChipsListProps) => {
    const [visibleChildren, setVisibleChildren] = useState<ChipsType[]>([]);
    const [hiddenChildren, setHiddenChildren] = useState<ChipsType[]>([]);
    const [isVisible, setIsVisible] = useState(false);
    const parentRef = useRef<HTMLDivElement>(null);
    const elementWidth = parentRef.current?.offsetWidth;

    const sliceVisible = Math.floor(((elementWidth || 0) - 104) / 104); // рассчитано исходя из длины одного чипса

    const onChangeVisible = () => {
        setIsVisible(prevState => !prevState);
    };

    const setChips = () => {
        setVisibleChildren(chipsItems.slice(0, sliceVisible));
        setHiddenChildren(chipsItems.slice(sliceVisible));
    };

    useEffect(() => {
        setChips();
    }, [chipsItems, sliceVisible]);

    useEffect(() => {
        window.addEventListener('resize', setChips)
        return () => {
            window.removeEventListener('resize',setChips);
        };
    }, [chipsItems, sliceVisible]);

    return (
        <div className={cls.container}>
            <div ref={parentRef} className={classNames(cls.ChipsList, className)}>
                {visibleChildren.map((chip) => (
                    <Chips key={chip.name} chips={chip}/>
                ))}
                <button
                    onClick={onChangeVisible}
                    className={classNames(cls.PopupButton, hiddenChildren.length <= 0 ? cls.disabled : '')}
                    disabled={hiddenChildren.length === 0}
                >
                    <img src={treeDots} alt="button" className={cls.treeDots}/>
                </button>
            </div>
            {
                isVisible && hiddenChildren.length && <div className={cls.dropDown}>
					<div className={cls.dropDownInner}>
                        {hiddenChildren.map((chip) => (
                            <Chips key={chip.name} chips={chip}/>
                        ))}
					</div>
				
				</div>
            }
        </div>
    );
};
