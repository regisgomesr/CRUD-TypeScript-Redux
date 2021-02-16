export enum UsersTypes {
  LOAD_REQUEST = '@users/LOAD_REQUEST',
  LOAD_SUCCESS = '@users/LOAD_SUCCESS',
  LOAD_FAILURE = '@users/LOAD_FAILURE',
}

export interface User {
  id: number;
  name: string;
  email: string;
  type: string;
}

export interface UsersState {
  readonly data: User[];
  readonly loading: boolean;
  readonly error: boolean;
}
