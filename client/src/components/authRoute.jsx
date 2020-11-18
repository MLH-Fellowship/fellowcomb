import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const AuthorizedRoute = ({ user: User, component: Component, ...rest }) => {

    return (
        <Route
            {...rest}
            render={props =>
                User ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='/auth' />
                )
            }
        />
    )
}

export default AuthorizedRoute;