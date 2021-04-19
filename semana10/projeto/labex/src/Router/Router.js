import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/public/HomePage";
import ListTripsPage from '../pages/public/ListTripsPage'
import CreateTripPage from '../pages/private/CreateTripPage'
import ApplicationFormPage from '../pages/public/ApplicationFormPage'
import LoginPage from '../pages/public/LoginPage'
import TripDetailsPage from '../pages/private/TripDetailsPage'
import ErrorPage from '../pages/public/ErrorPage'
import AdminHomePage from "../pages/private/AdminHomePage";
import Header from '../Component/Header'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>

                <Route exact path='/trips/list'>
                    <Header />
                    <ListTripsPage />
                </Route>

                <Route exact path='/trips/application'>
                    <Header />
                    <ApplicationFormPage />
                </Route>

                <Route exact path='/login'>
                    <Header />
                    <LoginPage />
                </Route>

                <Route exact path='/admin/trips/list'>
                    <Header />
                    <AdminHomePage />
                </Route>

                <Route exact path='/admin/trips/create'>
                    <Header />
                    <CreateTripPage />
                </Route>

                <Route exact path='/admin/trips/:id'>
                    <Header />
                    <TripDetailsPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router