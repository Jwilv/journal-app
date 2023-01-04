import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PrivateRouter = ({ children }) => {

    const { uid } = useSelector(state => state.ui)

    return (uid)
        ? children
        : <Navigate to={'/login'} />
}

PrivateRouter.propTypes = {
    children: PropTypes.element.isRequired,
}