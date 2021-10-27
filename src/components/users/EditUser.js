import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = (props) => {
    let history = useHistory();
    const { id } = useParams();
    const [data, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
    });
    const token = sessionStorage.getItem('token');
    const authAxios = axios.create({
        baseURL: "https://reqres.in/api",
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
    const { first_name, last_name, email } = data;
    const onInputChange = e => {
        setUser({ ...data, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await authAxios.put('https://reqres.in/api/users/${id}', data);

        window.confirm("Updated Success")
        history.push("/");
    };

    const loadUser = () => {
        const temp_data = JSON.parse(sessionStorage.getItem('data'));
        var temp;
        for (var i = 0; i < temp_data.length; i++) {
            if (temp_data[i].id == id) {
                temp = i;
                break;
            }
        }
        setUser(temp_data[temp]);
    };
    function updateUser() {
        const temp_data = JSON.parse(sessionStorage.getItem('data'));
        var temp;
        for (var i = 0; i < temp_data.length; i++) {
            if (temp_data[i].id == id) {
                temp = i;
                break;
            }
        }
        temp_data[temp].first_name = data.first_name;
        temp_data[temp].last_name = data.last_name;
        temp_data[temp].email = data.email;
        sessionStorage.setItem('data', JSON.stringify(temp_data));
    }

    const [isClose, setIsClose] = React.useState(false);
    
    const handleClose = () => {
        setIsClose(true)
    }
    return (
        /*<main class="main">*/
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={handleClose}>x</span>
                {props.content}
                <div class="form">

                    <h2 className="text-left mb-4">Edit User</h2>
                    <br />

                    <form onSubmit={e => onSubmit(e)}>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">First Name<i class="bi bi-person-lines-fill" /></label>
                            <div class="col-9">
                                <input
                                    type="text"
                                    class="form-control mb-3"
                                    placeholder="Enter Your First Name"
                                    name="first_name"
                                    value={first_name}
                                    onChange={e => onInputChange(e)}
                                />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Last Name<i class="bi bi-person-lines-fill" /></label>
                            <div class="col-9">
                                <input
                                    type="text"
                                    class="form-control mb-3"
                                    placeholder="Enter Your Last Name"
                                    name="last_name"
                                    value={last_name}
                                    onChange={e => onInputChange(e)}
                                />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Email<i class="bi bi-envelope-fill" /></label>
                            <div class="col-9">
                                <input
                                    type="email"
                                    class="form-control mb-3"
                                    placeholder="email@address.com"
                                    name="email"
                                    value={email}
                                    onChange={e => onInputChange(e)}
                                />
                            </div>
                        </div>


                        <div class='btn-flex2'>
                            <button className="btn-btn mt-2" onClick={() => updateUser()}>Update</button>
                        </div>
                       
                    </form>
                </div>
            </div>
        </div>
           
        /*</main>*/
    );
};
export default EditUser;