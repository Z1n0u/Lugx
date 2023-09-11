import './Header.css'

import { useEffect, useState } from 'react'

import logo from '../../assets/images/logo.png'
import Button from '../../components/Button/Button'
import HamMenu from '../../components/Button/HamMenu'


const Header = () => {
    const [button,setbutton]= useState(true);
    const [click,setclick]=useState(false);
    const [navbar,setnavbar]= useState(false);

    const showSingButton=()=>{
        if(window.innerWidth <=960){
            setbutton(false)
        }
        else{
            setbutton(true)
        }
    }

    useEffect(()=>{
        showSingButton();
    } ,[])

    // useEffect( ()=>{
    //     activatenavitem.classList.add("nav_item_active")
    // },[clicknavitem])
    
    window.addEventListener('resize',showSingButton)
    // const activatenavitem = document.querySelector("nav_items")

    const changeNavbackground = ()=>{
        if (window.scrollY >= 100){
            // console.log(window.screenY)
            setnavbar(true)
        }
        else{
            setnavbar(false)
        }
    }

    window.addEventListener("scroll",changeNavbackground)

    return (
        <nav className={!navbar ? 'nav' : 'nav active'}>
         <div className='nav_container'>
            <img src={logo} alt='logo' className='nav_logo'></img>
            <ul className={!click ? 'nav_list' : 'nav_list_mobile'}>
                <li  className='nav_list_item'>
                    <a href='home' className="nav_link active" >Home</a>
                </li>
                <li className='nav_list_item'>
                    <a href='' className='nav_link'>Our Shop</a>
                </li>
                <li className='nav_list_item'>
                    <a href='' className='nav_link'>Product Details</a>
                </li>
                <li className='nav_list_item'>
                    <a href='' className='nav_link'>Contact Us</a>
                </li>
                <li className='nav-item-mobile nav_list_item'> <a href='' className='nav_link'> Sign In</a></li>
                {button && <Button buttonStyle={'btn btn-primary'} buttonSize={'btn-mid'}>Sign in</Button>}
            </ul>
            <HamMenu onclick={()=>click ? setclick(false) : setclick(true)}/>
         </div>
        </nav>
        
    )
}

export default Header;