import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                {/* Logo a la izquierda */}
                <a className="navbar-brand" href="#">
                    Start Bootstrap
                </a>

                {/* Botón para pantallas móviles */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menús a la derecha bien separados */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-white px-3" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary px-3" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary px-3" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary px-3" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;