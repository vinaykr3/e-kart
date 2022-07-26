import { useDispatch } from 'react-redux';
import Search from '../Search/Search';
import HamBergger from './HamBergger'
import Navbar from './Navbar';
import { OpenMenuAction } from '../../Redux/Actions/OpenMenu.Action';

const Header = () => {
    const dispatch = useDispatch()
    return (
        <div className='sticky top-0 xl:px-[70px] xl:py-10 bg-transparent'>
            <div className='bg-white py-10 px-5 flex justify-between rounded-md'>
                <div className='img-hamberger flex justify-between xl:items-center xl:w-full'>
                    <div className='left hamberger'><HamBergger bg={'bg-black'} /></div>
                    <div className="image ml-3 md:ml-10">
                        <img src="/images/logo-png.jpg" alt="logo-img" className='w-48 xl:w-full' />
                    </div>
                    <div className='navbar hidden xl:flex items-center'>
                        <Navbar />
                        <div className="search-setting-cart xl:flex xl:justify-between">
                            <Search />
                        </div>
                    </div>

                </div>
                <div className='md:flex md:justify-between md:space-x-4'>
                    <div className='xl:hidden' onClick={() => { dispatch(OpenMenuAction()) }}>
                        <HamBergger bg={'bg-green-400'} />
                    </div>
                    <div className="search-setting-cart hidden md:flex md:justify-between xl:hidden">
                        <Search />
                    </div>
                </div>
            </div>
            <div className='xl:hidden'>
                <Navbar />
            </div>

        </div>
    )
}

export default Header;