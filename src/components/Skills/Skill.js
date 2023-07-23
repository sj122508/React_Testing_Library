import { useEffect, useState } from "react";

export const Skill = (props) => {
    const {skills} = props
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true)
        }, 1500)
    }, [])

    

    return (
        <>
            <ul>
                {
                    skills.map((skill) => {
                    return <li key={skill}>{skill}</li>
                })}
            </ul>
            {isLoggedIn ? 
            (<button>Start learning</button>) :
            (<button onClick={() => setIsLoggedIn(true)}>Login</button>)
        }
        </>
    )
}