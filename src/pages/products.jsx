// import Button from "../components/Elements/Button";
import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";


const products = [{
    id: 1,
    name: "sepatu baru",
    price: "Rp 1.000.000",
    image: "/images/shoes.jpg",
    description: 
        `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Velit officiis vitae quo et ullam sapiente doloremque, 
        delectus voluptatum tenetur facilis dolores dolorum earum consequuntur
        similique esse reiciendis aspernatur. Quasi, veniam!`
    },
    {
        id: 2,
        name: "sepatu lama",
        price: "Rp 500.000",
        image: "/images/shoes.jpg",
        description: 
            `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Velit officiis vitae quo et ullam sapiente doloremque, `
        },
    {
        id: 3,
        name: "sepatu second",
        price: "Rp 800.000",
        image: "/images/shoes.jpg",
        description: 
            `produk ini adalah terbaik yang berada di pasaran, `
    },    
];



const email = localStorage.getItem("email");



const ProductsPage = () => {

    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login"
    }
    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {email}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <div className="flex justify-center py-5">
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image}></CardProduct.Header>
                        <CardProduct.Body title={product.name}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price}></CardProduct.Footer>
                    </CardProduct>
                ))};
            </div>
            <div className="flex w-100 justify-center">
                <Counter></Counter>
            </div>
        </Fragment>
        
    );
};

export default ProductsPage;

            {/* <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
                <a href="#">
                    <img 
                        src="/images/shoes.jpg" 
                        alt="product" 
                        className="p-8 rounded-t-lg"
                    />
                </a>
                <div className="px-5 pb-5">
                    <a href="">
                        <h5 className="text-xl font-semibold tracking-tight text-white">
                            Sepatu Baru
                        </h5>
                        <p className="text-m text-white">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Velit officiis vitae quo et ullam sapiente doloremque, 
                            delectus voluptatum tenetur facilis dolores dolorum earum consequuntur
                            similique esse reiciendis aspernatur. Quasi, veniam!
                        </p>
                    </a>
                </div>
                <div className="flex items-center justify-between px-5 pb-5">
                    <span className="text-xl font-bold text-white">
                        Rp1.000.000
                    </span>
                    <Button className="bg-blue-600">Add to Cart</Button>
                </div>
            </div> */}

            {/* Pemanggilan Card Product */}
            {/* <CardProduct>
                <CardProduct.Header image="/images/shoes.jpg"></CardProduct.Header>
                <CardProduct.Body title="Sepatu Baru">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Velit officiis vitae quo et ullam sapiente doloremque, 
                    delectus voluptatum tenetur facilis dolores dolorum earum consequuntur
                    similique esse reiciendis aspernatur. Quasi, veniam!
                </CardProduct.Body>
                <CardProduct.Footer price="Rp1.000.000"></CardProduct.Footer>
            </CardProduct> */}
            {/* <CardProduct>
                <CardProduct.Header image="/images/shoes.jpg"></CardProduct.Header>
                <CardProduct.Body title="Sepatu Lama">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Velit officiis vitae quo
                </CardProduct.Body>
                <CardProduct.Footer price="Rp1.000.000"></CardProduct.Footer>
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="/images/shoes.jpg"></CardProduct.Header>
                <CardProduct.Body title="Sepatu Lama">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Velit officiis vitae quo
                </CardProduct.Body>
                <CardProduct.Footer price="Rp1.000.000"></CardProduct.Footer>
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="/images/shoes.jpg"></CardProduct.Header>
                <CardProduct.Body title="Sepatu Lama">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Velit officiis vitae quo
                </CardProduct.Body>
                <CardProduct.Footer price="Rp1.000.000"></CardProduct.Footer>
            </CardProduct> */}