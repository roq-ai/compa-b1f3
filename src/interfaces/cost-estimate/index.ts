import { ProjectInterface } from 'interfaces/project';
import { GetQueryInterface } from 'interfaces';

export interface CostEstimateInterface {
  id?: string;
  project_id: string;
  description: string;
  amount: number;
  created_at?: any;
  updated_at?: any;

  project?: ProjectInterface;
  _count?: {};
}

export interface CostEstimateGetQueryInterface extends GetQueryInterface {
  id?: string;
  project_id?: string;
  description?: string;
}
