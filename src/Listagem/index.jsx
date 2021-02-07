import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap'
import Formulario from '../Formulario'

const ListarUsuarios = () => {

    const [modal, setModal] = useState(false)

    const abrirModal = () => (setModal(true))


    return (
        <Fragment>
            <Formulario isOpen={modal} setIsOpen={setModal}/>
            <Button color="primary" name='modal' onClick={abrirModal}>Novo</Button>
        </Fragment>
    )
}

export default ListarUsuarios;