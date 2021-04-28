import GlobalStateContext from '../Global/GlobalStateContext'
import { CloseAlert, ContainerButtonFloat} from '../Styles/style'
import React, {useContext} from 'react';

export const useAlert = (text) => {
    let { states, setters } = useContext(GlobalStateContext)

    const closeAlert = () => {
        setters.setAlert(false)
    }

    const alert = () => {
        if (states.alert) {
            return (
                <ContainerButtonFloat alert>
                    ✅ {text}
                    <CloseAlert onClick={() => { closeAlert() }}> X </CloseAlert>
                </ContainerButtonFloat>
            )
        }
    }
    return [alert]
}