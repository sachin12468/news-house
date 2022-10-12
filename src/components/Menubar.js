import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Menubar = () => {
    const location = useLocation();
    return (
        <div className='mt-3 mx-5 navbar-expand-lg' >
            <ul className="list-group position-sticky top-0 start-0">
                <h4 className='text-center'>News Category</h4>
                <li className={`list-group-item ${location.pathname === "/" ? "active" : ""}`}><Link to="/">General News</Link></li>
                <li className={`list-group-item ${location.pathname === "/business" ? "active" : ""}`} ><Link to="/business">Sports News</Link></li>
                <li className={`list-group-item ${location.pathname === "/entertainment" ? "active" : ""}`} ><Link to="/entertainment">Science News</Link></li>
                <li className={`list-group-item ${location.pathname === "/health" ? "active" : ""}`} ><Link to="/health">Political News</Link></li>
                <li className={`list-group-item ${location.pathname === "/science" ? "active" : ""}`} ><Link to="/science">Fiction News</Link></li>
                <li className={`list-group-item ${location.pathname === "/sports" ? "active" : ""}`} ><Link to="/sports">Fiction News</Link></li>
                <li className={`list-group-item ${location.pathname === "/technology" ? "active" : ""}`} ><Link to="/technology">Fiction News</Link></li>

                <li className={`list-group-item ${location.pathname === "/science" ? "active" : ""}`} ><Link to="/science">Fiction News</Link></li>
                <li className={`list-group-item ${location.pathname === "/sports" ? "active" : ""}`} ><Link to="/sports">Fiction News</Link></li>
                <li className={`list-group-item ${location.pathname === "/technology" ? "active" : ""}`} ><Link to="/technology">Fiction News</Link></li>
            </ul>
        </div>
    )
}

export default Menubar
