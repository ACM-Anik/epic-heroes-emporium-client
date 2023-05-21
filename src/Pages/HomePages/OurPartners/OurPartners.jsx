import partner1 from '../../../assets/Companies/avengers-logo.webp';
import partner2 from '../../../assets/Companies/DC-logo.webp';
import partner3 from '../../../assets/Companies/marvel_logo.webp';
import partner4 from '../../../assets/Companies/disnep-logo.webp';
import partner5 from '../../../assets/Companies/aniem-logo.avif';
import partner6 from '../../../assets/Companies/heman-logo.avif';

const OurPartners = () => {
    return (
        <div className='my-16'>
            <div className='text-center my-10'>
                <h2 className='text-5xl font-bold'>Our Partners</h2>
            </div>
            <div className='grid grid-cols-6 gap-3'>
                <div><img src={partner1} alt="" className='border-2 shadow rounded-lg hover:border-red-200' /></div>
                <div><img src={partner2} alt="" className='border-2 shadow rounded-lg hover:border-red-200' /></div>
                <div><img src={partner3} alt="" className='border-2 shadow rounded-lg hover:border-red-200' /></div>
                <div><img src={partner4} alt="" className='border-2 shadow rounded-lg hover:border-red-200' /></div>
                <div><img src={partner5} alt="" className='border-2 shadow rounded-lg hover:border-red-200' /></div>
                <div><img src={partner6} alt="" className='border-2 shadow rounded-lg hover:border-red-200' /></div>
            </div>
        </div>
    );
};

export default OurPartners;