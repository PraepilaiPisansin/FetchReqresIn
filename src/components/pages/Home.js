import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import SearchBox from "./SearchBox";
import Popup from '../layout/Popup';
import AddUser from "../users/AddUser";
function Home() {
    const [data, setData] = useState([{}]);
    //add toggle
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    //token
    const token = sessionStorage.getItem('token');
    const [searchTerm, setSearchTerm] = useState(() => {
        return ""
    })
    const searchUser = (e) => {
        setSearchTerm(prevState => console.log(e.target.value))
    };
    useEffect(() => {
        loadUsers();
    }, []);
    async function loadUsers(updated) {
        if (sessionStorage.getItem('firstTime') == 1) {
            const result = await axios.get("https://reqres.in/api/users", {
                headers: {
                    Authorization: 'Bearer' + token
                }
            });
            setData(result.data.data);
            sessionStorage.setItem('firstTime', 0)
            sessionStorage.setItem('data', JSON.stringify(result.data.data))
        }
        else if (updated != null) {
            setData(updated);
            sessionStorage.setItem('data', JSON.stringify(updated))
        }
        else {
            setData(JSON.parse(sessionStorage.getItem('data')));
        }
    };

    const deleteUser = async id => {
        try {
            const res = await axios.delete(`https://reqres.in/api/users/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
            if (res.status == 204) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].id == id) {
                        id = i;
                        break;
                    }
                }
                if (data[i] != null && data[i] != undefined)
                    await delete (data[id]);
                const filtered = data.filter(function (el) {
                    return el != null;
                });
                loadUsers(filtered)
            }
        }
        catch (e) {
            alert(e.message);
        }

    };
    return (
        <main class="main">
            <div class="wrap-bar mb-3">
                <div class="row">
                    <div class="col-2">
                        <h5>Users</h5>
                    </div>
                    <div class="col-10 text-right">
                        <SearchBox searchUser={searchUser}></SearchBox>
                    </div>
                </div>



            </div>
            <div class="filter-wraper mb-3">
                <div class="row">
                    <div class="col-9">
                        <button >All</button>
                        <button >Men</button>
                        <button >Women</button>
                    </div>

                    <div class="col-3 grid-lish">
                        <i class="bi bi-grid-3x2-gap-fill"></i>
                        <i class="bi bi-layout-sidebar"></i>
                    </div>
                </div>


            </div>


            <div class='btn-flex'>
                <input
                    type="button"
                    value="Add User"
                    onClick={togglePopup}
                />
                {isOpen && <Popup
                    content={<>
                        <AddUser />
                    </>}
                    handleClose={togglePopup}
                />}
            </div>

            <div class="scrollable">
                {data?.map((user, i) =>
                    <div class="products-wrap">
                        <div class="products">

                            <p class="products-id"><i class="bi bi-star-fill"></i> <a>{user.id}</a></p>

                            <img src={user.avatar} />

                            <p class="products-name">{user.first_name + " " + user.last_name}</p>
                            <p class="products-email mt-2 mb-4"><i class="bi bi-envelope"></i> {user.email}</p>
                            {user.job}

                            <div class="row btn-custom">
                                
                                     
                                
                                <button class="col-6" style={{
                                    borderRadius
                                        : '0 0 0 10px', borderRight: '1px solid'
                                }}>
                                    <Link
                                        to={`/users/edit/${user.id}`}
                                    >
                                        <i class="bi bi-pencil-square"></i><a> Edit</a>
                                    </Link></button>
                                <button class="col-6" style={{
                                    borderRadius
                                        : '0 0 10px 0'
                                }}
                                    onClick={() => {
                                        const confirm = window.confirm("Confirm Delete");
                                        if (confirm == true) {
                                            deleteUser(user.id);
                                        }
                                    }}><i class="bi bi-trash-fill"></i> Delete</button>
                            </div>
                        </div>


                    </div>
                )
                }


            </div>


        </main>

    );
};
export default Home;