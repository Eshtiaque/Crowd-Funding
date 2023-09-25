import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-white w-full h-full">
      <div className="w-full mx-auto flex items-center justify-center">
        {" "}
        <img src="/4404.gif" alt="" />
      </div>
      <div className="text-center mt-10">
        <Link
          to="/"
          className="p-4 text-white bg-[#1A7CC3] text-center text-lg font-semibold rounded-md cursor-pointer"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
