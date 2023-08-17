import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSidebarState } from '../../actions/sidebar';

export const FabSidebar = () => {

    const {active} = useSelector(state => state.sidebar)

    const dispatch = useDispatch()

    const handleClickMenu = () => {
        dispatch(setSidebarState(!active))
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={handleClickMenu}
        >
            <i className="fa-sharp fa-solid fa-bars"></i>
        </button>
    )
}
