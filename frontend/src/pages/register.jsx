const Register = () => {
  return (
    <div className="min-h-screen bg-[#977F57] bg-opacity-40">
      <div className="flex w-full m-auto justify-center items-center">
        <div className="p-10 flex flex-col gap-4 max-w-[40%] h-full w-full bg-white rounded-lg mt-60">
          <div className="text-center text-xl font-medium">Register</div>
          <div className="">
            <div>
              <div className="text-base font-normal">Username</div>
            </div>
            <div className="mt-px">
              <input
                type="text"
                placeholder="Enter your name"
                className="h-full w-full rounded-r-[7px] rounded-l-[7px] bg-white px-3  py-2.5 text-base font-normal text-blue-gray-700  outline outline-none placeholder:text-gray-500 focus:border-r-2 focus:border-y-2 disabled:border-0 bg-blue-gray-50 border border-black"
              />
            </div>
          </div>
          <div className="">
            <div>
              <div className="text-base font-normal">Password</div>
            </div>
            <div className="mt-px">
              <input
                placeholder="Enter your password"
                type="password"
                className="h-full w-full rounded-r-[7px] rounded-l-[7px]  bg-white px-3  py-2.5 text-base font-normal text-blue-gray-700  outline outline-none placeholder:text-gray-500 focus:border-r-2 focus:border-y-2 disabled:border-0 bg-blue-gray-50 border border-black"
              />
            </div>
          </div>
          <div className="">
            <div>
              <div className="text-base font-normal">Email</div>
            </div>
            <div className="mt-px">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-full w-full rounded-r-[7px] rounded-l-[7px] bg-white px-3  py-2.5 text-base font-normal text-blue-gray-700  outline outline-none placeholder:text-gray-500 focus:border-r-2 focus:border-y-2 disabled:border-0 bg-blue-gray-50 border border-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
