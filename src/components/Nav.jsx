const Nav = ({onSearchChange}) => {
    const handleSearchChange = (e) => {
       onSearchChange(e.target.value);
       console.log(e.target.value);
    }
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container justify-content-center mt-3">
                <a className="navbar-brand" href="/">Colaboradores</a>


                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" onChange={handleSearchChange}/>
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    );
}

export default Nav;