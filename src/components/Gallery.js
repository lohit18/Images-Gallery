import {useEffect, useState} from 'react';
import axios from 'axios';
import Images from './Images';


const Gallery = () => {
    const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
    const [search, setSearch] = useState('Random Images');
    const [data, setData] = useState([]);
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(()=>{
        refresh()
    },[])
    const refresh = () => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
            res => setData(res?.data?.photos?.photo))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        refresh()
    }

    return(
        <div>
        <h1>Images <span>G</span>allery</h1>
         <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search Here"  onChange={handleChange} className='txt'/>
            <input type="submit" name="search" className='btn'/>
            <h2><span>Result of </span> : {search}</h2>
        </form>
        
        {
            data.length >=1 ? <Images data = {data}/> : <h2>Loading...</h2>
        }
        </div>
    )
};

export default Gallery;