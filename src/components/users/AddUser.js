import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
    let history = useHistory();
    const [data, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        id: "",
        avatar: ""
    });

    const { first_name, last_name, email, avatar } = data;
    const onInputChange = e => {
        setUser({ ...data, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("https://reqres.in/api/users", data);
        const temp_data = JSON.parse(sessionStorage.getItem('data'));
        var last = temp_data.length;
        temp_data[last] = data;
        temp_data[last].id = temp_data[last - 1].id + 1;
        sessionStorage.setItem('data', JSON.stringify(temp_data));
       window.alert("Added Success")
        window.location.reload();
        history.push("/");
    };
    return (
        /*<main class="main">*/
        <div class="form">
            <h2 className="text-left mb-4">Add User</h2>
            <br/>
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
                    <label class="col-sm-3 col-form-label">Email<i class="bi bi-envelope-fill"/></label>
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

                <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Link Avatar<i class="bi bi-file-image"/></label>
                    <div class="col-9">
                        <input
                            type="text"
                            class="form-control mb-3"
                        placeholder="Avatar Link"
                            name="avatar"
                            value={avatar}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                </div>
                <div class='btn-flex2'>
                <button className="btn-btn mt-2" >Add User</button>
                </div>
            </form>
        </div>
        /*</main>*/
    );
};

export default AddUser;