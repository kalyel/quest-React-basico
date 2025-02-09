import Paragraph from "../paragraph/paragraph";
import Button from "../button/button";
import './card.css'

const Card = () => {
    return (
        <div className="card">
            <Paragraph color='cyan' text='Quest React Básico'/>
            <Button label='Não clique aqui'/>
        </div>
    )
}

export default Card