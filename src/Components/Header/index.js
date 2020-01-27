import React from 'react';
import styles from './styles';

const header = (props) => {
    return(
        <div style={styles.headerContainer}>
            <div style={styles.iconContainer}>
                <button style={styles.button} onClick={()=>{props.clickListener()}}>
                    Menu
                </button>
            </div>
            <div style={styles.titleContainer}>
                <h1>Title</h1>
            </div>
        </div>
    )
}

export default header