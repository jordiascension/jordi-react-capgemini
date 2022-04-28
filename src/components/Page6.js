import React, {Fragment, useState} from 'react';

const Page6 = () => {


    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        alert('enviando datos...' + datos.nombre +
         ' ' + datos.apellido);
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
    }

    return (
        <Fragment>
            <div className="Page6">
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>             
                <div class="form-group">
                    <label for="nombre">Nombre</label>
                    <input type="text" placeholder="Nombre" className="form-control"
                     onChange={handleInputChange} name="nombre" id="nombre"></input>
                </div>
                <div class="form-group">
                    <label for="apellido">Apellido</label>
                    <input type="text" placeholder="Apellido" className="form-control" 
                    onChange={handleInputChange} name="apellido" id="apellido"></input>
                </div>
                <div>&nbsp;</div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <ul>
                <li>{datos.nombre}</li>
                <li>{datos.apellido}</li>
            </ul>
            </div>
        </Fragment>
    );
}
 
export default Page6;
