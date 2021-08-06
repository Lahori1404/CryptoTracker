import React from 'react'
import Coincard from '../Coincard/Coincard'
import styles from './Coinsection.module.css'

const Coinsection = ({ items }) => {

   //{console.log(items)}
    return (
        <div className = {styles.coinSection}>
            
        {items.map(item => <Coincard props = {item}/>)}

        </div>
    )
}

export default Coinsection
