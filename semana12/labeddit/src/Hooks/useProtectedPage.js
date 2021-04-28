import { useEffect } from 'react'
import { useHistory } from "react-router";
import { goToLogin } from '../Router/coordinator';

export const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem('token')

        if (!token) {
            goToLogin(history)
        }
    }, [history])

}

export default useProtectedPage