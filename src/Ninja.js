import React from 'react'

const Ninja = function({ninjas})  {          
    const ninjalist = ninjas.map(ninja => {
        return (
        <div className="ninja" key={ninja.id}>
                <h4>Iam a {ninja.name},{ninja.age} and {ninja.belt} belted</h4>    
            </div>
        )
    });    

    return (
        <div className="ninja-list">
            {ninjalist}
        </div>
    )
}

export default Ninja