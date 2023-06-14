import { ClientInterface } from 'interfaces/client';
import { CostEstimateInterface } from 'interfaces/cost-estimate';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  organization_id: string;
  project_manager_id: string;
  created_at?: any;
  updated_at?: any;
  client?: ClientInterface[];
  cost_estimate?: CostEstimateInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    client?: number;
    cost_estimate?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
  project_manager_id?: string;
}
