import { useContext,  useState } from "react";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaArrowRight } from "react-icons/fa";

const ShopByCategory = ({ categories }) => {
    const { user } = useContext(AuthContext);
    const notify = () => {
        user ? "" : toast('You have to log-in first to view details!❎');
    }
    
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };


    return (
        <div className="min-h-[400px]">
            <div className="">
                <div className="text-center">
                    <h2 className="text-5xl font-bold my-4">Shop By Category</h2>
                </div>
                <div className="border-b border-gray-300 px-2 md:max-w-lg mx-auto">
                    <ul className="flex gap-4">
                        {categories.map((category, index) => (
                            
                            <li key={category.category}
                                className={`py-4 px-10 cursor-pointer ${activeTab === index ? 'border-b-2 font-semibold bg-zinc-100 border-[#FF0000] text-[#FF0000]' : 'text-gray-600 font-semibold'
                                    }`}
                                onClick={() => handleTabClick(index)}
                            >
                                {category.category}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-8">
                    {categories.map((category, index) => (
                        <div
                            key={category.category}
                            className={`${activeTab === index ? 'grid md:grid-cols-3 lg:grid-cols-3 gap-6' : 'hidden'}`}
                        >
                            {category.heroes.map((hero) => (
                                <div key={hero.id} className="mb-4 rounded shadow-xl p-5">
                                    <img src={hero.picture} alt={hero.name} className="w-[400px] md:h-[400px] mx-auto" />
                                    <div className="p-2">
                                        <h3 className="text-lg font-semibold">{hero.name}</h3>
                                        <p>Price: ${hero.price}</p>
                                        <p>Rating: {hero.rating}</p>
                                        <Link to={`/singleDetails/${hero.id}`}>
                                            <button onClick={notify} className="btn text-white rounded-lg border-0 bg-[#FF0000] hover:bg-[#cb0707] mt-3 gap-1">
                                                View Details <FaArrowRight className="w-6 h-6" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default ShopByCategory;