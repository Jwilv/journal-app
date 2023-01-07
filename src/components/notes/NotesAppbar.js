import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploadingFile } from '../../actions/notes'

export const NotesAppbar = () => {

    const dispatch = useDispatch();

    const { active: note } = useSelector(state => state.notes)

    const handleSave = () => {
        dispatch(startSaveNote(note))
    }
    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }
    const handleFileChange = (event) => {
        const file = event.target.files[0]
        if(file){
            dispatch(startUploadingFile(file));
        }
    }
    return (
        <div className='notes__appbar'>
            <span>otra vez en primera van a ver a papa</span>
            <input
                id={'fileSelector'}
                type={'file'}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <div>
                <button
                    className='btn'
                    onClick={handlePictureClick}
                >
                    Picture
                </button>
                <button
                    className='btn'
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    )
}
