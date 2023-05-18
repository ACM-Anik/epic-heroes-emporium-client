import { useState } from "react";

const ShopByCategory = () => {
    const [activeTab, setActiveTab] = useState(0);

    const categories = [
        {
            id: 1,
            name: 'Category 1',
            subCategories: [
                {
                    id: 1,
                    name: 'Subcategory 1',
                    toys: [
                        {
                            id: 1,
                            name: 'Toy 1',
                            description: 'Description of Toy 1',
                        },
                        {
                            id: 2,
                            name: 'Toy 2',
                            description: 'Description of Toy 2',
                        },
                    ],
                },
                {
                    id: 2,
                    name: 'Subcategory 2',
                    toys: [
                        {
                            id: 3,
                            name: 'Toy 3',
                            description: 'Description of Toy 3',
                        },
                        {
                            id: 4,
                            name: 'Toy 4',
                            description: 'Description of Toy 4',
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            name: 'Category 2',
            subCategories: [
                {
                    id: 1,
                    name: 'Subcategory 1',
                    toys: [
                        {
                            id: 5,
                            name: 'Toy 5',
                            description: 'Description of Toy 5',
                        },
                        {
                            id: 6,
                            name: 'Toy 6',
                            description: 'Description of Toy 6',
                        },
                    ],
                },
                {
                    id: 2,
                    name: 'Subcategory 2',
                    toys: [
                        {
                            id: 7,
                            name: 'Toy 7',
                            description: 'Description of Toy 7',
                        },
                        {
                            id: 8,
                            name: 'Toy 8',
                            description: 'Description of Toy 8',
                        },
                    ],
                },
            ],
        },
        {
            id: 3,
            name: 'Category 3',
            subCategories: [
                {
                    id: 1,
                    name: 'Subcategory 1',
                    toys: [
                        {
                            id: 9,
                            name: 'Toy 9',
                            description: 'Description of Toy 9',
                        },
                        {
                            id: 10,
                            name: 'Toy 10',
                            description: 'Description of Toy 10',
                        },
                    ],
                },
                {
                    id: 2,
                    name: 'Subcategory 2',
                    toys: [
                        {
                            id: 11,
                            name: 'Toy 11',
                            description: 'Description of Toy 11',
                        },
                        {
                            id: 12,
                            name: 'Toy 12',
                            description: 'Description of Toy 12',
                        },
                    ],
                },
            ],
        }
    ];


    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <div className="min-h-[400px]">
            <div className="max-w-lg mx-auto">
                <div className="text-center">
                    <h2 className="text-5xl font-bold mb-4">Shop By Category</h2>
                </div>
                <div className="border-b border-gray-300">
                    <ul className="flex">
                        {categories.map((category, index) => (
                            <li
                                key={category.id}
                                className={`py-4 px-6 cursor-pointer ${activeTab === index ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
                                    }`}
                                onClick={() => handleTabClick(index)}
                            >
                                {category.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-8">
                    {categories.map((category, index) => (
                        <div
                            key={category.id}
                            className={`${activeTab === index ? 'block' : 'hidden'
                                }`}
                        >
                            {category.subCategories.map((subCategory) => (
                                <div key={subCategory.id} className="mb-4">
                                    <h3 className="text-lg font-semibold">{subCategory.name}</h3>
                                    <div className="grid grid-cols-1 gap-6">
                                        {
                                            subCategory.toys.map((toy) => (
                                                <div key={toy.id} className="mb-2">
                                                    <h4 className="text-md font-medium">{toy.name}</h4>
                                                    <p>{toy.description}</p>
                                                    <button className="bg-blue-500 text-white py-2 px-4 mt-2 rounded">
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            ))
                                        }
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