import { Contact } from './contact.model';

export interface IDetail {
  id?: string;
  contacts?: Contact[];
  firstName?: string;
  lastName?: string;
  open: boolean;
}
