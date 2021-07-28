import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Contact Book
                </Link>
                <div>
                    <button> <Link to="/contacts/add" className="btn btn-light ml-auto">
                        Create Contact
                    </Link>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;