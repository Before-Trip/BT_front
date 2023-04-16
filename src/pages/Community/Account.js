import { Link, Outlet } from "react-router-dom"

function Account() {
    return (
        <div className='Account'>
            <section className='Account__body'>
                <Link to='/'>
                    <img
                        src={process.env.PUBLIC_URL + '/assets/logo.png'}
                        alt='여행전날 로고' />
                </Link>
                <Outlet />
            </section >
        </div>
    )
}

export default Account