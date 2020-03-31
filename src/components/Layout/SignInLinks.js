import React from 'react'

const SignInLinks = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    New
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Find New Cars</a>
                    <a className="dropdown-item" href="#">Latest Cars</a>
                    <a className="dropdown-item" href="#">Popular Cars</a>
                    <a className="dropdown-item" href="#">Upcoming Cars</a>
                    <a className="dropdown-item" href="#">Offers & Discounts</a>
                </div>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    Used
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Find Used Cars</a>
                    <a className="dropdown-item" href="#">Find by Brand</a>
                    <a className="dropdown-item" href="#">Find by Location</a>
                    <a className="dropdown-item" href="#">Upcoming Cars</a>
                    <a className="dropdown-item" href="#">Offers & Discounts</a>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Sell</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Compare</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    News & Reviews
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Car News</a>
                    <a className="dropdown-item" href="#">Car Reviews</a>
                    <a className="dropdown-item" href="#">Car Videos</a>
                    <a className="dropdown-item" href="#">Write Review</a>
                </div>
            </li>
            <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    More
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Car Loan</a>
                    <a className="dropdown-item" href="#">EMI Calculator</a>
                    <a className="dropdown-item" href="#">Car Insurance</a>
                    <a className="dropdown-item" href="#">Ask Question</a>
                </div>
            </li>
            
            <form className="form-inline pull-right" action="#">
                <input className="form-control mr-sm-2" type="text" placeholder="Search Cars" />
                <button className="btn btn-success" type="submit"><i className="fa fa-search"></i> Search</button>
            </form>
        </ul>
    )
}

export default SignInLinks