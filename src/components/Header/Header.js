import './Header.css'
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <div className='nav_container'>
            <img src={logo} alt='logo' className='nav_logo'></img>
            <ul className='nav_list'>
                <li className='nav_list_item'>
                    <a href=''>Home</a>
                    <a href=''>Our Shop</a>
                    <a href=''>Product Details</a>
                    <a href=''>Contact Us</a>
                    <a href=''>SIGN IN</a>
                </li>
            </ul>

        </div>
    )
}

export default Header;