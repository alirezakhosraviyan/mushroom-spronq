import React from "react";
import {Mushroom} from "../../../state/dto";
import styles from './styles/mushrooms-detail.module.css'
import {Color, Spots} from '../../../state/dto'

/* This component will be rendered as the popup layout on the map */

const MushroomDetail: React.FC<Mushroom> = (props): JSX.Element => {
    return (
        <div className={styles['main-container']}>
            <img height={100} width={'100%'}
                 src={'https://images.unsplash.com/photo-1543904856-8257e34283d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTE0NTR8MHwxfHNlYXJjaHwyfHxtdXNocm9vbXxlbnwwfHx8fDE2NDI0OTM2MjM&ixlib=rb-1.2.1&q=80&w=200'}/>
            <h3>{props.name}</h3>
            <div> Color : <strong>{Color[props.color]}</strong></div>
            <div>Spot : <strong>{Spots[props.spots]}</strong></div>
        </div>
    )
}

export default MushroomDetail;
