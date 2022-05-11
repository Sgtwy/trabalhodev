import { useHistory } from 'react-router-dom'
import './style.css'

import Logo from '../assets/tomato.png'
import { Button } from 'antd'

export default function Inicio(){

    const history = useHistory()

    async function listarProdutos(){
        // event.preventDefault();
        history.push('/produtos')
    }

    return(
        <div className='inicio__container'>
            <section>
                <img src={Logo} alt='logo' className='center'  />
                <br/>
                <Button className='center' onClick={listarProdutos}>Ver Produtos</Button>
            </section>
        </div>
    )
}