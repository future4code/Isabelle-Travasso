import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterPage from '../Pages/Public/RegisterPage'
import PostsPage from '../Pages/Private/PostsPage'
import FeedPage from '../Pages/Private/FeedPage'
import LoginPage from '../Pages/Public/LoginPage'
import ErrorPage from '../Pages/Public/ErrorPage'
import Header from '../Components/Header'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Header />
                    <LoginPage />
                </Route>

                <Route exact path='/signup'>
                    <Header />
                    <RegisterPage />
                </Route>

                <Route exact path='/feed'>
                    <Header />
                    <FeedPage />
                </Route>

                <Route exact path='/add/post'>
                    <Header />
                    <PostsPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router