/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreatePodInput = {
  _id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type CreateUserInput = {
  _id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  podId?: Maybe<Scalars['ID']>;
};

export type GetPodMembersInput = {
  podID: Scalars['ID'];
};

export type IdInput = {
  ne?: Maybe<Scalars['ID']>;
  eq?: Maybe<Scalars['ID']>;
  le?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  ge?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
};

export type MutatePodInput = {
  _id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type MutateUserInput = {
  _id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  podId?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPod?: Maybe<Pod>;
  updatePod?: Maybe<Pod>;
  deletePod?: Maybe<Pod>;
  createUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  deleteUser?: Maybe<User>;
};


export type MutationCreatePodArgs = {
  input: CreatePodInput;
};


export type MutationUpdatePodArgs = {
  input: MutatePodInput;
};


export type MutationDeletePodArgs = {
  input: MutatePodInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  input: MutateUserInput;
};


export type MutationDeleteUserArgs = {
  input: MutateUserInput;
};

export type OrderByInput = {
  field: Scalars['String'];
  order?: Maybe<SortDirectionEnum>;
};

export type PageRequest = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

/** @model */
export type Pod = {
  __typename?: 'Pod';
  /** @id */
  _id: Scalars['ID'];
  title: Scalars['String'];
  /**
   * @oneToMany(field: 'pod', key: 'podId')
   * @oneToMany(field: 'pod')
   */
  users: Array<Maybe<User>>;
};


/** @model */
export type PodUsersArgs = {
  filter?: Maybe<UserFilter>;
};

export type PodFilter = {
  _id?: Maybe<IdInput>;
  title?: Maybe<StringInput>;
  and?: Maybe<Array<PodFilter>>;
  or?: Maybe<Array<PodFilter>>;
  not?: Maybe<PodFilter>;
};

export type PodResultList = {
  __typename?: 'PodResultList';
  items: Array<Maybe<Pod>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type PodSubscriptionFilter = {
  and?: Maybe<Array<PodSubscriptionFilter>>;
  or?: Maybe<Array<PodSubscriptionFilter>>;
  not?: Maybe<PodSubscriptionFilter>;
  _id?: Maybe<IdInput>;
  title?: Maybe<StringInput>;
};

export type Query = {
  __typename?: 'Query';
  getPodMembers?: Maybe<Array<Maybe<User>>>;
  getPod?: Maybe<Pod>;
  findPods: PodResultList;
  getUser?: Maybe<User>;
  findUsers: UserResultList;
};


export type QueryGetPodMembersArgs = {
  input: GetPodMembersInput;
};


export type QueryGetPodArgs = {
  id: Scalars['ID'];
};


export type QueryFindPodsArgs = {
  filter?: Maybe<PodFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};


export type QueryFindUsersArgs = {
  filter?: Maybe<UserFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};

export enum SortDirectionEnum {
  Desc = 'DESC',
  Asc = 'ASC'
}

export type StringInput = {
  ne?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newPod: Pod;
  updatedPod: Pod;
  deletedPod: Pod;
  newUser: User;
  updatedUser: User;
  deletedUser: User;
};


export type SubscriptionNewPodArgs = {
  filter?: Maybe<PodSubscriptionFilter>;
};


export type SubscriptionUpdatedPodArgs = {
  filter?: Maybe<PodSubscriptionFilter>;
};


export type SubscriptionDeletedPodArgs = {
  filter?: Maybe<PodSubscriptionFilter>;
};


export type SubscriptionNewUserArgs = {
  filter?: Maybe<UserSubscriptionFilter>;
};


export type SubscriptionUpdatedUserArgs = {
  filter?: Maybe<UserSubscriptionFilter>;
};


export type SubscriptionDeletedUserArgs = {
  filter?: Maybe<UserSubscriptionFilter>;
};

/** @model */
export type User = {
  __typename?: 'User';
  /** @id */
  _id: Scalars['ID'];
  name: Scalars['String'];
  /** @manyToOne(field: 'users', key: 'podId') */
  pod?: Maybe<Pod>;
};

export type UserFilter = {
  _id?: Maybe<IdInput>;
  name?: Maybe<StringInput>;
  podId?: Maybe<IdInput>;
  and?: Maybe<Array<UserFilter>>;
  or?: Maybe<Array<UserFilter>>;
  not?: Maybe<UserFilter>;
};

export type UserResultList = {
  __typename?: 'UserResultList';
  items: Array<Maybe<User>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type UserSubscriptionFilter = {
  and?: Maybe<Array<UserSubscriptionFilter>>;
  or?: Maybe<Array<UserSubscriptionFilter>>;
  not?: Maybe<UserSubscriptionFilter>;
  _id?: Maybe<IdInput>;
  name?: Maybe<StringInput>;
};
