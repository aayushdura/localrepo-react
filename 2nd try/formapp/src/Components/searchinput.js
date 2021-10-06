import React, { useState } from "react";
import './searchinput.css'
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = () => {
    const [entry, setEntry] = useState('');
   
       return (
        <div>
            <form className="formsearch" onSubmit={(event)=>event.preventDefault()}>
            <div className="searchcontainer">
                <TextField id="search" label="Search"
                    variant="outlined" className="searchbar"
                    onChange={(event)=>setEntry({entry:event.target.value.toUpperCase()})} 
                     />
                  {console.log(entry)}
                <Button
                    variant="contained" type="submit"
                    className="btn"><SearchIcon className="scicon" /></Button>
            </div>
            </form>
        </div>
    )
}
export default SearchInput;