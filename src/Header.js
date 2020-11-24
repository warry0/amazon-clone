import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { responsiveFontSizes } from '@material-ui/core';

function Header() {
    return (
        <div className='header'>
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className ="header__optionLineOne">
                        Bonjour, identifier-vous
                    </span>
                    <span className ="header__optionLineTow">
                        Connexion
                    </span>
                </div>

                <div className="header__option">
                    <span className ="header__optionLineOne">
                        Retours
                    </span>
                    <span className ="header__optionLineTow">
                        et Commandes
                    </span>
                </div>

                <div className="header__option">
                    <span className ="header__optionLineOne">
                        Tester
                    </span>
                    <span className ="header__optionLineTow">
                        Prime
                    </span>
                </div> 
                <div className="header__optionBasket">
                    <span className="header__optionLineTwo header__basketCount">
                        99
                    </span>
                    <ShoppingCartIcon fontSize='large' />
                </div>
            </div>
        </div>
    )
}

export default Header
