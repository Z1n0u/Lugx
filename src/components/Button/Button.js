import './Button.css'

const Style = ['btn-primary']
const Size = ['btn-large', 'btn-mid','btn-small']     

const Button = ({children,type ,onclick , buttonStyle , buttonSize})=> {

    const checkbuttonStyle = Style.includes(buttonStyle) ? buttonStyle : Style[0]
    const checkbuttonSize = Size.includes(buttonSize) ? buttonSize : Size[1]

    return(
        <div className={`btn ${checkbuttonStyle} ${checkbuttonSize}`} onClick={onclick} typeof={type}>
            <a href=''>{children}</a>
        </div>
    )
}

export default Button