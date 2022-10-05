import { React, useState, useEffect } from 'react'

export const CounterSection = () => {
    const [count, setCount] = useState(1);
    const [starWarsData, setStarWarsData] = useState({})

    const nextCharacter = () => {
        setCount(prevCount => prevCount + 1)
    }
    const prevCharacter = () => {
        setCount(prevCount => prevCount - 1)
    }
    useEffect(() => {
        console.log('Effect Function Ran')
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(response => response.json())
            .then(data => setStarWarsData(data))
    }, [count])
    return (
        <div className='countContainer'>
            {count > 0 ? <h1>
                Stars war Character {starWarsData.name}
            </h1> : alert('No Character found')}
            <h2> Description </h2>
            <pre>{JSON.stringify(starWarsData,null,2)}</pre>
            <div className='buttonContainer'>
                {count > 1 && <button onClick={prevCharacter}>
                    Previous
                </button>}
                <button onClick={nextCharacter}>
                    Next
                </button>
            </div>
        </div>
    )
}