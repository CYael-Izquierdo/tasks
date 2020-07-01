import React, {useState} from "react";
import {Link} from "react-router-dom";

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const {email, password} = user;

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        // Validation: no empty fields


    }

    return (
        <div className="form-user">
            <div className="form-container shadow-dark">
                <h1>Log in</h1>

                <form
                    onSubmit={handleSubmit}
                >
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
                        <input
                            type="submit"
                            className="btn btn-primary btn-block"
                            value="Log in"
                        />
                    </div>
                </form>
                <Link to="/sign-in" className="sign-in-link">
                    Sign In
                </Link>
            </div>
        </div>
    );
}

export default Login;