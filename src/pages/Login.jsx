import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Toaster } from 'react-hot-toast';


const Login = () => {
    const {signInUser, setUser, errorToastL, successLogin} = useContext(AuthContext);

    const navigate = useNavigate();

    const verifyPassword = (password) => {
        if (!/[A-Z]/.test(password)) {
            return "Password must include at least one uppercase letter.";
        }
        if (!/[a-z]/.test(password)) {
            return "Password must include at least one lowercase letter.";
        }
        if (password.length < 6) {
            return "Password must be at least 6 characters long.";
        }
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const error = verifyPassword(password);

        if (error) {
            alert(error)
        return;
        } 
        
        signInUser(email,password)
        .then(result => {
            const user = result.user;
                setUser(user);
                successLogin();
            navigate('/')
        })
        .catch(error => {
            console.log(error)
            errorToastL();
        })


    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="card bg-base-200 md:w-[550px] shrink-0 shadow-2xl p-8 rounded-none">
                    <h1 className="text-2xl text-center mt-5">Login your account</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Email</span>
                            </label>
                            <input type="email"
                                name="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Password</span>
                            </label>
                            <input type="password"
                                name="password" placeholder="Enter your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-sm text-gray-500">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning text-white"><Toaster></Toaster>Login</button>
                        </div>
                        <p className="text-center">Don’t Have An Account ? <Link to="/register" className="text-red-600">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;