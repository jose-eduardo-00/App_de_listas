import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { getItens } from '../../services/services'
import { ItemList } from '../../components/itemList/itemList'
import { ButtonAdd } from '../../components/buttonAdd/buttonAdd'
import { AddIten } from '../../components/addIten/addIten'
import { addTotalValue } from './utils'
import './list.scss'


const itensList = await getItens()

const List = () => {
    const id = useParams()
    const [valorTotal] = useState(addTotalValue(id, itensList))

    if (!id.historic) {
        return (
            <section className='list'>
                <div className='div-list'>
                    <header className="header-list">
                        <Link to={'/'} className='back-page'>Voltar</Link>
                        <h1>Lista de Compras</h1>
                    </header>
                    <div className='div-item-list'>
                        <ItemList id={id} />
                        <div className='add'>
                            <ButtonAdd />
                        </div>
                    </div>
                </div>
                <AddIten id={id} />
                <footer className="footer-list">
                    <h1>Total: {valorTotal}</h1>
                </footer>
            </section>
        )
    } else {
        return (
            <section className='list'>
                <div className='div-list'>
                    <header className="header-list">
                        <Link to={'/historic'} className='back-page'>Voltar</Link>
                        <h1>Lista de Compras Histórico</h1>
                    </header>
                    <div className='div-item-list'>
                        <ItemList id={id} />
                    </div>
                </div>
                <footer className="footer-list">
                    <h1>Total: {valorTotal}</h1>
                </footer>
            </section>
        )
    }
}

export { List }