import React, { useState } from "react";
import jobDescription from '../../../src/data';
import './career.css';
import img61 from '../images/it_monks_solutions_cover.jpeg';
import img62 from '../../../src/content/images/Frame 5 (7) 1.png';
import { Link } from 'react-router-dom';

function Career1() {
    const data = jobDescription;
    const [searchLocation, setSearchLocation] = useState('');
    const [searchTitle, setSearchTitle] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        const results = data.filter(job => 
            job.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
            job.title.toLowerCase().includes(searchTitle.toLowerCase())
        );
        setSearchResults(results);
    };

    return (
        <>
            <div className="navbar6">
                <div className="navcontent6 navcontent61" >CONTACT US</div>
                <div className="navcontent6">LOCATIONS</div>
                <div className="navcontent6">img</div>
                <div className="navcontent6">SAVED JOBS</div>
                <div className="navcontent6"></div>
                <div className="navcontent6"></div>
            </div>
            <hr />
            <div className="top6"> 
                <div className="topheading6">
                    <div className="topheading62"><img src={img62} alt="ims logo" className="img62"/></div>
                    <div className="topheading62"><h4>IT MONKS SOLUTIONS</h4></div>
                    <div className="topheading62"></div>
                    <div className="topheading62"></div>
                    <div className="topheading62 topheading621">Careers</div>
                </div>
                <div><img src={img61} alt="ims" className="img61"/></div>
            </div>

            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Enter location" 
                    value={searchLocation} 
                    onChange={e => setSearchLocation(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Enter job title" 
                    value={searchTitle} 
                    onChange={e => setSearchTitle(e.target.value)} 
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            <div className="datablock6">
                <div className="filter6"></div>
                <div className="job6">
                    <ul className="ul"> 
                        {searchResults.map(user => (
                            <li key={user.id} className="jobline">
                                {/* {user.id} */}<a href={user.id} className="apply">Apply</a><br />
                                Name: {user.location}, Age: {user.salary},
                                Description:{user.qualifications} 
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Career1;
