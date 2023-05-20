import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { useContext } from "react";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaArrowRight } from "react-icons/fa";


const ShopByCategory = ({ toys }) => {
    const { user } = useContext(AuthContext);
    const notify = () => {
        user ? "" : toast('You have to log-in first to view details!❎');
    }

    return (
        <div className="min-h-[400px]">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold my-4">Shop By Category</h2>
                </div>
                <Tabs className=" my-6 ">
                    <div className='text-center shadow-lg shadow-red-100 my-4'>
                        <TabList>
                            <Tab>Marvel</Tab>   
                            <Tab>DC</Tab>   
                            <Tab>Star Wars</Tab>   
                        </TabList>
                    </div>
                    <TabPanel>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                            {
                                toys.filter(specific => specific.category_name == 'Marvel').map(hero => 
                                    <div key={hero._id} className="mb-4 rounded shadow-xl p-5">
                                        <img src={hero.picture} alt={hero.toy_name} className=" rounded-lg w-[360px] lg:h-[360px] mx-auto" />
                                        <div className="p-2 my-4 flex justify-between items-center">
                                            <div>
                                                <h3 className="text-2xl font-semibold my-2">{hero.toy_name}</h3>
                                                <p className='text-base font-semibold my-1'>Price: ${hero.price}</p>
                                                <p className='text-base font-semibold'>Rating: {hero.rating}</p>
                                            </div>
                                            <Link to={`/singleDetails/${hero._id}`}>
                                                <button onClick={notify} className="btn text-white rounded-lg border-0 bg-[#FF0000] hover:bg-[#cb0707] mt-3 gap-1">
                                                View Details <FaArrowRight className="w-6 h-6" />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                            {
                                toys.filter(specific => specific.category_name == 'DC').map(hero => 
                                    <div key={hero._id} className="mb-4 rounded shadow-xl p-5">
                                        <img src={hero.picture} alt={hero.toy_name} className=" rounded-lg w-[360px] lg:h-[360px] mx-auto" />
                                        <div className="p-2 my-4 flex justify-between items-center">
                                            <div>
                                                <h3 className="text-2xl font-semibold my-2">{hero.toy_name}</h3>
                                                <p className='text-base font-semibold my-1'>Price: ${hero.price}</p>
                                                <p className='text-base font-semibold'>Rating: {hero.rating}</p>
                                            </div>
                                            <Link to={`/singleDetails/${hero._id}`}>
                                                <button onClick={notify} className="btn text-white rounded-lg border-0 bg-[#FF0000] hover:bg-[#cb0707] mt-3 gap-1">
                                                View Details <FaArrowRight className="w-6 h-6" />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                            {
                                toys.filter(specific => specific.category_name == 'Star Wars').map(hero => 
                                    <div key={hero._id} className="mb-4 rounded shadow-xl p-5">
                                        <img src={hero.picture} alt={hero.toy_name} className=" rounded-lg w-[360px] lg:h-[360px] mx-auto" />
                                        <div className="p-2 my-4 flex justify-between items-center">
                                            <div>
                                                <h3 className="text-2xl font-semibold my-2">{hero.toy_name}</h3>
                                                <p className='text-base font-semibold my-1'>Price: ${hero.price}</p>
                                                <p className='text-base font-semibold'>Rating: {hero.rating}</p>
                                            </div>
                                            <Link to={`/singleDetails/${hero._id}`}>
                                                <button onClick={notify} className="btn text-white rounded-lg border-0 bg-[#FF0000] hover:bg-[#cb0707] mt-3 gap-1">
                                                View Details <FaArrowRight className="w-6 h-6" />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </TabPanel>
                    
                </Tabs>
               
            </div>
    );
};

export default ShopByCategory;




// import { useContext,  useEffect,  useState } from "react";
// import { Link } from "react-router-dom";
// import toast from 'react-hot-toast';
// import { AuthContext } from "../../../Providers/AuthProvider";
// import { FaArrowRight } from "react-icons/fa";

// const ShopByCategory = ({ toys }) => {
//     const { user } = useContext(AuthContext);
//     const notify = () => {
//         user ? "" : toast('You have to log-in first to view details!❎');
//     }

//     const categories = ['Marvel', 'DC', 'Star Wars'];
//     const [activeTab, setActiveTab] = useState(categories[0]);
//     // const [catName, setCatName] = useState([]);
//     // const handleTabClick = (name) => {
//     //     setActiveTab(name);
//     //     console.log(name);
        
//     // };
//     useEffect(() => {
//         // const subCategory = toys.find(toy => toy._id == activeTab);
//         // const single = toys.filter(toy => toy.category_name == subCategory.category_name);
//         // setCatName(single); 
//     }, [toys])

//     return (
//         <div className="min-h-[400px]">
//             <div className="">
//                 <div className="text-center">
//                     <h2 className="text-5xl font-bold my-4">Shop By Category</h2>
//                 </div>
//                 <div className="border-b border-gray-300 px-2 md:max-w-lg mx-auto">
//                     <ul className="flex gap-4">
//                         {categories.map((category, index) => (
                            
//                             <li key={index}
//                                 className={`py-4 px-10 cursor-pointer ${activeTab == category[index] ? 'border-b-2 font-semibold bg-zinc-100 border-[#FF0000] text-[#FF0000]' : 'text-gray-600 font-semibold'
//                                     }`}
//                                 onClick={() => {
//                                     setActiveTab(category[index]);
//                                     console.log(category[index]);
//                                 }}
//                             >
//                                 {category}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="mt-8">
//                     {toys.map((hero, index) => (
//                         <div
//                             key={hero._id}
//                             className={`${activeTab === index ? 'grid md:grid-cols-3 lg:grid-cols-3 gap-6' : 'hidden'}`}
//                         >
//                             {/* {category.heroes.map((hero) => ( */}
//                                 <div key={hero._id} className="mb-4 rounded shadow-xl p-5">
//                                     <img src={hero.picture} alt={hero.name} className="w-[400px] lg:h-[400px] mx-auto" />
//                                     <div className="p-2">
//                                         <h3 className="text-lg font-semibold">{hero.name}</h3>
//                                         <p>Price: ${hero.price}</p>
//                                         <p>Rating: {hero.rating}</p>
//                                         <Link to={`/singleDetails/${hero.id}`}>
//                                             <button onClick={notify} className="btn text-white rounded-lg border-0 bg-[#FF0000] hover:bg-[#cb0707] mt-3 gap-1">
//                                                 View Details <FaArrowRight className="w-6 h-6" />
//                                             </button>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             {/* ))} */}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default ShopByCategory;