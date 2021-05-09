import { Route, Switch } from "react-router-dom";
import RegisterPage from '../Pages/Public/RegisterPage'
import PostsPage from '../Pages/Private/PostsPage'
import FeedPage from '../Pages/Private/FeedPage'
import LoginPage from '../Pages/Public/LoginPage'
import ErrorPage from '../Pages/Public/ErrorPage'
import CommentPage from '../Pages/Private/CommentPage'

function Router() {
    return (

        <Switch>
            <Route exact path='/'>
                <LoginPage />
            </Route>

            <Route exact path='/signup'>
                <RegisterPage />
            </Route>

            <Route exact path='/feed'>
                <FeedPage />
            </Route>

            <Route exact path='/add/post'>
                <PostsPage />
            </Route>

            <Route exact path='/post/:postId'>
                <CommentPage />
            </Route>

            <Route>
                <ErrorPage />
            </Route>

        </Switch>

    )
}

export default Router