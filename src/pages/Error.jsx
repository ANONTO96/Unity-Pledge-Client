import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-3 mt-40 text-4xl font-thin">
            <img className="w-12" src="https://img.icons8.com/?size=100&id=31337&format=png&color=FA5252" alt="" />
            <h1>Oops!</h1>
      <p className="mb-10">Sorry, 404 page/Not Found</p>
      <Link to='/' className="btn btn-warning">Go Back</Link>
        </div>
    );
};

export default ErrorPage;