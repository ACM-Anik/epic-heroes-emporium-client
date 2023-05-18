import { Link } from "react-router-dom";
import bg from '../../assets/background.jpg';
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;  
                console.log(user);

            })
            .catch(error => console.log(error));
    }

    
    const handleGoogleSignIn = () => {
        
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
                        <div className="divider">OR</div>
                        <div className="text-center">
                            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline hover:bg-[#dd0505]">
                                G
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;