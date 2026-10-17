import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'
let arr = [
  { id: 1, username: "Abhi", city: "Delhi", btnText: "View Profile", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, username: "Aditya", city: "Mumbai", btnText: "Say Hello", img: "https://randomuser.me/api/portraits/men/44.jpg" },
  { id: 3, username: "Ajay", city: "Surat", btnText: "Connect", img: "https://randomuser.me/api/portraits/men/68.jpg" },
]
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Profiles </h1>
      {/* static rendering 
 <Card username="Abhi" btnText="View Profile" obj={arr[0]} />
 <Card username="Aditya" btnText="Say Hello" obj={arr[1]} />
 <Card username="Ajay" btnText="Connect" obj={arr[2]} />
 <Card /> */}

      {/* dynamic rendering */}
      {arr.map((person) => (
        <Card
          key={person.id}
          username={person.username}
          btnText={person.btnText}
          img={person.img}
          obj={{ id: person.id, city: person.city }}
        />
      ))}

    </>
  )
}

export default App
