import './button.css'
const Button = ({ label = 'Clique Aqui' }) => {
    const labelMessage = () => {
        return (
            alert('A label desse botão é ' + label)
        )
    }
    return <button className='btn' onClick={labelMessage}>{label}</button>
}

export default Button