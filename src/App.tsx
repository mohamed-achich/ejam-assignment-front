import { useState, useEffect } from 'react';
import SuperheroForm from './components/SuperheroForm';
import SuperheroList from './components/SuperheroList';
import { Superhero } from './types/superhero';
import { api } from './services/api';

function App() {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    loadSuperheroes();
  }, []);

  const loadSuperheroes = async () => {
    try {
      const data = await api.getSuperheroes();
      setSuperheroes(data);
    } catch (err) {
      setError('Failed to load superheroes');
      console.error(err);
    }
  };

  const handleAddSuperhero = async (newHero: Omit<Superhero, 'id'>) => {
    try {
      await api.createSuperhero(newHero);
      await loadSuperheroes(); // Reload the list after adding
    } catch (err) {
      setError('Failed to add superhero');
      console.error(err);
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        <div className="bg-white shadow-xl rounded-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Superhero Manager</h1>
          </div>
          {error && (
            <div className="mb-6 p-4 text-red-700 bg-red-100 rounded-lg">
              {error}
            </div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <SuperheroForm onSubmit={handleAddSuperhero} />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <SuperheroList superheroes={superheroes} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;