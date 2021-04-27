export const goToLogin = (history) => {
    history.push('/')
}

export const goToRegister = (history) => {
    history.push('/signup')
}

export const goToFeed = (history) => {
    history.push('/feed')
}

export const goToAddPosts = (history) => {
    history.push('/add/post')
}

export const goToComments = (history, postId) => {
    history.push(`/post/${postId}`)
}

export const gotToLastPage = (history) => {
    history.goBack()
}

