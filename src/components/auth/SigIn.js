import React, {useState} from "react";
import {Link} from "react-router-dom";

const SigIn = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirm: ""
    });
    const {name, email, password, confirm} = data;

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        // Validation: no empty fields

        // Validation: Password +6 characters

        // Validation: Password and Confirm Password are equals
    }

    return (
        <div className="form-user">
            <div className="form-container shadow-dark">
                <h1>Sign up for your account</h1>

                <form
                    onSubmit={handleSubmit}
                >
                    <div className="form-field">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="confirm">Confirm password</label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Enter your password again"
                            value={confirm}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-field">
                        <input
                            type="submit"
                            className="btn btn-primary btn-block"
                            value="Sign in"
                        />
                    </div>
                </form>
                <Link to="/" className="sign-in-link">
                    Log In
                </Link>
            </div>
        </div>
    );
}

export default SigIn