import React, { useEffect, useState } from 'react';
import hero from './assets/hero.jpg';

function App() {
  const [fixtures, setFixtures] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1e6ed15d8amsh9eea5bd6c42b4e7p150bbcjsn5288b59e50d7',
      'X-RapidAPI-Host': 'football98.p.rapidapi.com'
    }
  };

  const fetchfixtures = () => {
    fetch('https://football98.p.rapidapi.com/premierleague/fixtures', options)
          .then(response => {
        return response.json();
      })
      .then(data => {
        setFixtures(data)
        console.log(fixtures)
      })
      .catch(error => {
        console.log('Error fetching data')
      })
  }

  useEffect(() => {
    fetchfixtures();
  },[]);;

 return(
  <div name="parent container" className="h-full w-full">
    <section className="flex flex-row justify-between py-3 px-6 border-b-2 bg-[#dede]">
        <div className="text-xl md:text-3xl font-semibold cursor-pointer">SportsPedia</div>
        <div className="hidden md:flex flex-row gap-5 font-medium">
            <div className="cursor-pointer hover:font-semibold">Home</div>
            <div className="cursor-pointer hover:font-semibold">Sports</div>
            <div className="cursor-pointer hover:font-semibold">News</div>
        </div>
    </section>
    <main name="containe" className="px-2">
    <section className="w-full h-[200px] md:h-[400px] bg-slate-300 flex flex-row justify-between">
      <h2 className="text-4xl md:text-6xl mt-28 md:mt-52 pl-6">Search for the latest fixtures</h2>
      <div className="hidden md:flex">
        <img className="rounded-lg pt-5" src={hero} alt='new' />
      </div>
    </section>
    <section className="py-5 px-10 grid place-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/*This is the card, map from here */}
        {
          fixtures.map((fixture) => (
            <div key={fixtures.id} className="rounded-lg border-2 shadow-lg pt-2 h-[200px] w-[350px] grid place-items-center">
            <h4 className="text-2xl font-semibold">{fixtures.name}</h4>{/*Competition */}
            <div className="flex flex-row gap-5">  
                <p>{fixtures.homeTeam}</p> {/*Home Team */}
                <p>V</p>
                <p>{fixtures.awayTeam}</p> {/*Away Team */}
            </div>
            <p className="font-medium">{fixture.MatchDay}</p>{/*Date and Time */}
            <button className="rounded-lg py-2 px-4 bg-slate-300 font-medium">Link</button>
          </div>
          ))
        }
    </section>
    </main>
  </div>
 )
}

export default App;
