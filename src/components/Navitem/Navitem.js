import './Navitem.css'

const Navitem = (props) => {
    return (
        <li className='nav_list_item'>{props.children}</li>
    )
}

export default Navitem