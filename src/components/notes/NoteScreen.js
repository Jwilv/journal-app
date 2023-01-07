import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NotesAppbar } from './NotesAppbar'

export const NoteScreen = () => {

    const { active: note } = useSelector(state => state.notes)
    const [values, handleInputChanGet, reset] = useForm(note)
    const { title, body, } = values;

    const dispatch = useDispatch();

    const activeId = useRef(note.id);

    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note)
            activeId.current = note.id;
        }
    }, [reset, note])

    useEffect(() => {
        dispatch(activeNote(values.id, { ...values } ) );
    }, [values, dispatch])

    return (
        <div className='note__main-content'>
            <NotesAppbar />
            <div className='note__content'>
                <input
                    type={'text'}
                    placeholder={'Title'}
                    className={'note__title-input'}
                    autoComplete={'off'}
                    name={'title'}
                    value={title}
                    onChange={handleInputChanGet}
                />
                <textarea
                    placeholder='What happened today ?'
                    className={'note__textarea'}
                    name={'body'}
                    value={body}
                    onChange={handleInputChanGet}
                >
                </textarea>

                {
                    (note.url)
                    && (
                        <div className='notes__images'>
                            <img src={note.url}
                                alt='img' />
                        </div>
                    )
                }
            </div>

            <button className='btn btn-danger'>
                Delete
            </button>

        </div>
    )
}
