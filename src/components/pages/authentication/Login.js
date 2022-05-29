import React, { useRef } from "react";
import google from "../../../assets/icons/Group 573.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../shared/Loading";
import { toast } from "react-toastify";
import useToken from "../../hooks/useToken";

const Login = () => {
  const getEmail = useRef("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, GUser, GLoading, GError] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(user || GUser);

  let from = location.state?.from?.pathname || "/";

  if (loading || GLoading) {
    return <Loading></Loading>;
  }

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password);
  };
  const handlePassReset = async () => {
    const email = getEmail.current.value;
    await sendPasswordResetEmail(email);
    if (email) {
      toast.success("Sent Password Reset Link on Your Email");
    } else {
      toast.error("Enter Your Email");
    }
  };
  return (
    <div className="my-12 grid justify-center items-center">
      <div className="max-w-md bg-base-100 border border-slate-600 rounded p-8">
        <h4 className="text-2xl font-bold mb-6">Login</h4>
        <form onSubmit={handleLogin} className="form-control">
          <input
            ref={getEmail}
            className="input   rounded-md border border-orange-600"
            type="email"
            name="email"
            placeholder="Email"
            required
          />

          <input
            className="input   rounded-md border border-orange-600 mt-4"
            placeholder="Password"
            type="password"
            name="password"
            required
          />
          <p className="text-blue-500 mb-4 text-sm">
            <button onClick={handlePassReset}>Forgot Password?</button>
          </p>

          <p className="text-error text-sm">{error?.message}</p>
          <input
            type="submit"
            className="btn rounded-md border border-orange-600 text-white font-semibold"
            value="Log in"
          />
          <p className="text-sm mt-2 text-center">
            Need an account?
            <Link className="text-secondary" to="/signup">
              Sign up
            </Link>
          </p>
        </form>
        <p className="text-error text-sm my-4">{GError?.message}</p>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline rounded-md border border-orange-600 w-full pr-16 lg:pr-20"
        >
          <img className="mr-12 lg:mr-20" width={30} src={google} alt="" />{" "}
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
