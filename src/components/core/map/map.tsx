import React from "react";
import {MapContainer, TileLayer, MapContainerProps} from "react-leaflet";
import Marker, {IProps as MarkerInterface} from './marker';
import "leaflet/dist/leaflet.css"

import Leaflet from "leaflet";

import icon from '../../../assets/images/mushroom.png';
import icon2x from '../../../assets/images/mushroom-2x.png';


let DefaultIcon = Leaflet.icon({
    iconRetinaUrl: icon,
    iconUrl: icon2x,
});

Leaflet.Marker.prototype.options.icon = DefaultIcon;

interface IProps {
    center: [number, number],
    style?: MapContainerProps["style"]
    zoom: number,
    mapUrl: string,
    markers?: MarkerInterface[]
}

/*
* Custom Map layers
* */

const Map: React.FC<IProps> = props => {
    return (
        <MapContainer
            style={props.style}
            center={props.center}
            zoom={props.zoom}
            scrollWheelZoom
            doubleClickZoom
        >
            <TileLayer
                // Would be better in config or ENV but I guess for this assessment is okay
                attribution='&copy; <a href="https://www.spronq.com/">Spronq</a> contributors'
                url={props.mapUrl}
            />

            {props.markers?.map((marker, index) =>
                (<Marker
                    position={marker.position}
                    renderComponent={() => marker.renderComponent()}
                    key={index}
                />)
            )}

        </MapContainer>
    )
}

export default Map;
