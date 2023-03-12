import './NavError.css'
import ErrorIcon from './Img/ErrorIcon.png'

export default function NavError() {
    return (
        <div className='Error-Container'>
            <h1 className='Error-Message'>Sorry, we coudn't find the page!</h1>
            <img src={ErrorIcon} className='Error-Icon' />
        </div>
    )
}