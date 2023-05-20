import { useLoaderData } from "react-router-dom";


const SingleDetails = () => {
    const singleHero = useLoaderData();

    const { toy_name, picture, category_name, seller_name, price, rating, seller_email, quantity, description } = singleHero;

    return (
        <div>
            <div className="hero md:min-h-screen bg-base-200">
                <div className="p-10 md:p-20 lg:px-36 grid lg:grid-cols-2 items-center">
                    <img src={picture} className="lg:w-[420px] lg:h-[400px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">{toy_name}</h1>
                        <p className="font-semibold text-base py-2">{description}</p>
                        <p className="font-semibold text-base py-2"><span className="font-bold">Price: </span>${price}</p>
                        <p className="font-semibold text-base py-2"><span className="font-bold">Rating:</span> {rating}</p>
                        <p className="font-semibold text-base py-2"><span className="font-bold">Available Quantity:</span> {quantity}</p>
                        <p className="font-semibold text-base py-2"><span className="font-bold">Category Name:</span>{category_name}</p>
                        <p className="font-semibold text-base py-2"><span className="font-bold">Seller: </span>{seller_name}</p>
                        <p className="font-semibold text-base py-2"><span className="font-bold">Email: </span>{seller_email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDetails;