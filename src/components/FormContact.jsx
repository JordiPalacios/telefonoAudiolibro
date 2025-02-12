import { useState } from 'react'
import { NewPage } from './NewPage'

export const FormContact = () => {
    const [tipoEvento, setTipoEvento] = useState('')
    const [producto, setProducto] = useState('')

    const handleChange = (event) => {
        setTipoEvento(event.target.value)
    }

    const handleChangeProducto = (event) => {
        setProducto(event.target.value)
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity('Campo Obligatorio')
    }

    const handleInput = (e) => {
        e.target.setCustomValidity('')
    }

return (
    <form action="https://formspree.io/f/xoqbbbvn" method="post">
        <label>
            <input 
            required 
            onInput={handleInput} 
            onInvalid={handleInvalid} 
            type="text" 
            name='Nombre Cliente' 
            placeholder='N O M B R E    *' />
        </label>
        <label>
            <input 
            required 
            onInput={handleInput} 
            onInvalid={handleInvalid} 
            type="text" 
            name='DNI' 
            placeholder='D N I    *' />
        </label>
        <label>
            <input 
            required 
            onInput={handleInput} 
            onInvalid={handleInvalid} 
            type="text" 
            name='Direccion Envio' 
            placeholder='D I R E C C I O N    E N V I O    *' />
        </label>
        <label>
            <input 
            required 
            onInput={handleInput} 
            onInvalid={handleInvalid} 
            type="text" 
            name='Numero Cliente' 
            placeholder='D I R E C C I O N    R E C O G I D A    *' />
        </label>
        <label htmlFor='fechaEvento'>
            F&nbsp;E&nbsp;C&nbsp;H&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;E&nbsp;V&nbsp;E&nbsp;N&nbsp;T&nbsp;O&nbsp;&nbsp;:
            <input 
            required 
            onInput={handleInput} 
            onInvalid={handleInvalid} 
            type="date" 
            name='Fecha Evento'  
            id='fechaEvento'/>
        </label>
        <div className='checkBoxContainer'>
            <label htmlFor='miCheckbox'>
                <input 
                required 
                id='miCheckbox' 
                name="Permiso Envio Correos" 
                type="checkbox"  hidden/>
                <span className='checkbox'></span>
            </label>
            <label className="checkBoxText">
                He leído y acepto la <NewPage href="/politica-privacidad" label="Politica de Privacidad" />
            </label>
        </div>
        <h3>Recuerda, este link caduca en 24 horas, una vez finalizado, la fecha volverá a estar dispnible para otra pareja</h3>
        <p>Poner que el botón aparte de enviar el formulario nos lleve al link de stripe con el producto</p>
        <button id='EnviarFormularioTelefonoAudiolibro' aria-label='Se enviará el formulario'  type="submit">Enviar</button>
        <p>*Una vez recibida la reserva, os enviaré el contrato en 24h por WhatsApp</p>
        <p>Programar una cuenta atrás que cada vez que entren salga la cuenta atrás restando los minutos (necsitare las cookies para esto) </p>
    </form>
)
}
