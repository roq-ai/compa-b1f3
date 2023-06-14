import axios from 'axios';
import queryString from 'query-string';
import { CostEstimateInterface, CostEstimateGetQueryInterface } from 'interfaces/cost-estimate';
import { GetQueryInterface } from '../../interfaces';

export const getCostEstimates = async (query?: CostEstimateGetQueryInterface) => {
  const response = await axios.get(`/api/cost-estimates${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createCostEstimate = async (costEstimate: CostEstimateInterface) => {
  const response = await axios.post('/api/cost-estimates', costEstimate);
  return response.data;
};

export const updateCostEstimateById = async (id: string, costEstimate: CostEstimateInterface) => {
  const response = await axios.put(`/api/cost-estimates/${id}`, costEstimate);
  return response.data;
};

export const getCostEstimateById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/cost-estimates/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCostEstimateById = async (id: string) => {
  const response = await axios.delete(`/api/cost-estimates/${id}`);
  return response.data;
};
