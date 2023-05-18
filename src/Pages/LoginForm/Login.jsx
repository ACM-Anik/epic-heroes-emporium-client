import { Link, useLocation, useNavigate } from "react-router-dom";
import bg from '../../assets/background.jpg';
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess(loggedUser);
                console.log(loggedUser);
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => {
                setError("Didn't match! Please provide correct input.");
                setSuccess("");
                console.log(error);
            });
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                setSuccess(loggedUser);
                setError('');
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content w-96">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered rounded-lg" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered rounded-lg" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-white rounded-lg border-0 bg-[#FF0000] hover:bg-[#cb0707]" type="submit" value="Login" />
                            </div>
                            <p className='my-4 text-center'>New here? <Link className='text-[#FF0000] font-bold' to="/register">Register</Link> </p>
                        </form>
                        <div>
                            <div className="divider text-[#FF0000]">OR</div>
                            <div className="text-center">
                                <button onClick={handleGoogleSignIn} className="btn btn-outline rounded-lg hover:bg-[#FF0000] gap-1  w-full">
                                    <FaGoogle className="w-6 h-6" /> Google
                                </button>
                            </div>
                        </div>
                        <div>
                            <br />
                            {
                                success && <h5 className="text-center text-success py-2">LogIn successfully done!</h5>
                            }
                            {
                                error && <h5 className="text-center text-[#FF0000] py-2">{error}</h5>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;