import React, { useEffect, useState } from "react";
import api from '../../services/api'


import { useParams, useHistory } from "react-router-dom";
import './styles.css'

import { Button, Card, message, Modal } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';



export default function DetalhesProduto() {

    const [produto, setProduto] = useState([])
    const history = useHistory()

    let { id } = useParams();


    const { confirm } = Modal;

    function showConfirm(produto) {
        confirm({
            title: 'Você confirma a exclusão do item?',
            icon: <ExclamationCircleOutlined />,
            content: produto.name,
            onOk() {
                handleDelete(produto.id)
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    function handleDelete(Id) {
        api.delete(`/item/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    message.success("Produto foi excluído com sucesso!")
                    history.push('/produto')
                }
            })

            .catch((err) => {
                message.error("Aconteceu um erro inesperado" + err)
            })

    }

    useEffect(() => {
        api.get(`/item/${id}`)
            .then((response) => {
                setProduto(response.data)
            })
            .catch((err) => {
                message.error("Aconteceu um erro inesperado")
            })
    }, [])


    return (
        <div className="produto_container">
            <h1> Detalhes do produto</h1>
            <br />
            <div className="produto_card_container">
                <Card Key={produto.id} title={produto.name} bordered={false}>
                    <p> Id: {produto.id}</p>
                    <p>UpdateAt: {produto.updatedAt}</p>
                    <p>Descrição: {produto.description}</p>
                    <p>Quantidade: {produto.quantity}</p>
                    <Button type="primary"  onClick={() => history.push(`/editar/${produto.id}`, produto)}>Editar produto</Button>
                    <Button type="primary" danger onClick={() => showConfirm(produto)}>excluir produto</Button>

                </Card>
            </div>
        </div>
    )

}