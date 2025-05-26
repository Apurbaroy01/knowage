import profile from '../../../public/Img/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-2 mx-4 border-b-1' >
            <h1 className="text-4xl font-bold">Knowage Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;