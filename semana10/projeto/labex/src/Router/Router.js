import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ListTripsPage from '../pages/ListTripsPage'
import CreateTripPage from '../pages/CreateTripPage'
import ApplicationFormPage from '../pages/AdminHomePage'
import LoginPage from '../pages/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage'
import ErrorPage from '../pages/ErrorPage'
import AdminHomePage from "../pages/AdminHomePage";
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

                <Route exact path='admin/trips/list'>
                    <Header />
                    <AdminHomePage />
                </Route>

                <Route exact path='admin/trips/create'>
                    <Header />
                    <CreateTripPage />
                </Route>

                <Route exact path='admin/trips/:id'>
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