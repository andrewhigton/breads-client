import { LOAD_USER } from "../actionTypes";

import { ReceiveEntitiesAction } from "../actions";
import { LoadSubscriptionAction } from "../subscriptions/types";

export interface User {
  id: number;
  username: string;
  image: string;
}

export interface UserFollowers {
  followers: any[];
  following: any[];
}

export type UserActionTypes =
  | ReceiveEntitiesAction
  | LoadUserAction
  | LoadSubscriptionAction;

export interface LoadUserAction {
  type: typeof LOAD_USER;
  users: User[];
  userFollowers?: UserFollowers;
}
