import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap'
import Formulario from '../Formulario'
import api from '../services/api'

const ListarUsuarios = () => {

    const [modal, setModal] = useState(false)
    const [meusDados, setMeusDados] = useState([])

    const abrirModal = () => (setModal(true))

    const carregarUsuarios = async () => {

        const response = await api.get('/clientes');
        setMeusDados(response.data.dados)
        console.log(response)
    }

    return (
        <Fragment>
            <Formulario isOpen={modal} setIsOpen={setModal} />
            <Button color="primary" name='modal' onClick={abrirModal}>Novo</Button>
            <Button onClick={carregarUsuarios}>Carregar Usuarios</Button>
            <ul>
                {meusDados.map(dado => (<li>{dado.nome} - {dado.endereco}</li>))}
            </ul>

        </Fragment>
    )
}

export default ListarUsuarios;