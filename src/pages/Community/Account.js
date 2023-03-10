import { Outlet } from "react-router-dom"

function Account() {
    return (
        <div className='inner' style={{ backgroundColor: "transparent" }}>
            <section className='Account'>
                <Outlet />
            </section>
        </div>
    )
}

export default Account