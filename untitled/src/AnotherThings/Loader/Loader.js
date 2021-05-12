import React from "react";
import styles from './loader.module.css'


const Loader = () =>{
    return(
        <div>
            <div className={styles.preloader}>
                <div className={styles.spinner}>

                </div>
            </div>
        </div>
    );
}

export default Loader