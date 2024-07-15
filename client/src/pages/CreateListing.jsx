const CreateListing = () => {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create Listing
      </h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 border border-gray-300 p-5 rounded-lg sm:flex-row">
          <div className="flex flex-col gap-4 flex-1">
            <input
              type="text"
              placeholder="Name"
              id="name"
              maxLength="60"
              minLength="10"
              required
              className="border p-3 rounded-lg"
            />
            <textarea
              type="text"
              placeholder="Description"
              id="description"
              className="border p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Address"
              id="address"
              className="border p-3 rounded-lg"
            />
            <div className="flex gap-6 flex-wrap">
              <div className="flex gap-2">
                <input type="checkbox" id="sell" className="w-5" />
                <span>Sell</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="rent" className="w-5" />
                <span>Rent</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="parking" className="w-5" />
                <span>Parking</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="furnished" className="w-5" />
                <span>Furnished</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="offer" className="w-5" />
                <span>Offer</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="bedroom"
                  min="1"
                  max="10"
                  required
                  className="p-2 border border-gray-300 rounded-lg "
                />
                <p>BedRoom</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="bathroom"
                  min="1"
                  max="10"
                  required
                  className="p-2 border border-gray-300 rounded-lg "
                />
                <p>BathRoom</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="regularPrice"
                  required
                  className="p-2 border border-gray-300 rounded-lg"
                />
                <div className="flex flex-wrap gap-1 items-center">
                  <p>Regular Price</p>
                  <span className="text-xs">($/ month)</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="discountedPrice"
                  required
                  className="p-2 border border-gray-300 rounded-lg "
                />
                <div className="flex flex-wrap items-center gap-1">
                  <p>Discounted Price</p>
                  <span className="text-xs">($/ month)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <p className="font-semibold">
              Images:
              <span className="font-normal text-gray-600 ml-2">
                The first image will be cover (max 6)
              </span>
            </p>
            <div className="flex gap-4">
              <input
                className="p-3 border border-gray-300 rounded w-full"
                type="file"
                id="images"
                accept="image/*"
                multiple
              />
              <button className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg default:opacity-80">
                Upload
              </button>
            </div>
          </div>
        </div>
        <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Create Listing
        </button>
      </form>
    </main>
  );
};

export default CreateListing;
