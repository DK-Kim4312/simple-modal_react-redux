import React from 'react';
import { useDispatch } from 'react-redux';
import { OPEN_MODAL } from '../../reducer/modal';

export default function OpenModalButton() {

    const dispatch = useDispatch();

    const openModal = () => {
        dispatch({ type: OPEN_MODAL });
    }

    return (
        <button 
            onClick={openModal}
            >open modal</button>

    )
}