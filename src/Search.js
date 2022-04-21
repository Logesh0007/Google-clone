import React, { useState } from 'react'
import './Search.css'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material'

function Search() {
    const [input, setInput] = useState('')

    return (
        <form className='search' action='https://www.google.com/search?' autoComplete='off'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon' />
                <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='Search Google or type a URL' name='q' />
                <KeyboardVoiceIcon className='search__inputMic' />
            </div>
            <div className="search__buttons">
                <Button type='submit' variant='outlined'>Google Search</Button>
                <Button variant='outlined'>I'm Feeling Lucky</Button>
            </div>
        </form>
    )
}

export default Search