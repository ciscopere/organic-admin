import {Fragment} from "react";

// import huertaImg from '../../assets/huerta.jpg'
import classes from './Header.module.css'

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <button>Cart</button>
        </header>
        {/* <div className={classes['main-image']}>
            <img src={huertaImg} alt='foto huerta'/>
        </div> */}
    </Fragment>
}

export default Header;