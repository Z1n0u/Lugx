import './HamMenu.css'

export default function HamMenu({onclick}) {


  return (
    <input type="checkbox" role="button" aria-label="Display the menu" className="menu" onClick={onclick}></input>
  )
}
