"use client";
import styles from './ChangeMode.module.css'
import { useContext } from 'react';
import { ThemeContext } from '@/app/context/Theme';
function ChangeMode() {
 const {mood,toggle}=useContext(ThemeContext)
    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icons}> 🌛 </div>
            <div className={styles.icons}> 🌚 </div>
            <div className={styles.switcher} style={mood==='light'?{left:'2px'}:{right:'2px'}}></div>
        </div>
    )
}

export default ChangeMode