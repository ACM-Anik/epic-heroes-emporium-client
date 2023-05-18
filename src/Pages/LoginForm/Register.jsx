import { Link } from "react-router-dom";
import bg from '../../assets/background.jpg';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('Created user', user)
            })
            .catch(error => console.log(error))

    }

    return (
        <div className="hero min-h-screen " style={{backgroundImage: `url(${bg})`}}>
            <div className="hero-content w-96">
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered rounded-lg" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="photo URL" className="input input-bordered rounded-lg" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered rounded-lg" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered rounded-lg" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Remember your password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-white rounded-lg border-0 bg-[#FF0000] hover:bg-[#cb0707]" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already Have an Account? <Link className='text-[#FF0000] font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;