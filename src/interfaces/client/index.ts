import { ProjectInterface } from 'interfaces/project';
import { GetQueryInterface } from 'interfaces';

export interface ClientInterface {
  id?: string;
  name: string;
  email: string;
  project_id: string;
  created_at?: any;
  updated_at?: any;

  project?: ProjectInterface;
  _count?: {};
}

export interface ClientGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  email?: string;
  project_id?: string;
}
