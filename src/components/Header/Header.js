import './Header.css'
import logo from '../../assets/images/logo.png'
import Navitem from '../Navitem/Navitem'

const Header = () => {
    return (
        <div className='nav_container'>
            <img src={logo} alt='logo' className='nav_logo'></img>
            <ul className='nav_list'>
                <Navitem>
                    <a href=''>Home</a>
                </Navitem>
                <Navitem>
                    <a href=''>Our Shop</a>
                </Navitem>
                <Navitem>
                    <a href=''>Product Details</a>
                </Navitem>
                <Navitem>
                    <a href=''>Contact Us</a>
                </Navitem>
                <Navitem>
                    <a href=''>SIGN IN</a>
                </Navitem>
            </ul>

        </div>
    )
}

export default Header;