import styles from './SearchBar.module.css'
import { useState } from 'react';

const SearchBar = ({...rest}) => {

const [input, setinput] = useState("");


const onchangeHandler = (e) => {

const ev = e.target.value;
setinput(e);
console.log(ev);

}

    return (
        <div className = {styles.container} >
            <input onChange = {onchangeHandler} type="text" className = {styles.search_input} {...rest} placeholder = 'Search Coin' />
        </div>
    )
}

export default SearchBar
