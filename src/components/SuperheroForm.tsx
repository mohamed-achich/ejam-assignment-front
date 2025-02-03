import React, { useState } from 'react';
import { SuperheroFormData } from '../types/superhero';

interface Props {
  onSubmit: (superhero: SuperheroFormData) => void;
}

const SuperheroForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<SuperheroFormData>({
    name: '',
    superpower: '',
    humilityScore: 1
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', superpower: '', humilityScore: 1 });
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Superhero</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        
        <div>
          <label htmlFor="superpower" className="block text-sm font-medium text-gray-700">
            Superpower
          </label>
          <input
            type="text"
            id="superpower"
            value={formData.superpower}
            onChange={(e) => setFormData({ ...formData, superpower: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        
        <div>
          <label htmlFor="humilityScore" className="block text-sm font-medium text-gray-700">
            Humility Score (1-10)
          </label>
          <input
            type="number"
            id="humilityScore"
            min="1"
            max="10"
            value={formData.humilityScore}
            onChange={(e) => setFormData({ ...formData, humilityScore: Number(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Superhero
        </button>
      </form>
    </div>
  );
};

export default SuperheroForm;