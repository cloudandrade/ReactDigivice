import axios from 'axios';
import { DetailedDigiItem } from '../types/DigiTypes';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchDigimons = async (page: number, pageSize: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/digimon?page=${page}&pageSize=${pageSize}`);
    
    return response.data.content || []; // Supondo que os Digimons estejam na propriedade "content"
  } catch (error) {
    console.error("Erro ao buscar digimons:", error);
    return [];
  }
};

export const getDigimonDetails = async (id: number): Promise<DetailedDigiItem> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/digimon/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Digimon details:', error);
    throw error;
  }
};