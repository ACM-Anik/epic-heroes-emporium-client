import img1 from '../../../assets/gallery/galley-1.jpg';
import img2 from '../../../assets/gallery/gallery-2.jpg';
import img3 from '../../../assets/gallery/gallery-3.jpg';
import img4 from '../../../assets/gallery/gallery-4.jpg';
import img5 from '../../../assets/gallery/gallery-5.jpg';
import img6 from '../../../assets/gallery/gallery-6.png';
import img7 from '../../../assets/gallery/gallery-7.jpg';
import img8 from '../../../assets/gallery/gallery-8.jpg';
import img9 from '../../../assets/gallery/gallery-9.jpg';
import img10 from '../../../assets/gallery/gallery-10.jpg';

const Gallery = () => {
    return (
        <div className='container mx-auto p-6 my-16'>
            <div className="my-6 text-center">
                <h1 className="text-5xl font-bold my-2">Hero Gallery</h1>
                <p className='text-base font-semibold'>Explore our Epic Heroes Gallery, all famous and best seller epic toys we have.</p>
            </div>
            <div>
                <div className='grid lg:grid-cols-3 gap-4 lg:px-32'>
                    <img src={img1} className='rounded-lg object-cover shadow-lg p-4 w-full max-h-80 lg:h-full ' alt="" />
                    <img src={img2} className='rounded-lg object-cover shadow-lg p-4 w-full max-h-80 lg:h-full ' alt="" />
                    <img src={img3} className='rounded-lg object-cover shadow-lg p-4 w-full  lg:h-full row-span-2' alt="" />
                    <img src={img4} className='rounded-lg object-cover shadow-lg p-4 w-full max-h-80 lg:h-full' alt="" />
                    <img src={img5} className='rounded-lg object-cover shadow-lg p-4 w-full max-h-80 lg:h-full ' alt="" />
                    <img src={img9} className='rounded-lg object-cover shadow-lg p-4 w-full max-h-80 lg:h-full col-span-2' alt="" />
                    <img src={img7} className='rounded-lg object-cover shadow-lg p-4 w-full max-h-80 lg:h-full ' alt="" />
                    <img src={img8} className='rounded-lg object-cover shadow-lg p-4 w-full max-h-80 lg:h-full ' alt="" />
                    <img src={img6} className='rounded-lg object-cover shadow-lg p-4 w-full max-h-80 lg:h-full ' alt="" />
                    <img src={img10}className='rounded-lg object-cover shadow-lg p-4 w-full max-h-80 lg:h-full ' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;