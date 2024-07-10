import { useSelector } from 'react-redux';

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className=" text-3xl text-center font-semibold my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          className="h-24 w-24 rounded-full object-cover cursor-pointer self-center mt-2"
          src={currentUser.avatar}
          alt=""
        />
        <input
          className="p-3 border rounded-lg"
          type="text"
          placeholder="username"
          id="username"
        />
        <input
          className="p-3 border rounded-lg"
          type="text"
          placeholder="Email"
          id="email"
        />
        <input
          className="p-3 border rounded-lg"
          type="password"
          placeholder="Password"
          id="password"
        />
        <button className="p-3 bg-slate-700 uppercase text-white rounded-lg hover:opacity-95 disabled:opacity-80">
          Update
        </button>
        <button className="p-3 bg-green-700 uppercase text-white rounded-lg hover:opacity-95 disabled:opacity-80">
          Create Listing
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
};

export default Profile;
