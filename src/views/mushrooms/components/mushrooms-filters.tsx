import React from "react";
import { IPropsSelectBox as selectBoxInterface } from '../../../components/core/select-box'
import SelectBox from "../../../components/core/select-box";
import styles from  './styles/mushrooms-filters.module.css'

interface IMushroomsFiltersProps {
    colors: selectBoxInterface['dataSource']
    spots: selectBoxInterface['dataSource']
    colorFilter: Function
    spotFilter: Function,
    selectedColor:selectBoxInterface['selected'],
    selectedSpot:selectBoxInterface['selected'],
}
/*
* This component contains all filters we need in out application
* */
const MushroomsFilters: React.FC<IMushroomsFiltersProps> = (props): JSX.Element => {
    return (
        <div className={styles['main-container']}>
            <SelectBox
                selected={props.selectedColor}
                dataSource={props.colors}
                onItemSelected={(item: string) => props.colorFilter(item)}
                placeholder={'Search or Select Colors'}
            />
            <SelectBox
                selected={props.selectedSpot}
                dataSource={props.spots}
                onItemSelected={(item: string) => props.spotFilter(item)}
                placeholder={'Search or Select Spots'}
            />
        </div>
    )
}

export default MushroomsFilters;
