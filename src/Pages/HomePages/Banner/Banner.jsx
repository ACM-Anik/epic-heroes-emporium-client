import banner1 from '../../../assets/banner/banner-1.jpeg'
import banner2 from '../../../assets/banner/banner-2.webp'
import banner3 from '../../../assets/banner/banner-3.jpg'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Banner = () => {


    return (
        <div className="slide-container rounded">
            <Fade>
                <div className='rounded'>
                    <img className='relative rounded object-cover h-[400px] md:h-[600px] ' style={{ width: '100%' }} src={banner2} />

                    <div className="absolute flex items-center h-full left-0 top-0 rounded bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                        <div className='text-white space-y-7 w-5/6 lg:w-1/2 pl-20'>
                            <h2 className='text-4xl md:text-6xl lg:text-7xl font-bold'>Unleash the Power of Imagination!</h2>
                            <p className='text-base'>Step into a World of Action and Adventure at Action Figure Toys Emporium - Where Imagination Comes to Life!</p>
                            <div className='flex justify-start items-center gap-2'>
                                <button className='btn text-white rounded-lg border-0 bg-[#FF0000] hover:bg-[#cb0707]'>Explore All</button>
                                <button className='btn btn-outline text-white rounded-lg border-[#FF0000]  hover:bg-[#cb0707]'>Contact Us</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='rounded'>
                    <img className='relative object-cover rounded h-[400px] md:h-[600px] ' style={{ width: '100%'}} src={banner1} />

                    <div className="absolute flex items-center h-full left-0 top-0 rounded bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                        <div className='text-white space-y-7 w-5/6 lg:w-1/2 pl-20'>
                            <h2 className='text-4xl md:text-6xl lg:text-7xl font-bold'>Unleash the Power of Imagination!</h2>
                            <p className='text-base'>Step into a World of Action and Adventure at Action Figure Toys Emporium - Where Imagination Comes to Life!</p>
                            <div className='flex justify-start items-center gap-2'>
                                <button className='btn text-white rounded-lg border-0 bg-[#FF0000] hover:bg-[#cb0707]'>Explore All</button>
                                <button className='btn btn-outline text-white rounded-lg border-[#FF0000]  hover:bg-[#cb0707]'>Contact Us</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='rounded'>
                    <img className='relative object-cover rounded h-[400px] md:h-[600px] ' style={{ width: '100%'}} src={banner3} />

                    <div className="absolute flex items-center h-full left-0 top-0 rounded bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                        <div className='text-white space-y-7 w-5/6 lg:w-1/2 pl-20'>
                            <h2 className='text-4xl md:text-6xl lg:text-7xl font-bold'>Unleash the Power of Imagination!</h2>
                            <p className='text-base'>Step into a World of Action and Adventure at Action Figure Toys Emporium - Where Imagination Comes to Life!</p>
                            <div className='flex justify-start items-center gap-2'>
                                <button className='btn text-white rounded-lg border-0 bg-[#FF0000] hover:bg-[#cb0707]'>Explore All</button>
                                <button className='btn btn-outline text-white rounded-lg border-[#FF0000]  hover:bg-[#cb0707]'>Contact Us</button>
                            </div>
                        </div>
                    </div>

                </div>
            </Fade>
        </div>
    );
};

export default Banner;