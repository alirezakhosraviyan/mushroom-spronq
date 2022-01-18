import React from "react";
import styles from './style.module.css'
import Select, {SingleValue} from 'react-select';

export interface IPropsSelectBox {
    dataSource: {
        label: string,
        value: any
    }[],
    onItemSelected: Function,
    selected:{
        label: string,
        value: any
    }|null
    placeholder?: string
}

const SelectBox: React.FC<IPropsSelectBox> = (props): JSX.Element => {
    const onSelect = (selected: SingleValue<{label: string , value: any}>) => {
        props.onItemSelected(selected)
    }
    return (
        <div className={styles['main-container']}>
            <Select
                value={props.selected}
                onChange={selected => onSelect(selected)}
                options={props.dataSource}
                isClearable
                isSearchable
                placeholder={props.placeholder || 'Search or Select'}
            />
        </div>
    )
}

export default SelectBox;
