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
    const toggleRef = useRef(null)

    const mutationObserver = new MutationObserver(async (mutation) => {
        console.log(mutation)
        const toggleBtn = document.getElementById('toggle');
        if (toggleBtn.style.display === 'none') {
            setShowLinks(false)
        }
    })

    useEffect(() => {
        if (toggleRef.current) {
            console.log("node 감지:", toggleRef.current)
            mutationObserver.observe(toggleRef.current, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['style']
            })

            return () => {
                mutationObserver.disconnect();
            }
        }
    }, [])

    const [showLinks, setShowLinks] = useState(false)

    const menuRef = useRef()


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

    const setToggleClose = (event) => {
        if (event.matches) setShowLinks(false);
    }

    const handleMatchMedia = (match) => {
        if (match.addEventListener) {
            match.addEventListener('change', setToggleClose)

            // clean up
            return function cleanUp() {
                match.removeEventListener('change', setToggleClose)
            }
        }
        else {
            match.addListener(setToggleClose)

            // clean up
            return function cleanUp() {
                match.removeListener(setToggleClose)
            }
        }

    }

    useEffect(() => {
        const mediaWatcher = window.matchMedia("(min-width: 732px)")
        handleMatchMedia(mediaWatcher)
    }, [])


    useEffect(() => {
        getHeight();
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
                    <button className={style.toggle} onClick={() => setShowLinks(!showLinks)}>
                        <GiHamburgerMenu />
                    </button>

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