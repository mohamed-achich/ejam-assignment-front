
  import {Superhero} from '../types/superhero';
  interface SuperheroListProps {
    superheroes: Superhero[]
  }
  
  export default function SuperheroList({ superheroes }: SuperheroListProps) {
    const sortedSuperheroes = [...superheroes].sort((a, b) => b.humilityScore - a.humilityScore)
  
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Superhero List</h2>
        <ul className="space-y-4">
          {sortedSuperheroes.map((hero) => (
            <li key={hero.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold">{hero.name}</h3>
              <p>
                <strong>Superpower:</strong> {hero.superpower}
              </p>
              <p>
                <strong>Humility Score:</strong> {hero.humilityScore}
              </p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  