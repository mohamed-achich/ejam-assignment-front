import axios from 'axios';
import { Superhero } from '../src/types/superhero';

const API_URL = 'http://localhost:3000';

export const api = {
  async createSuperhero(superhero: Omit<Superhero, 'id'>): Promise<Superhero> {
    const response = await axios.post(`${API_URL}/superheroes`, superhero);
    return response.data;
  },

  async getSuperheroes(): Promise<Superhero[]> {
    const response = await axios.get(`${API_URL}/superheroes`);
    return response.data;
  }
};