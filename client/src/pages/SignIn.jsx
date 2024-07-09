import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signInUser } from '../redux-toolkit/user/userSlice';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, currentUser } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInUser(formData));
  };

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return (
    <div className=" max-w-lg mx-auto p-3">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <div className="">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            id="email"
            placeholder="dnyan@gmail.com"
            className="border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="password"
            id="password"
            placeholder="********"
            className="border p-3 rounded-lg"
            onChange={handleChange}
          />
          <button
            disabled={loading}
            type="submit"
            className=" bg-slate-500 text-white uppercase rounded-lg p-3 hover:opacity-95 disabled:opacity-80"
          >
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </form>
        <div className="flex mt-5 items-center gap-2">
          <p className="text-center text-sm">Do not have an account?</p>
          <Link to="/sign-up">
            <span className="text-blue-500 text-sm">Create Account</span>
          </Link>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default SignIn;
