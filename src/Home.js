import React from 'react'
import './Home.css'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from './Search';

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerRight">
                    <div>Gmail</div>
                    <div>Images</div>
                    <AppsIcon className='apps' />
                    <AccountCircleIcon className='profile' />
                </div>
            </div>
            <div className="home__body">
                <div className='home__imgField'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="Google" />
                </div>

                <div className='head__inputContainer'>
                    <Search />
                </div>
            </div>
            <div className="footer">
                <div className="footer__row1"><div>India</div></div>
                <div className="footer__row2">
                    <div className="footer__left">
                        <div>about</div>
                        <div>advertising</div>
                        <div>business</div>
                        <div>how search works</div>
                    </div>
                    <div className="footer__right">
                        <div>privacy</div>
                        <div>terms</div>
                        <div>settings</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home