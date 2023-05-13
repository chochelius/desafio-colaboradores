
const List = ({ colaboradores, searchTerm = "" }) => {
    // mostrar los colaboradores en orden descendente
    const colaboradoresSorted = colaboradores.sort((a, b) => b.id - a.id);
    //filtra los colaboradores por nombre, apellido, edad o email
    const filteredColaboradores = colaboradoresSorted.filter((colaborador) =>
        colaborador.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        || colaborador.apellido.toLowerCase().includes(searchTerm.toLowerCase())
        || colaborador.edad.toString().includes(searchTerm.toLowerCase())
        || colaborador.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="container">
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
                        {filteredColaboradores.map((colaborador) => (
                            <tr key={colaborador.id}>
                                <td>{colaborador.nombre}</td>
                                <td>{colaborador.apellido}</td>
                                <td>{colaborador.edad}</td>
                                <td>{colaborador.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;