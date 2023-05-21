import img1 from '../../../assets/gallery/galley-1.jpg';
import img2 from '../../../assets/gallery/gallery-2.png';
import img3 from '../../../assets/gallery/gallery-3.jpg';
import img4 from '../../../assets/gallery/gallery-4.jpg';
import img5 from '../../../assets/gallery/gallery-5.jpg';
import img6 from '../../../assets/gallery/gallery-6.png';
import img7 from '../../../assets/gallery/gallery-7.jpg';
import img8 from '../../../assets/gallery/gallery-8.jpg';
import img9 from '../../../assets/gallery/gallery-9.jpg';
import img10 from '../../../assets/gallery/gallery-10.jpg';
import img11 from '../../../assets/gallery/gallery-11.jpg';
import img12 from '../../../assets/gallery/gallery-12.jpg';

const Gallery = () => {
    return (
        <div className='container mx-auto p-6 my-16'>
            <div className="my-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold my-2">Hero Gallery</h1>
                <p className='text-base font-semibold'>Explore our Epic Heroes Gallery, all famous and best seller epic toys we have.</p>
            </div>
            <div>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 lg:px-20'>

                    <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                        <img src={img1} className='rounded-lg object-cover shadow-lg p-4 w-full min-h-[180px] max-h-80 lg:h-full ' alt="" />
                        <div className='bg-black px-6 py-4 bg-opacity-30 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200'>
                            <div className='absolute bottom-6'>
                                <p className='text-xl font-semibold'>Minion</p>
                            </div>
                        </div>
                    </div>

                    <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                        <img src={img2} className='rounded-lg object-cover shadow-lg p-4 w-full min-h-[180px] max-h-80 lg:h-full ' alt="" />
                        <div className='bg-black px-6 py-4 bg-opacity-30 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200'>
                            <div className='absolute bottom-6'>
                                <p className='text-xl font-semibold'>Buzz Lightyear</p>
                            </div>
                        </div>
                    </div>

                    <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                        <img src={img3} className='rounded-lg object-cover shadow-lg p-4 w-full min-h-[180px] max-h-80' alt="" />
                        <div className='bg-black px-6 py-4 bg-opacity-30 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200'>
                            <div className='absolute bottom-6'>
                                <p className='text-xl font-semibold'>Goku</p>
                            </div>
                        </div>
                    </div>

                    <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                        <img src={img4} className='rounded-lg object-cover shadow-lg p-4 w-full min-h-[180px] max-h-80 lg:h-full' alt="" />
                        <div className='bg-black px-6 py-4 bg-opacity-30 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200'>
                            <div className='absolute bottom-6'>
                                <p className='text-xl font-semibold'>Woody</p>
                            </div>
                        </div>
                    </div>

                    <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                        <img src={img5} className='rounded-lg object-cover shadow-lg p-4 w-full min-h-[180px] max-h-80 lg:h-full ' alt="" />
                        <div className='bg-black px-6 py-4 bg-opacity-30 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200'>
                            <div className='absolute bottom-6'>
                                <p className='text-xl font-semibold'>4 Super Heroes</p>
                            </div>
                        </div>
                    </div>

                    <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                        <img src={img9} className='rounded-lg object-cover shadow-lg p-4 w-full min-h-[180px] max-h-80 md:h-full md:col-span-2' alt="" />
                        <div className='bg-black px-6 py-4 bg-opacity-30 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200'>
                            <div className='absolute bottom-6'>
                                <p className='text-xl font-semibold'>Avengers End Game</p>
                            </div>
                        </div>
                    </div>

                    <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                        <img src={img7} className='rounded-lg object-cover shadow-lg p-4 w-full min-h-[180px] max-h-80 lg:h-full ' alt="" />
                        <div className='bg-black px-6 py-4 bg-opacity-30 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200'>
                            <div className='absolute bottom-6'>
                                <p className='text-xl font-semibold'>Doctor Strange</p>
                            </div>
                        </div>
                    </div>

                    <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                        <img src={img8} className='rounded-lg object-cover shadow-lg p-4 w-full min-h-[180px] max-h-80 lg:h-full ' alt="" />
                        <div className='bg-black px-6 py-4 bg-opacity-30 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200'>
                            <div className='absolute bottom-6'>
                                <p className='text-xl font-semibold'>Spider Man</p>
                            </div>
                        </div>
                    </div>

                    <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                        <img src={img6} className='rounded-lg object-cover shadow-lg p-4 w-full min-h-[180px] max-h-80 lg:h-full ' alt="" />
                        <div className='bg-black px-6 py-4 bg-opacity-30 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200'>
                            <div className='absolute bottom-6'>
                                <p className='text-xl font-semibold'>Lego Fighter</p>
                            </div>
                        </div>
                    </div>

                    <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                        <img src={img10} className='rounded-lg object-cover shadow-lg p-4 w-full min-h-[180px] max-h-80 lg:h-full ' alt="" />
                        <div className='bg-black px-6 py-4 bg-opacity-30 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200'>
                            <div className='absolute bottom-6'>
                                <p className='text-xl font-semibold'>Marvel Box</p>
                            </div>
                        </div>
                    </div>
                    <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                        <img src={img11} className='rounded-lg object-cover shadow-lg p-4 w-full min-h-[180px] max-h-80 md:h-full ' alt="" />
                        <div className='bg-black px-6 py-4 bg-opacity-30 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200'>
                            <div className='absolute bottom-6'>
                                <p className='text-xl font-semibold'>Joker</p>
                            </div>
                        </div>
                    </div>
                    <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                        <img src={img12} className='rounded-lg object-cover shadow-lg p-4 w-full min-h-[180px] max-h-80 lg:h-full ' alt="" />
                        <div className='bg-black px-6 py-4 bg-opacity-30 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200'>
                            <div className='absolute bottom-6'>
                                <p className='text-xl font-semibold'>Roboto </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;