import ActorsCard from "./ActorsCard";


const ActorsGrid = ({ actor }) => {
    return (
        <div>
            {actor.map((data) => (
                <ActorsCard key={data.person.id}
                    id={data.person.id}
                    name={data.person.name}
                    country={data.person.country ? data.person.country.name : null}
                    birthday={data.person.birthday}
                    deathday={data.person.deathday}
                    gender={data.person.gender}
                    image={data.person.image ? data.person.image.medium : '/not-found-image.png'}/>
                    
            ))} 
        </div>
    )
}

export default ActorsGrid;

