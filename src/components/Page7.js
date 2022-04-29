import React, {Fragment, useState} from 'react';
import axios from 'axios';

const Page7 = () => {


    const [datos, setDatos] = useState({
        baseImp: '',
        ppEmpresa: '',
        ppPersonaFisica: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = async (event) => {
        event.preventDefault()
        alert('enviando datos...' + datos.baseImp +
         ' ' + datos.ppEmpresa + ' ' + datos.ppPersonaFisica
         );
        console.log('enviando datos...' + datos.baseImp + ' ' + 
                    datos.ppEmpresa + ' ' + datos.ppPersonaFisica
                    )
        const res = await axios.post('https://capgemini-web-api-oriol.herokuapp.com/pension-plan/deduct?baseImp=' + 
        datos.baseImp + '&ppEmpresa=' + datos.ppEmpresa + '&ppPersonaFisica=' + datos.ppPersonaFisica)
        console.log(res.data)
        alert('El resultado de la desgravación es ' + res.data)
     
    
    }

    return (
        <Fragment>
            <div className="App">
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>             
                <div class="form-group">
                    <label for="baseImp">Base Imponible</label>
                    <input type="text" placeholder="Base Imponible" className="form-control"
                     onChange={handleInputChange} name="baseImp" id="baseImp"></input>
                </div>
                <div class="form-group">
                    <label for="ppEmpresa">Plan Pensiones Empresa</label>
                    <input type="text" placeholder="Plan Pensiones Empresa" className="form-control" 
                    onChange={handleInputChange} name="ppEmpresa" id="ppEmpresa"></input>
                </div>
                <div class="form-group">
                    <label for="ppPersonaFisica">Plan Pensiones Persona Física</label>
                    <input type="text" placeholder="Plan Pensiones Persona Física" className="form-control" 
                    onChange={handleInputChange} name="ppPersonaFisica" id="ppPersonaFisica"></input>
                </div>
                <div>&nbsp;</div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <ul>
                <li>{datos.baseImp}</li>
                <li>{datos.ppEmpresa}</li>
                <li>{datos.ppPersonaFisica}</li>
            </ul>
            </div>
        </Fragment>
    );
}
 
export default Page7;
