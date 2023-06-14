import axios from 'axios';
import queryString from 'query-string';
import { ProjectInterface, ProjectGetQueryInterface } from 'interfaces/project';
import { GetQueryInterface } from '../../interfaces';

export const getProjects = async (query?: ProjectGetQueryInterface) => {
  const response = await axios.get(`/api/projects${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createProject = async (project: ProjectInterface) => {
  const response = await axios.post('/api/projects', project);
  return response.data;
};

export const updateProjectById = async (id: string, project: ProjectInterface) => {
  const response = await axios.put(`/api/projects/${id}`, project);
  return response.data;
};

export const getProjectById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/projects/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteProjectById = async (id: string) => {
  const response = await axios.delete(`/api/projects/${id}`);
  return response.data;
};
