
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import swal from 'sweetalert';


const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister= e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password);

        createUser(email,password)
        .then(willSuccess =>{
            if (willSuccess) {
                swal("Success!", "Your Registration is successful!", "success");
              }
        })
        .catch(willError =>{
            if (willError) {
                swal("Oops!", "This email already in used!", "Error");
            }
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="my-5">
                <div className="text-center mb-5">
                    <h1 className="text-5xl font-bold">Registration now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-green-500">Register</button>
                            </div>
                        </form>
                        <div>
                            <p className="text-[15px]">Already have an account ? Please <Link
                            to="/login"
                             className="text-xl text-green-500 font-bold">Login</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;