import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DocumentInterface {
  id?: string;
  name: string;
  content: string;
  organization_id?: string;
  user_id?: string;
  is_audited?: boolean;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {};
}

export interface DocumentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  content?: string;
  organization_id?: string;
  user_id?: string;
}
