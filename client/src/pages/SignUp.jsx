import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signUpUser } from '../redux-toolkit/user/userSlice';

const SignUp = () => {
  const [formData, setFormData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUpUser(formData));
    navigate('/sign-in');
  };

  return (
    <div className=" max-w-lg mx-auto p-3">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <div className="">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            id="username"
            placeholder="dnyan@123"
            className="border p-3 rounded-lg"
            onChange={handleChange}
          />

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
            {loading ? 'Loading...' : 'Create Account'}
          </button>
        </form>
        <div className="flex mt-5 gap-2">
          <p className="text-center text-sm">Have an account?</p>
          <Link to="/sign-in">
            <span className="text-blue-500">Sign In</span>
          </Link>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default SignUp;
