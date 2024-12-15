import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {

  const handleLogin = () => {
    console.log("login");

  }
    return (
        <form action= "">
        <InputForm 
          label="Email" 
          type="email" 
          placeholder="example@mail.com" 
          name="email"
        />
        <InputForm
          label="Password"
          type="password" 
          placeholder="********"
          name="password"
        />
        <Button classname="bg-blue-600 w-full" onClick={handleLogin}>Login</Button>
      </form>
    );
};

export default FormLogin;