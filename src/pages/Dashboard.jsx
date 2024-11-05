import HeadingBanner from '../components/HeadingBanner';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    

    return (
        <div className=''>
            <div className=''>
                <HeadingBanner title='Dashboard' button={["Cart", "Wishlist"]} height='lg:h-[280px]'></HeadingBanner>
            </div>
            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;