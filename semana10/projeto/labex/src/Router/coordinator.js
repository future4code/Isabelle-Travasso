export const goToHomePage = (history) => {
    history.push('/')
}

export const goToHomeAdmin = (history) => {
    history.push('/admin/trips/list')
}

export const goToTripList = (history) => {
    history.push('/trips/list')
}

export const goToTripCreate = (history) => {
    history.push('/admin/trips/create')
}

export const goToTripDetails = (history) => {
    history.push('/admin/trips/id')
}

export const goToLogin = (history) => {
    history.push('/login')
}

export const goToApplicationPage = (history) => {
    history.push('/trips/application')
}

export const gotToLastPage = (history) => {
    history.goBack()
}