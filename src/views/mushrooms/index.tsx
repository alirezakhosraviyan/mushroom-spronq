import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../state';
import {RootState} from '../../state/reducers';
import {Color, Mushroom, Spots} from "../../state/dto";
import styles from './styles.module.css'
import MushroomsFilters from "./components/mushrooms-filters";
import MushroomsMap from "./components/mushrooms-map";
import Spinner from "../../components/core/loading";
import {IPropsSelectBox as selectBoxSingleInterface } from '../../components/core/select-box'

/* This Container is will wraps our single view in our application and contains two parts:
*
*   1) Map view with filters components:
*       . Map Component
*       . Filters Component
*       . Detail Component
*   2) Loading spinner Component
*
*  */

const Mushrooms: React.FC = (): JSX.Element => {

    // First Load Data from database (the fake-data you had provided)
    const allMushroomsGlobalState = useSelector((state: RootState) => state.mushrooms)
    const dispatch = useDispatch();
    const {getAllMushrooms} = bindActionCreators(actionCreators, dispatch)

    // Fetch all mushrooms
    useEffect(() => {
        getAllMushrooms()
    }, []);

    // As a container, storing selected items in select-boxes
    const [selectedColor, setSelectedColor] = useState<selectBoxSingleInterface['selected']>(null)
    const [selectedSpot, setSelectedSpot] = useState<selectBoxSingleInterface['selected']>(null)

    // get filtered data
    const getMushroomDataSource = (): Mushroom[] => {
        let mushroomDataSource = allMushroomsGlobalState.data || []
        if (selectedColor) {
            mushroomDataSource = mushroomDataSource.filter(item => item.color === parseInt(selectedColor?.value))
        }

        if (selectedSpot){
            mushroomDataSource = mushroomDataSource.filter(item => item.spots === parseInt(selectedSpot?.value))
        }
        return mushroomDataSource
    }

    // Spots are filtering when a color selects
    const getSpotsDataSource = (): Mushroom[] => {
        let mushroomDataSource = allMushroomsGlobalState.data || []
        if (selectedColor) {
            mushroomDataSource = mushroomDataSource.filter(item => item.color === parseInt(selectedColor?.value))
        }
        return mushroomDataSource
    }


    const getColorsList = (): selectBoxSingleInterface['dataSource'] => {
        const colors: Color[] = Array.from(new Set<Color>(allMushroomsGlobalState.data?.map(item => item.color)))

        return colors.map(item => ({
            label: Color[item],
            value: item
        }))
    }

    const getSpotsList = (): selectBoxSingleInterface['dataSource'] => {
        const spots: Spots[] = Array.from(new Set<Spots>(getSpotsDataSource().map(item => item.spots)))

        return spots.map(item => ({
            label: Spots[item],
            value: item
        }))
    }

    const changeColor = (color: selectBoxSingleInterface['selected']): void => {
        setSelectedColor(color)
        setSelectedSpot(null)
    }

    // Renders final JSX component after conditions checks
    const renderMushroomView = (): JSX.Element => {
        return (!allMushroomsGlobalState.isLoading ?
            <div className={styles['main-container']}>
                <MushroomsMap mushrooms={getMushroomDataSource()} />

                <div className={styles['mushrooms-filters']}>
                <MushroomsFilters
                    selectedColor={selectedColor}
                    selectedSpot={selectedSpot}
                    colors={getColorsList()}
                    spots={getSpotsList()}
                    colorFilter={(color: selectBoxSingleInterface['selected']) => changeColor(color)}
                    spotFilter={(spot: selectBoxSingleInterface['selected']) => setSelectedSpot(spot)}
                />
                </div>
            </div>
            :
            <Spinner/>)
    }
    return renderMushroomView();

}

export default Mushrooms;
