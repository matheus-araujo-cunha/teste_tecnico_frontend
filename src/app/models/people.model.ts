import { Contact } from './contact.model';

export class People {
  id!: string;
  firstName!: string;
  lastName!: string;
  contacts!: Contact[];
}
