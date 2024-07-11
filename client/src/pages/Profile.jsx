import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { app } from '../firebase';
import { deleteUser, updateUser } from '../redux-toolkit/user/userSlice';

const Profile = () => {
  const [file, setFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [fileUploadError, setFileUploadError] = useState('');
  const [formData, setFormData] = useState({});

  const fileRef = useRef();
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(Math.round(progress));
      },
      (error) => {
        setFileUploadError(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: currentUser._id,
        email: formData.email,
        username: formData.username,
        password: formData.password,
        avatar: formData.avatar,
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteUser(currentUser._id));
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className=" text-3xl text-center font-semibold my-7">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          hidden
          type="file"
          ref={fileRef}
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          className="h-24 w-24 rounded-full object-cover cursor-pointer self-center mt-2"
          src={formData.avatar || currentUser.avatar}
          alt=""
        />
        <p className="text-sm self-center">
          {fileUploadError ? (
            <span className="text-red-500">
              Upload Failed(image must be less then 2mb){' '}
            </span>
          ) : progress > 0 && progress < 100 ? (
            <span className="text-slate-500">{`uploading ${progress}`}</span>
          ) : progress === 100 ? (
            <span className="text-green-500">Uploaded successfully...</span>
          ) : (
            ''
          )}
        </p>
        <input
          className="p-3 border rounded-lg"
          type="text"
          placeholder="username"
          id="username"
          defaultValue={currentUser.username}
          onChange={handleChange}
        />
        <input
          className="p-3 border rounded-lg"
          type="text"
          placeholder="Email"
          id="email"
          defaultValue={currentUser.email}
          onChange={handleChange}
        />
        <input
          className="p-3 border rounded-lg"
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="p-3 bg-slate-700 uppercase text-white rounded-lg hover:opacity-95 disabled:opacity-80"
        >
          {loading ? 'Loading...' : 'Update'}
        </button>
        <button className="p-3 bg-green-700 uppercase text-white rounded-lg hover:opacity-95 disabled:opacity-80">
          Create Listing
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer" onClick={handleDelete}>
          Delete Account
        </span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
      <p className="text-red-700 text-center">{error && error}</p>
      {/* <p className="text-green-700 text-center">
        {success && 'User is update successfully...'}
      </p> */}
    </div>
  );
};

export default Profile;
