import { Link } from "react-router-dom";
const AuthLayouts = (props) => {
    const { children, title, type } = props;
    return (
        <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
            <h1 className="text-3xl font-bold mb-2 text-blue-600">{ title } </h1>
            <p className="font-medium text-slate-500 mb-8">
                Welcome, please enter your details
            </p>
            { children }
            <Navigation type={ type } />


            {/* <p className="text-sm mt-5 text-center"> */}
                {/* Conditional Rendering */}
                {/* {type === "login" 
                ? "Don't have an account? " 
                : "Already have an account? "
                } */}

                {/* {type === "login" && (
                    <Link to="/register" className="font-bold text-blue-600">
                        Register
                    </Link>
                )} */}

                {/* {type === "register" && (
                    <Link to="/login" className="font-bold text-blue-600">
                        Login
                    </Link>
                )} */}
            {/* </p>  */}
        </div>
        </div>
    );
};

const Navigation = ({ type }) => {
    if (type === "login") {
        return (
            <p className="text-sm mt-5 text-center">
                Don&apos;t have an account?{" "}
                <Link to="/register" className="font-bold text-blue-600">
                    Register
                </Link>
            </p>
        );
    } else {
        return(
            <p className="text-sm mt-5 text-center">
                Already have an account?{" "}
                <Link to="/login" className="font-bold text-blue-600">
                    Login
                </Link>
            </p>
        );
    };
};

export default AuthLayouts;
