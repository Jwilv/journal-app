import React from 'react'

export const PublicRouter = ({ children }) => {

    const { uid } = useSelector(state => state.ui)

    return (!uid)
        ? children
        : <Navigate to={'/'} />
}

PublicRouter.propTypes = {
    children: PropTypes.element.isRequired,
}