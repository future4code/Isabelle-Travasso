import { baseUrl } from '../parameters'
import axios from 'axios';
import React from 'react';
import '../App.css';

class Options extends React.Component {
    state = {
        sign: [{
            id: '1',
            name: "aquario",
        },
        {
            id: '2',
            name: "peixes",
        },
        {
            id: '3',
            name: "aries",
        },
        {
            id: '4',
            name: "touro",
        },
        {
            id: '5',
            name: "gemeos",
        },
        {
            id: '6',
            name: "cancer",
        },
        {
            id: '7',
            name: "leao",
        },
        {
            id: '8',
            name: "virgem",
        },
        {
            id: '9',
            name: "libra",
        },
        {
            id: '10',
            name: "escorpiao",
        },
        {
            id: '11',
            name: "sagitario",
        },
        {
            id: '12',
            name: "capricornio",
        },
        ],
        signText: [],
        signName: ''
    }

    getSign = async () => {
        const res = await axios.get(`${baseUrl}/${this.state.signName}/dia`)
        this.setState({ signText: res.data });
        console.log(res.data)
    }

    handleSelectChange = (e) => {
        this.setState({ signName: e.target.value },
            () => {
                this.getSign()
            }
        )
    }


    render() {

        const signList = this.state.sign.map((signs) => {

            return <option key={signs.id} value={signs.name}>{signs.name}</option>

        })

        return (
            <div>
                <h1> ** Horóscopo diário **</h1>
                <select onChange={this.handleSelectChange}>
                    <option>Selecione seu signo</option>
                    {signList}
                </select>
                <br />
                <hr />
                <div>
                    <h4>{this.state.signText.signo}</h4>
                    <p>Descrição do dia: </p>
                    <p>{this.state.signText.texto}</p>
                    <p>Autor: </p>
                    <p>{this.state.signText.autor}</p>
                    <a href={this.state.signText.urlOrigem}>Site de origem</a>
                </div>

            </div>
        )
    }


}

export default Options