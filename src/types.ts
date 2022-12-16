export interface IUser {
  name: string;
  adresse: string;
  birthDate: string;
  email: string;
}

export interface Input {
  label: string;
  type: string;
  id: string;
  placeholder: string;
}

export interface FetchedUser extends IUser {
  _id: string;
  __v: number;
}

export type FormValues = {
  name: string;
  birthDate: string;
  email: string;
  adresse: string;
};

export type ID = "name" | "adresse" | "birthDate" | "email";
