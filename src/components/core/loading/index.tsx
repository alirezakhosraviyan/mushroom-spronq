import React from "react";
import styles from './styles.module.css'

// Simple spinner for loading with a minimal animation
const Spinner: React.FC = (): JSX.Element => {
    return (
        <div className={styles['main-container']}>
            <h1>SpronQ</h1>
        </div>)
}

export default Spinner;
