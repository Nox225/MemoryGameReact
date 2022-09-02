import React from 'react'
import { useState } from 'react'
import './style.css'
import Tile from './components/Tile'
import khazix from './images/khazix.jpg'
import miler from './images/miler.jpg'
import nietzsche from './images/nietzsche.avif'
import monkey from './images/monkey.webp'
import rune from './images/rune1.jpg'
import morgan from './images/morgan.png'
import obelix from './images/obelix.webp'
import pudzian from './images/pudzian.jpg'
import Replay from './components/Replay.js'

function App() {

  const [items, setItems] = useState([
    { id: 1, img: khazix, stat: "" },
    { id: 1, img: khazix, stat: "" },
    { id: 2, img: miler, stat: "" },
    { id: 2, img: miler, stat: "" },
    { id: 3, img: nietzsche, stat: "" },
    { id: 3, img: nietzsche, stat: "" },
    { id: 4, img: monkey, stat: "" },
    { id: 4, img: monkey, stat: "" },
    { id: 5, img: rune, stat: "" },
    { id: 5, img: rune, stat: "" },
    { id: 6, img: morgan, stat: "" },
    { id: 6, img: morgan, stat: "" },
    { id: 7, img: obelix, stat: "" },
    { id: 7, img: obelix, stat: "" },
    { id: 8, img: pudzian, stat: "" },
    { id: 8, img: pudzian, stat: "" }
].sort(() => Math.random() - 0.5))

  const [prev, setPrev] = useState(-1)
  const [gameOver, setGameOver] = useState(false)
  const [count, setCount] = useState(0)
  const [tries, setTries] = useState(0)


  function handleClick(id){
    if (prev === -1){
      items[id].stat = 'active'
      setItems([...items])
      setPrev(id)
    }else{
      check(id)
    }
  }

  function check(current){
    if(items[current].id === items[prev].id){
        items[current].stat = "correct"
        items[prev].stat = "correct"
        setItems([...items])
        for(let i = 0; i < items.length; i++){
          if(items[i].stat === 'correct') setCount(count+1)
          console.log(count)
          if(count >= 7) setGameOver(true)
          setTries(tries+1)
        }
        setPrev(-1)
    }else{
        items[current].stat = "wrong"
        items[prev].stat = "wrong"
        setItems([...items])
        setTries(tries+1)
        setTimeout(() => {
            items[current].stat = ""
            items[prev].stat = ""
            setItems([...items])
            setPrev(-1)
        }, 1000)
    }
}

  return (
    <>
      <div className="container">
        {items.map((item,i) => {
          return (
            <Tile 
              key={i} 
              id={i} 
              item={item} 
              image={item.img} 
              handleClick={handleClick}
            />
          )
        })}
      </div>
      {gameOver && <Replay tries={tries} />}

    </>

  );
}

export default App;
