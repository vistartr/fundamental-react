const Button = (props) => {
    const {children = "...", classname = "bg-black", onClick } = props;
    return (
      <button
        className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
        type="button"
        onClick={() => onClick()} /*{console.log('anda mengclick butotn ini')}}*/
      >
        {children}
      </button>
    );
  };
  
  export default Button;