import React from "react";
import {LatLngExpression} from 'leaflet'
import {Marker as LeafletMarker, Tooltip} from 'react-leaflet'
import {Popup} from "react-leaflet";

// Custom marker with custom popup component

export interface IProps {
    position: LatLngExpression,
    renderComponent: Function
}
const Marker: React.FC<IProps> = props => (
    <LeafletMarker position={props.position}>
        <Popup>
            {props.renderComponent()}
        </Popup>
    </LeafletMarker>
)


export default Marker;
