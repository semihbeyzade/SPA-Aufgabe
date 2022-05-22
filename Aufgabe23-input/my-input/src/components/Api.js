import axios from 'axios'
import { useEffect, useState } from "react"
const Api = () => {
    const apiKey = 'e9a52710e7a3d2c9da91287969102a28'
    //const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=' + apiKey
    /* const api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric` */
    const [data, setData] = useState({})
    const [search, setSearch] = useState('Berlin')
    const [input, setInput] = useState("")

 
   
    useEffect(() => {
      const fetchWeather = async () => {
          const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric` )
          
            setData(await response.json())
            console.log(data);
          
         
      }
      fetchWeather();
    }, [search])

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(input);
    }

   
   
    let iconurl = "http://openweathermap.org/img/w/" + "04d" + ".png"
  /*   data.weather[0].icon */
    
    return (
        <div className='api'>
            <div>
                <form onSubmit={handleSubmit} >
                <input  onChange={(e) => setInput(e.target.value)} type='search' name="search" value={input} placeholder="Search City" className='input-api' />
                <button type='submit' >Click</button>
                </form>
                <p>{data.name}</p>
                <p>{data.main ? data.main.temp : ""} °C</p>
                <img src={data.weather ? ("http://openweathermap.org/img/w/" + data.weather[0].icon + ".png" ) : ""} />
            
                
              
            </div>
        </div>
    )
}
export default Api