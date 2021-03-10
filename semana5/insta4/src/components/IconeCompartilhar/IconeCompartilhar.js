import React from 'react'
import './iconeCompartilhar.css'

export function IconeSemContador(props) {
	return <div className={'icon-container-compartilhar'}>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
	</div>
}



