import { useState } from "react"
import { Weather } from "./interfaces/inteface";
import Swal from "sweetalert2";
import { IoIosCloseCircle } from "react-icons/io";

function App() {

  const KEY = import.meta.env.VITE_REACT_APP_KEY;

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<Weather>();


  const fetchApi = async () => {

    try {
      const response = await fetch(`http://api.weatherapi.com/v1//current.json?key=${KEY}&q=${city}`);
      if (response.status === 400) {

        setCity('');

        Swal.fire({
          title: 'Erro!',
          text: 'Cidade digitada inválida!',
          icon: 'error',
          confirmButtonText: 'Ok'
        });

        return;

      }
      const data = await response.json();
      setWeather(data);
    }
    catch (error) {
      console.log(error);
    }

  }

  const closeCard = () => {
    setCity('');
    setWeather(undefined);
  }

  return (
    <>

      <div className='h-screen flex items-center justify-center gap-8 flex-col bg-slate-200'>

        <h1 className="font-bold text-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">Weather APP</h1>

        <div className="flex gap-2">


          <input className='h-8 border-2 border-black rounded-md' value={city} type="text" onChange={(e) => setCity(e.target.value)} />
          <button className="h-8 w-16 border-2 rounded-md bg-blue-500 text-white hover:bg-blue-700" onClick={fetchApi} >Enviar</button>

        </div>

        {weather ? (
          <div className='bg-white rounded-md w-80 h-72 flex flex-col items-center gap-2 shadow-lg justify-center relative'>

          <div className="absolute right-0 top-0">
            <button onClick={closeCard}> <IoIosCloseCircle /> </button>
          </div>
        
          <strong className="text-2xl">{Math.round(weather.current.temp_c)}ºC</strong>
          <img src={weather.current.condition.icon} alt="" />
        
          <h1 className="text-lg"><strong>{weather.location.name}</strong></h1>
          <h2>{weather.location.region}, {weather.location.country}</h2>
        
        </div>
        
        ) : <h1>Digite alguma cidade...</h1>
        }
      </div>
    </>
  )
}

export default App
