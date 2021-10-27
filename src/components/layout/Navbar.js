import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch, Link, NavLink
} from "react-router-dom";


function Navbar({ isLoggedIn }) {
    function logout() {
        sessionStorage.clear();
        window.location.reload();
    }
    const status = isLoggedIn ? "Logout" : "Login/Register";
    return (
        <div class="wrapper">
            {/*<header class="header">
            </header>*/}

            {/* Sidebar*/}
            <aside class="sidebar">
                <nav class="navbar ">
                    <div class="row side-nav">
                        <NavLink className="navbar-brand" to="/"><button><i class="bi bi-card-heading"> Data detail</i>
                        </button>
                        </NavLink>
                        <NavLink activeClassName="side-nav-active" exact to='/'><button><i class="bi bi-person-lines-fill"><a>Users</a></i> </button></NavLink>
                        <NavLink activeClassName="side-nav-active " to='/topic1'><button><i class="bi bi-house-fill"><a>Topic1</a></i></button></NavLink>
                        <NavLink activeClassName="side-nav-active " to='/topic2'><button><i class="bi bi-book-half"><a>Topic2</a></i></button></NavLink>
                        <NavLink activeClassName="side-nav-active " to='/topic3'><button><i class="bi bi-briefcase-fill"><a>Topic3</a></i></button></NavLink>
                        <NavLink activeClassName="side-nav-active " to='/topic4'><button><i class="bi bi-building"><a>Topic4</a></i></button></NavLink>
                        {/*<NavLink activeClassName="side-nav-active" to='/users/add' ><button><i class="bi bi-plus-circle-fill"><a>Add User</a></i></button></NavLink>*/}
                        <NavLink activeClassName="side-nav-active" to='/login' onClick={() => { logout() }}><button><i class="bi bi-box-arrow-left"><a>{status}</a></i> </button></NavLink>
                    </div>

                </nav>




                <div class="line"></div>
                <div class="side-nav nav-foot">
                    <NavLink activeClassName="side-nav-active" exact to='/setting' ><button><i class="bi bi-gear-fill"></i> Setiing</button></NavLink>
                </div>
            </aside>




            <aside class="sidebar2">
                <nav class="navbar">
                    <i class="bi bi-house-fill"></i>
                    <i class="bi bi-calendar-date"></i>
                    <i class="bi bi-folder2-open"></i>
                    <i class="bi bi-bar-chart-line-fill"></i>
                    <i class="bi bi-envelope-open-fill"></i>
                </nav>
            </aside>

        </div>


    );
};

export default Navbar;