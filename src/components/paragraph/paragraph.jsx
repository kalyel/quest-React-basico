const Paragraph = ({color='#ffffff', text='Coloque um texto'}) => {
    return <p className="textTransformed" style={{color: color, textTransform: 'uppercase'}}>{text}</p>
}

export default Paragraph