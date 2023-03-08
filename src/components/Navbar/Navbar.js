import { Link, Outlet } from 'react-router-dom'
import style from './Navbar.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from 'react';

const linkList = [
    {
        name: '메인',
        path: '/'
    },
    {
        name: '커뮤니티',
        path: '/'
    },
    {
        name: '내 스케줄',
        path: '/'
    },
    {
        name: '로그인',
        path: '/account/login'
    },
]


function Navbar() {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <nav className={style.Navbar}>
            <header className={style.header}>
                <Link to='/' className={style.logo}>
                    <img src={process.env.PUBLIC_URL + '/assets/logo.png'} />
                </Link>

                <div className={style.btn_wrapper}>
                    <button className={style.search}>
                        <AiOutlineSearch />
                    </button>
                    <button className={style.toggle} onClick={() => setShowLinks(!showLinks)}>
                        <GiHamburgerMenu />
                    </button>
                </div>

                <div className={showLinks ? `${style.menu} ${style.open}` : `${style.menu}`}>
                    <ul>
                        {linkList.map((link, index) =>
                        (<li key={index}>
                            <Link to={link.path}>{link.name}</Link>
                        </li>)
                        )}
                    </ul>
                </div>
            </header>
        </nav>
    )
}

export default Navbar