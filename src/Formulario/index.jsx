import React, { Fragment, useState } from 'react'
import { Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const Formulario = ({ isOpen, setIsOpen }) => {

    const [meuForm, setMeuForm] = useState({
        nome: '',
        email: '',
        fone: '',
        end: ''
    });

    const funcaoQueMuda = (event) => {
        const nome = event.target.name
        const valor = event.target.value

        setMeuForm({
            ...meuForm,
            [nome]: valor
        })
    }

    const onSubmit = () => {
        console.log(meuForm)
    }
    return (

        <Modal isOpen={isOpen} >
            <ModalHeader >Modal title</ModalHeader>
            <ModalBody>
                <Label>Nome</Label>
                <Input type='text' name={'nome'} onChange={funcaoQueMuda} value={meuForm.nome} />

                <Label>Email</Label>

                <Input type='text' name={'email'} onChange={funcaoQueMuda} value={meuForm.email} />

                <Label>Fone</Label>
                <Input type='text' name={'fone'} onChange={funcaoQueMuda} value={meuForm.fone} />

                <Label>Endereco</Label>
                <Input type='text' name={'end'} onChange={funcaoQueMuda} value={meuForm.end} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={onSubmit}>Do Something</Button>{' '}
                <Button color="secondary" onClick={() => setIsOpen(false)} >Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

export default Formulario;