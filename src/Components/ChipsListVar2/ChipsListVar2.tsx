import {classNames} from "../../helpers/classNames.ts";
import cls from './ChipsListVar2.module.css';
import {memo, useContext, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {ChipsType} from "../../types/ChipsType.ts";
import {ChipsVar2} from "../ChipsVar2/ChipsVar2.tsx";
import treeDots from "../../assets/three-horizontal-buttons-svgrepo-com.svg";
import {ContextChips} from "../../context/contextChips.ts";

interface ChipsListVar2Props {
    className?: string;
    chipses: ChipsType[];
}

export const ChipsListVar2 = memo((props: ChipsListVar2Props) => {
    const {
        className, chipses
    } = props;
    const {setListWidth, getListWidth, getChildrenWidth} = useContext(ContextChips)
    const listWidth = getListWidth();
    const childrenWidth = getChildrenWidth();
    console.log('listWidth, childrenWidth',listWidth, childrenWidth)
    const refList = useRef<HTMLDivElement>(null);
    const [firstInvisibleChips, setFirstInvisibleChips] = useState(chipses.length);
    const [visibleChildren, setVisibleChildren] = useState<ChipsType[]>([]);
    const [hiddenChildren, setHiddenChildren] = useState<ChipsType[]>([]);
    const [isVisible, setIsVisible] = useState(false);

    const setChips = () => {
        if (refList.current) {
            setListWidth(refList.current.offsetWidth)
            let contentWidth = 200
            for (let i = 0; i < childrenWidth.length; i++) {
                if (listWidth > contentWidth) {
                    contentWidth += childrenWidth[i]
                } else {
                    setFirstInvisibleChips(i)
                    break
                }
            }
        }
        setVisibleChildren(chipses.slice(0, firstInvisibleChips));
        setHiddenChildren(chipses.slice(firstInvisibleChips));
    };

    const onChangeVisible = () => {
        setIsVisible(prevState => !prevState);
    };

    useLayoutEffect(() => {
        setChips()
        window.addEventListener('resize', setChips)
        return () => {
            window.removeEventListener('resize', setChips)
        }
    }, [chipses, firstInvisibleChips, listWidth, childrenWidth]);


    useEffect(() => {
        setChips();
    }, []);

    useEffect(() => {
        setChips();
    }, [chipses, firstInvisibleChips, listWidth, childrenWidth, getChildrenWidth]);


    return (
        <div className={cls.container}>
            <div ref={refList} className={classNames(cls.ChipsList, className)}>
                {visibleChildren.map((chip, i) => (
                    <ChipsVar2
                        key={`chips-${i}`}
                        chips={chip}
                    />
                ))}
                <button
                    onClick={onChangeVisible}
                    className={cls.PopupButton}
                    disabled={hiddenChildren.length === 0}
                >
                    <img src={treeDots} alt="button" className={cls.treeDots}/>
                </button>
            </div>
            {isVisible && (
                <div className={cls.dropDown}>
                    <div className={cls.dropDownInner}>
                        {hiddenChildren.map((chip, i) => (
                            <ChipsVar2
                                key={`chips-${i}`}
                                chips={chip}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
});