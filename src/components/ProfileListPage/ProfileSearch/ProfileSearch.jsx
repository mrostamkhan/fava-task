import { useState } from 'react';
import './ProfileSearch.css'

const ProfileSearch = ({ onSearch }) => {

    const [term, setTerm] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        onSearch({ term });
    }

    const clearSearch = () => {
        setTerm(() => {
            onSearch({ term:'' });
            return '';
        });
    }

    return (
        <form className="form__sec" onSubmit={submitForm}>
            <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Search Users" />
            <button type="submit" className="btn-primary">Submit</button>
            <button type="button" onClick={clearSearch} className="btn-ghost">Clear</button>
        </form>
    )
}

export default ProfileSearch