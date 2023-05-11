import React, { useState } from 'react';

const Insert = ({ onSubmit }) => {
    const [colaborador, setColaborador] = useState({
        id: "{id.length + 1}",
        nombre: '',
        apellido: '',
        edad: '',
        email: '',
    }) 
    const handleChange = (e) => {
        setColaborador({
            ...colaborador,
            [e.target.id]: e.target.value,
        });
    };

    const saveColaborador = (e) => {
        e.preventDefault();
        if (colaborador.nombre.trim() === '' || colaborador.apellido.trim() === '' || colaborador.edad.trim() === '' || colaborador.email.trim() === '') {
            alert('Todos los campos son obligatorios');
            return;
        }
        onSubmit(colaborador);

    };

    return (
        <div className="container">
            {/* tabla para solicitar los campos */}
            <form onSubmit={saveColaborador}>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Edad</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombre"
                                        placeholder="Nombre"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text" 
                                        className="form-control"
                                        id="apellido"
                                        placeholder="Apellido"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="edad"
                                        placeholder="Edad"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button type="submit" className="btn btn-primary">
                    Guardar
                </button>
            </form>
        </div>
    );

};

export default Insert;