import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    
    interface User{
        name:string,
        age:number
    }
    const [user, setUser] = useState<User | null>(null);

    const handleIncrease = ():void=>{
        setCounter(counter+1);
    }
    return (
        <div>
            <h1>This is Counter</h1>
            <h2>{counter}</h2>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default Counter;