import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";
// import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <AuthLayouts title="Register" type="register">
            <FormRegister />
            {/* <p className="text-sm justify-center mt-5 text-center"> */}
                Have an account?{" "}
                {/*MENGGUNAKAN REACT ROUTER UNTUK RENDERING HALAMAN*/}
                {/* <Link to="/login" className="font-bold text-blue-600">
                    Login
                </Link>
            </p> */}
        </AuthLayouts>
    );
};


export default RegisterPage;