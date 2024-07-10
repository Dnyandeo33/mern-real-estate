import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase';
import { googleSing } from '../redux-toolkit/user/userSlice';

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account',
        display: 'popup',
      });

      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const googleUser = {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      };
      dispatch(googleSing(googleUser));
      navigate('/');
    } catch (error) {
      console.log('could not sign in with google', error);
    }
  };
  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className=" bg-red-800 text-white uppercase rounded-lg p-3 hover:opacity-95 disabled:opacity-80"
    >
      Continue with Google
    </button>
  );
};

export default OAuth;
