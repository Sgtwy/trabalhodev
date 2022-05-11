import './styles.css'

import React, { useState } from 'react'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'

import { message, Form, Button, InputNumber } from 'antd';


export default function AdicionarProduto() {

    const history = useHistory()

    const [disabled, setDisabled] = useState(false)


    async function handleSubimit(produto) {
        setDisabled(true)
        api.post('/item', produto)
            .then((response) => {
                if (response.status === 201) {
                    message.success('Produto adicionado com sucesso!', 5, true);
                    history.push('/produto')

                }
            })
            .catch((err) => {
                message.warning("Erro ao adicionar o produto " + err.response.data.menssage)
            })
    }
    return (
        <div className='produto_container'>
            <h1>Adicionar novo produto</h1>
            <br />
            <div className='produto_card_container'>
                <Form
                    name='basic'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={handleSubimit}
                    autoComplete="off"
                >
                    <Form.Item
                        label='Nome do item'
                        name="name"
                        rules={[{ required: true, message: "o nome do item não pode ser vazio" }]}
                    >
                        <input />
                    </Form.Item>

                    <Form.Item
                        label='Descrição'
                        name="description"
                        rules={[{ required: true, message: "Insira a descrição do item" }]}
                    >
                        <input />
                    </Form.Item>

                    <Form.Item
                        label='Quantidade'
                        name="quantity"
                        rules={[{ required: true, message: "Insira a quantidade" }]}
                    >
                        <InputNumber />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type='primary' htmlType='submit' disabled={disabled}>
                            Adicionar
                        </Button>
                    </Form.Item>



                </Form>


            </div>
        </div>
    )
}