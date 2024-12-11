// import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";

// class Button extends React.Component {
//   render() {
//     return (
//       <button
//          className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" 
//          type="button"
//       >
//         Klik Saya
//       </button>
//     );
//   }
// }


// function ButtonBlack() {
//   return (
//     <button
//          className="h-10 px-6 font-semibold rounded-md border bg-black text-white" 
//          type="button"
//       >
//         Klik Saya
//       </button>
//   );
// }



// const Button = (props) => {
//   const { variant } = props;

//   return (
//     <button
//       className={`h-10 px-6 font-semibold rounded-md ${
//         variant ? `bg-${variant}-700` : `bg-blue-700`
//       } text-black`}
//       type="submit"
//     >
//     </button>
//   );
// };

// // Menambahkan validasi props menggunakan PropTypes
// Button.propTypes = {
//   variant: PropTypes.string, // 'variant' harus berupa string
// };

// // Menambahkan default value untuk props
// Button.defaultProps = {
//   variant: "blue", // Default value jika 'variant' tidak diberikan
// };






// function App() {
//   return(
    // <div className = "flex justify-center bg-white min-h-screen items-center">
    //   <div className="flex gap-x-3">
    //     <Button variant="bg-blue-700">Login</Button>
    //     <Button variant="bg-red-700">Register</Button>
    //     <Button variant="bg-blue-600">Submit</Button>
    //     <Button variant="bg-yellow-200">Cek</Button>
    //     <Button></Button>
    //   </div>
    // </div>

    // <div className = "flex justify-center min-h-screen items-center">
    //   <div className="w-full max-w-xs">
    //     <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
    //     <p className="font-medium text-slate-500">
    //       Welcome, please enter your details
    //     </p>
    //     <form action= "">
    //       <div className="mb-6">
    //         <label
    //           htmlFor=""
    //           className="block text-slate-700 text-sm font-bold mb-2"
    //         > 
    //           Email
    //         </label>
    //         <input
    //           type="text"
    //           className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
    //           placeholder="example@email.com"
    //         >
    //         </input>
    //       </div>
    //       <div className="mb-6">
    //         <label
    //           htmlFor=""
    //           className="block text-slate-700 text-sm font-bold mb-2"
    //         > 
    //           Email
    //         </label>
    //         <input
    //           type="password"
    //           className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
    //           placeholder="******"
    //         >
    //         </input>
    //       </div>
    //       <Button classname="bg-blue-600 w-full">Login</Button>
    //     </form>
    //   </div>
    // </div>
//   );
// }



// function App() {
//   return (
//     <div className = "flex justify-center min-h-screen items-center">
//     <div className="w-full max-w-xs">
//       <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
//       <p className="font-medium text-slate-500 mb-8">
//         Welcome, please enter your details
//       </p>
//       <FormLogin/>
//     </div>
//     </div>
//   );
// };
// export default App;


function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      {/* <LoginPage></LoginPage> */}
      <RegisterPage></RegisterPage>
    </div>
  )
}


export default App;