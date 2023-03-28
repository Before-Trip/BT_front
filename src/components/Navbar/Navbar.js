import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useRef, useState } from 'react';

import style from './Navbar.module.css'

const linkList = [
    {
        name: '메인',
        path: '/'
    },
    {
        name: '커뮤니티',
        path: '/JP/review/1'
    },
    {
        name: '글쓰기',
        path: '/JP/create'
    },
    {
        name: '로그인',
        path: '/account/login'
    },
]


function Navbar() {


    const [showLinks, setShowLinks] = useState(false)

    const menuRef = useRef()
    const toggleRef = useRef()
    const linkContainerRef = useRef()
    const getHeight = () => {
        if (showLinks) {
            const linkHeight = linkContainerRef.current.getBoundingClientRect().height
            menuRef.current.style.height = `${linkHeight}px`
        } else {
            menuRef.current.style.height = '0px';
        }
        // console.log(linkHeight)
    }

    const handleResize = () => {
        if (window.innerWidth > 732) {
            setShowLinks(false)
        }
        return
    }


    useEffect(() => {
        getHeight();
        window.addEventListener('resize', handleResize);
        console.log(showLinks)
        // return window.removeEventListener('resize', handleResize)
    }, [showLinks])


    return (
        <nav className={style.Navbar}>

            <header>
                <Link to='/'>
                    <div className={style.logo}>
                        <img src={process.env.PUBLIC_URL + '/assets/logo.png'} />
                    </div>
                </Link>
                <span className={style.btn_wrapper}>
                    <button>
                        <AiOutlineSearch />
                    </button>
                    {toggleRef && <button className={style.toggle} onClick={() => setShowLinks(!showLinks)}>
                        <GiHamburgerMenu />
                    </button>}

                </span>
            </header>

            <div className={showLinks ? `${style.menu} ${style.open}` : `${style.menu}`}
                ref={menuRef}>
                <ul ref={linkContainerRef}>
                    {linkList.map((link, index) =>
                    (<li key={index}>
                        <Link to={link.path}>{link.name}</Link>
                    </li>)
                    )}
                </ul>
            </div>

        </nav >
    )
}

export default Navbar