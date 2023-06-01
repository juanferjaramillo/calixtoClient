import { useState } from "react"
import style from "../../components/card/card.module.css"

const Test = () => {
  const [side, setSide] = useState(true)
  
  return (
  <div
  className={side ? style.frontCard : style.backCard}
  onClick = {()=>setSide(!side)}
  >
  {side ? <h3>hola</h3> : <h3>bye</h3> }
  </div>
  )
}
export default Test;