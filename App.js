import React from "react"
import Header from "./Components/Header.js"
import Body from "./Components/Body.js"
import data from "./data.js"

console.log(data);


export default function App(){
    const card = data.map((item) => <Body
        item = {item} 
    />)
    return(
        <main>
            <Header />
            {card}
        </main>
    )
}