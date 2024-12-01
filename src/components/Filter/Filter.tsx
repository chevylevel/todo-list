import { FC, memo } from "react";
import classes from './Filter.module.css';



import { useState } from 'react';
import { FloatingIndicator, UnstyledButton } from '@mantine/core';
import { FilterType } from "../../hooks/useTodo";

const data: { title: string, value: FilterType }[] = [
    { title: 'All', value: 'all' },
    { title: 'Completed', value: 'completed' },
    { title: 'Uncompleted', value: 'uncompleted' }
];

interface FilterProps {
    filter: FilterType;
    onFilterChange: (filter: FilterType) => void;
}

const Filter: FC<FilterProps> = ({ filter, onFilterChange }) => {
    const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
    const [controlsRefs, setControlsRefs] = useState<Record<FilterType, HTMLButtonElement | null>>({
        all: null, completed: null, uncompleted: null
    });
    const [active, setActive] = useState<FilterType>(filter);

    const setControlRef = (value: FilterType) => (node: HTMLButtonElement) => {
        controlsRefs[value] = node;
        setControlsRefs(controlsRefs);
    };

    const controls = data.map(item => (
        <UnstyledButton
            key={item.value}
            data-testid={`filter-select-${item.value}`}
            className={classes.control}
            ref={setControlRef(item.value)}
            onClick={() => {
                setActive(item.value)
                onFilterChange(item.value);
            }}
            mod={{ active: active === item.value }}
        >
            <span className={classes.controlLabel}>{item.title}</span>
        </UnstyledButton>
    ));

    return (
        <div className={classes.root} ref={setRootRef}>
            {controls}

            <FloatingIndicator
                target={controlsRefs[active]}
                parent={rootRef}
                className={classes.indicator}
            />
        </div>
    );
}

export default memo(Filter);
