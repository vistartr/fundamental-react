import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";
// import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <AuthLayouts title="Login" type="login">
            <FormLogin />
            {/* <p className="text-sm justify-center mt-5 text-center">
                Don&apos;t have an account?{" "} */}
                {/* 
                Cara Biasa untuk berpindah halaman yaitu dengan login
                <a href="/register" className="font-bold text-blue-600">
                    Sign Up
                </a> */}
                
                {/*MENGGUNAKAN REACT ROUTER UNTUK RENDERING HALAMAN*/}
                {/* <Link to="/register" className="font-bold text-blue-600">
                    Sign Up
                </Link>
            </p> */}
        </AuthLayouts>
    );
};


export default LoginPage;