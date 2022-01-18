import React, {useEffect} from 'react';
import Map  from '../../../components/core/map/map'
import "leaflet/dist/leaflet.css"
import {Mushroom} from "../../../state/dto";
import MushroomDetail from "./mushroon-detail";
import getCenterOfMultipleGeolocation from '../../../utils/get-center-of-geolocations'


interface IProps {
    mushrooms: Mushroom[]
}

/*
* This Component is a container for main map component and makes it's data clear.
* */

const MushroomsMap: React.FC<IProps>  = ({ mushrooms }) => {
    let center: [number, number] =  mushrooms[mushrooms.length-1]?.latlng
    //Finds center of map depending on provided coordinates
    useEffect(() => {
        center = getCenterOfMultipleGeolocation(mushrooms.map(inp => inp.latlng))
    }, [])

    return (<Map
        center={center}
        // Would be better in config file or in ENV but for this project I think it's okay!
        mapUrl={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
        markers={mushrooms?.map(
            (inp: Mushroom) => ({
                position: inp.latlng, renderComponent: () => (
                    <MushroomDetail {...inp}/>)
            })
        )}
        zoom={17}
        style={{height: '100%'}}
    />);
}

export default MushroomsMap;
