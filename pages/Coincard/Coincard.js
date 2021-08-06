import styles from './Coincard.module.css'

const Coincard = ({props}) => {
    return (
        <div className = {styles.cardContainer}>

<div className={styles.left_container}>
<h3>{props.market_cap_rank}</h3>
<div className = {styles.coinSpecs}>
<h3>{props.name}</h3><img className = {styles.coin_img} src={props.image} alt="" /></div>
</div>


<div className = {styles.middle_container}><h2>{props.symbol}</h2></div>

<div className={styles.right_container}>
<li>${props.current_price}</li>
<li>${props.total_volume.toLocaleString()}</li>
{props.price_change_percentage_24h < 0 ? (<li className = {styles.decrement}>
{props.price_change_percentage_24h.toFixed(2)}%</li>):
(<li className = {styles.increment}>{props.price_change_percentage_24h.toFixed()}%</li>)}
<li>Mkt Cap : ${props.market_cap.toLocaleString()}</li>
</div>
            
        </div>
    )}

export default Coincard
