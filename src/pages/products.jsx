import Button from "../components/Elements/Button";

const ProductPage = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
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
            </div>
        </div>
    )
}



export default ProductPage;