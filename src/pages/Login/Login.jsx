import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import swal from 'sweetalert';

const Login = () => {
    const {signInUser,googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin= e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

     signInUser(email,password)
     .then(result =>{
        if(result){
            swal("Success!", "You are successfully login here!", "success");
            e.target.reset();
          }
        navigate(location?.state? location.state:'/');
     })
     .catch(Error =>{
        if(Error){
            swal("Oops!", "Your email and password does not match!", "Error");
          }
     })
 
    }

    const handleGoogle = () =>{
        googleSignIn()
        .then(result =>{
            if(result){
                swal("Success!", "You are successfully login here!", "success");
              }
            navigate(location?.state? location.state:'/');
        })
        .catch(error =>{
            if(error){
                swal("Oops!", "Your email and password does not match!", "Error");
              }
        });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="my-5">
                <div className="text-center mb-5">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
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
                                <button className="btn bg-green-500">Login</button>
                            </div>
                        </form>
                        <div>
                            <p>New User ? Please <Link
                            to="/register"
                             className="text-xl text-green-500 font-bold">Registration</Link> </p>
                        </div>
                        {/* sign in with google  */}
                        <div>
                             <p>Sign In With <button onClick={handleGoogle} className="btn">Google</button> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;