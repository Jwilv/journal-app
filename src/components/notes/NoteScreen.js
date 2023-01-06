import React from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { NotesAppbar } from './NotesAppbar'

export const NoteScreen = () => {

    const { active: note } = useSelector(state => state.notes)
    const [values, handleInputChanGet] = useForm(note)
    const { title, body, url } = values;

    return (
        <div className='note__main-content'>
            <NotesAppbar />
            <div className='note__content'>
                <input
                    type={'text'}
                    placeholder={'Title'}
                    className={'note__title-input'}
                    autoComplete={'off'}
                    name={title}
                    value={title}
                    onChange={handleInputChanGet}
                />
                <textarea
                    placeholder='What happened today ?'
                    className={'note__textarea'}>
                </textarea>

                {
                    (url)
                    && (
                        <div className='notes__images'>
                            <img src='https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg'
                                alt='img' />
                        </div>
                    )
                }
            </div>

        </div>
    )
}
