import React  from 'react'
import './Sidebar.css'
import SearchIcon from "@material-ui/icons/Search"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function Sidebar() {
    const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
    return (
        <div className="sidebar">
            <h4>Search for keyword</h4>
            <br />
            <div className="search">
                <SearchIcon className="search__icon" />
                <input placeholder="Filter course" type="text" />
            </div>
            <br />
            <br />
            <div className="categary__icon">
                <FormControl component="fieldset">
                    <FormLabel component="legend">Categary</FormLabel>
                    <RadioGroup aria-label="categary" name="categary" value={value} onChange={handleChange}>
                        <FormControlLabel value="all" control={<Radio />} label="All" />
                        <FormControlLabel value="computer" control={<Radio />} label="Computer" />
                        <FormControlLabel value="engineering" control={<Radio />} label="Engineering" />
                        <FormControlLabel value="mathematics" control={<Radio />} label="Mathematics" />
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
    )
}

export default Sidebar
