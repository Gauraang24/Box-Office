import React from 'react'

const Cast = ({ cast }) => {
    return (
        <div>
            {
                cast.map(({ person, character, voice }) => {
                    return <div key={person.id}>
                        <div>
                        <img src={person.image ? person.image.medium : '/not-found-image.png'} alt="" />
                        </div>
                        <div>
                            {person.name} | {character.name} {voice && "| VOiceOver"}
                        </div>
                        
                    </div>
                })
            }
        </div>
    )
}

export default Cast
