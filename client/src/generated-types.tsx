/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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

export type CreateUsersInput = {
  _id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  noteId?: Maybe<Scalars['ID']>;
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

export type MutateUsersInput = {
  _id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  noteId?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPod?: Maybe<Pod>;
  updatePod?: Maybe<Pod>;
  deletePod?: Maybe<Pod>;
  createUsers?: Maybe<Users>;
  updateUsers?: Maybe<Users>;
  deleteUsers?: Maybe<Users>;
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


export type MutationCreateUsersArgs = {
  input: CreateUsersInput;
};


export type MutationUpdateUsersArgs = {
  input: MutateUsersInput;
};


export type MutationDeleteUsersArgs = {
  input: MutateUsersInput;
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
   * @oneToMany(field: 'note', key: 'noteId')
   * @oneToMany(field: 'note')
   */
  users: Array<Maybe<Users>>;
};


/** @model */
export type PodUsersArgs = {
  filter?: Maybe<UsersFilter>;
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
  getPodMembers?: Maybe<Array<Maybe<Users>>>;
  getPod?: Maybe<Pod>;
  findPods: PodResultList;
  getUsers?: Maybe<Users>;
  findUsers: UsersResultList;
};


export type QueryGetPodArgs = {
  id: Scalars['ID'];
};


export type QueryFindPodsArgs = {
  filter?: Maybe<PodFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};


export type QueryGetUsersArgs = {
  id: Scalars['ID'];
};


export type QueryFindUsersArgs = {
  filter?: Maybe<UsersFilter>;
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
  newUsers: Users;
  updatedUsers: Users;
  deletedUsers: Users;
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


export type SubscriptionNewUsersArgs = {
  filter?: Maybe<UsersSubscriptionFilter>;
};


export type SubscriptionUpdatedUsersArgs = {
  filter?: Maybe<UsersSubscriptionFilter>;
};


export type SubscriptionDeletedUsersArgs = {
  filter?: Maybe<UsersSubscriptionFilter>;
};

/** @model */
export type Users = {
  __typename?: 'Users';
  /** @id */
  _id: Scalars['ID'];
  name: Scalars['String'];
  /** @manyToOne(field: 'users', key: 'noteId') */
  note?: Maybe<Pod>;
};

export type UsersFilter = {
  _id?: Maybe<IdInput>;
  name?: Maybe<StringInput>;
  noteId?: Maybe<IdInput>;
  and?: Maybe<Array<UsersFilter>>;
  or?: Maybe<Array<UsersFilter>>;
  not?: Maybe<UsersFilter>;
};

export type UsersResultList = {
  __typename?: 'UsersResultList';
  items: Array<Maybe<Users>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type UsersSubscriptionFilter = {
  and?: Maybe<Array<UsersSubscriptionFilter>>;
  or?: Maybe<Array<UsersSubscriptionFilter>>;
  not?: Maybe<UsersSubscriptionFilter>;
  _id?: Maybe<IdInput>;
  name?: Maybe<StringInput>;
};

export type UsersFieldsFragment = (
  { __typename?: 'Users' }
  & Pick<Users, '_id' | 'name'>
);

export type UsersExpandedFieldsFragment = (
  { __typename?: 'Users' }
  & Pick<Users, '_id' | 'name'>
  & { note?: Maybe<(
    { __typename?: 'Pod' }
    & Pick<Pod, '_id' | 'title'>
  )> }
);

export type PodFieldsFragment = (
  { __typename?: 'Pod' }
  & Pick<Pod, '_id' | 'title'>
);

export type PodExpandedFieldsFragment = (
  { __typename?: 'Pod' }
  & Pick<Pod, '_id' | 'title'>
  & { users: Array<Maybe<(
    { __typename?: 'Users' }
    & Pick<Users, '_id' | 'name'>
  )>> }
);

export type FindUsersQueryVariables = Exact<{
  filter?: Maybe<UsersFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
}>;


export type FindUsersQuery = (
  { __typename?: 'Query' }
  & { findUsers: (
    { __typename?: 'UsersResultList' }
    & Pick<UsersResultList, 'offset' | 'limit' | 'count'>
    & { items: Array<Maybe<(
      { __typename?: 'Users' }
      & UsersExpandedFieldsFragment
    )>> }
  ) }
);

export type GetUsersQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { getUsers?: Maybe<(
    { __typename?: 'Users' }
    & UsersExpandedFieldsFragment
  )> }
);

export type FindPodsQueryVariables = Exact<{
  filter?: Maybe<PodFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
}>;


export type FindPodsQuery = (
  { __typename?: 'Query' }
  & { findPods: (
    { __typename?: 'PodResultList' }
    & Pick<PodResultList, 'offset' | 'limit' | 'count'>
    & { items: Array<Maybe<(
      { __typename?: 'Pod' }
      & PodExpandedFieldsFragment
    )>> }
  ) }
);

export type GetPodQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPodQuery = (
  { __typename?: 'Query' }
  & { getPod?: Maybe<(
    { __typename?: 'Pod' }
    & PodExpandedFieldsFragment
  )> }
);

export type CreateUsersMutationVariables = Exact<{
  input: CreateUsersInput;
}>;


export type CreateUsersMutation = (
  { __typename?: 'Mutation' }
  & { createUsers?: Maybe<(
    { __typename?: 'Users' }
    & UsersFieldsFragment
  )> }
);

export type UpdateUsersMutationVariables = Exact<{
  input: MutateUsersInput;
}>;


export type UpdateUsersMutation = (
  { __typename?: 'Mutation' }
  & { updateUsers?: Maybe<(
    { __typename?: 'Users' }
    & UsersFieldsFragment
  )> }
);

export type DeleteUsersMutationVariables = Exact<{
  input: MutateUsersInput;
}>;


export type DeleteUsersMutation = (
  { __typename?: 'Mutation' }
  & { deleteUsers?: Maybe<(
    { __typename?: 'Users' }
    & UsersFieldsFragment
  )> }
);

export type CreatePodMutationVariables = Exact<{
  input: CreatePodInput;
}>;


export type CreatePodMutation = (
  { __typename?: 'Mutation' }
  & { createPod?: Maybe<(
    { __typename?: 'Pod' }
    & PodFieldsFragment
  )> }
);

export type UpdatePodMutationVariables = Exact<{
  input: MutatePodInput;
}>;


export type UpdatePodMutation = (
  { __typename?: 'Mutation' }
  & { updatePod?: Maybe<(
    { __typename?: 'Pod' }
    & PodFieldsFragment
  )> }
);

export type DeletePodMutationVariables = Exact<{
  input: MutatePodInput;
}>;


export type DeletePodMutation = (
  { __typename?: 'Mutation' }
  & { deletePod?: Maybe<(
    { __typename?: 'Pod' }
    & PodFieldsFragment
  )> }
);

export type NewUsersSubscriptionVariables = Exact<{
  filter?: Maybe<UsersSubscriptionFilter>;
}>;


export type NewUsersSubscription = (
  { __typename?: 'Subscription' }
  & { newUsers: (
    { __typename?: 'Users' }
    & UsersFieldsFragment
  ) }
);

export type UpdatedUsersSubscriptionVariables = Exact<{
  filter?: Maybe<UsersSubscriptionFilter>;
}>;


export type UpdatedUsersSubscription = (
  { __typename?: 'Subscription' }
  & { updatedUsers: (
    { __typename?: 'Users' }
    & UsersFieldsFragment
  ) }
);

export type DeletedUsersSubscriptionVariables = Exact<{
  filter?: Maybe<UsersSubscriptionFilter>;
}>;


export type DeletedUsersSubscription = (
  { __typename?: 'Subscription' }
  & { deletedUsers: (
    { __typename?: 'Users' }
    & UsersFieldsFragment
  ) }
);

export type NewPodSubscriptionVariables = Exact<{
  filter?: Maybe<PodSubscriptionFilter>;
}>;


export type NewPodSubscription = (
  { __typename?: 'Subscription' }
  & { newPod: (
    { __typename?: 'Pod' }
    & PodFieldsFragment
  ) }
);

export type UpdatedPodSubscriptionVariables = Exact<{
  filter?: Maybe<PodSubscriptionFilter>;
}>;


export type UpdatedPodSubscription = (
  { __typename?: 'Subscription' }
  & { updatedPod: (
    { __typename?: 'Pod' }
    & PodFieldsFragment
  ) }
);

export type DeletedPodSubscriptionVariables = Exact<{
  filter?: Maybe<PodSubscriptionFilter>;
}>;


export type DeletedPodSubscription = (
  { __typename?: 'Subscription' }
  & { deletedPod: (
    { __typename?: 'Pod' }
    & PodFieldsFragment
  ) }
);

export const UsersFieldsFragmentDoc = gql`
    fragment UsersFields on Users {
  _id
  name
}
    `;
export const UsersExpandedFieldsFragmentDoc = gql`
    fragment UsersExpandedFields on Users {
  _id
  name
  note {
    _id
    title
  }
}
    `;
export const PodFieldsFragmentDoc = gql`
    fragment PodFields on Pod {
  _id
  title
}
    `;
export const PodExpandedFieldsFragmentDoc = gql`
    fragment PodExpandedFields on Pod {
  _id
  title
  users {
    _id
    name
  }
}
    `;
export const FindUsersDocument = gql`
    query findUsers($filter: UsersFilter, $page: PageRequest, $orderBy: OrderByInput) {
  findUsers(filter: $filter, page: $page, orderBy: $orderBy) {
    items {
      ...UsersExpandedFields
    }
    offset
    limit
    count
  }
}
    ${UsersExpandedFieldsFragmentDoc}`;

/**
 * __useFindUsersQuery__
 *
 * To run a query within a React component, call `useFindUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUsersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFindUsersQuery(baseOptions?: Apollo.QueryHookOptions<FindUsersQuery, FindUsersQueryVariables>) {
        return Apollo.useQuery<FindUsersQuery, FindUsersQueryVariables>(FindUsersDocument, baseOptions);
      }
export function useFindUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUsersQuery, FindUsersQueryVariables>) {
          return Apollo.useLazyQuery<FindUsersQuery, FindUsersQueryVariables>(FindUsersDocument, baseOptions);
        }
export type FindUsersQueryHookResult = ReturnType<typeof useFindUsersQuery>;
export type FindUsersLazyQueryHookResult = ReturnType<typeof useFindUsersLazyQuery>;
export type FindUsersQueryResult = Apollo.QueryResult<FindUsersQuery, FindUsersQueryVariables>;
export const GetUsersDocument = gql`
    query getUsers($id: ID!) {
  getUsers(id: $id) {
    ...UsersExpandedFields
  }
}
    ${UsersExpandedFieldsFragmentDoc}`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const FindPodsDocument = gql`
    query findPods($filter: PodFilter, $page: PageRequest, $orderBy: OrderByInput) {
  findPods(filter: $filter, page: $page, orderBy: $orderBy) {
    items {
      ...PodExpandedFields
    }
    offset
    limit
    count
  }
}
    ${PodExpandedFieldsFragmentDoc}`;

/**
 * __useFindPodsQuery__
 *
 * To run a query within a React component, call `useFindPodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPodsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFindPodsQuery(baseOptions?: Apollo.QueryHookOptions<FindPodsQuery, FindPodsQueryVariables>) {
        return Apollo.useQuery<FindPodsQuery, FindPodsQueryVariables>(FindPodsDocument, baseOptions);
      }
export function useFindPodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPodsQuery, FindPodsQueryVariables>) {
          return Apollo.useLazyQuery<FindPodsQuery, FindPodsQueryVariables>(FindPodsDocument, baseOptions);
        }
export type FindPodsQueryHookResult = ReturnType<typeof useFindPodsQuery>;
export type FindPodsLazyQueryHookResult = ReturnType<typeof useFindPodsLazyQuery>;
export type FindPodsQueryResult = Apollo.QueryResult<FindPodsQuery, FindPodsQueryVariables>;
export const GetPodDocument = gql`
    query getPod($id: ID!) {
  getPod(id: $id) {
    ...PodExpandedFields
  }
}
    ${PodExpandedFieldsFragmentDoc}`;

/**
 * __useGetPodQuery__
 *
 * To run a query within a React component, call `useGetPodQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPodQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPodQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPodQuery(baseOptions?: Apollo.QueryHookOptions<GetPodQuery, GetPodQueryVariables>) {
        return Apollo.useQuery<GetPodQuery, GetPodQueryVariables>(GetPodDocument, baseOptions);
      }
export function useGetPodLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPodQuery, GetPodQueryVariables>) {
          return Apollo.useLazyQuery<GetPodQuery, GetPodQueryVariables>(GetPodDocument, baseOptions);
        }
export type GetPodQueryHookResult = ReturnType<typeof useGetPodQuery>;
export type GetPodLazyQueryHookResult = ReturnType<typeof useGetPodLazyQuery>;
export type GetPodQueryResult = Apollo.QueryResult<GetPodQuery, GetPodQueryVariables>;
export const CreateUsersDocument = gql`
    mutation createUsers($input: CreateUsersInput!) {
  createUsers(input: $input) {
    ...UsersFields
  }
}
    ${UsersFieldsFragmentDoc}`;
export type CreateUsersMutationFn = Apollo.MutationFunction<CreateUsersMutation, CreateUsersMutationVariables>;

/**
 * __useCreateUsersMutation__
 *
 * To run a mutation, you first call `useCreateUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUsersMutation, { data, loading, error }] = useCreateUsersMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUsersMutation(baseOptions?: Apollo.MutationHookOptions<CreateUsersMutation, CreateUsersMutationVariables>) {
        return Apollo.useMutation<CreateUsersMutation, CreateUsersMutationVariables>(CreateUsersDocument, baseOptions);
      }
export type CreateUsersMutationHookResult = ReturnType<typeof useCreateUsersMutation>;
export type CreateUsersMutationResult = Apollo.MutationResult<CreateUsersMutation>;
export type CreateUsersMutationOptions = Apollo.BaseMutationOptions<CreateUsersMutation, CreateUsersMutationVariables>;
export const UpdateUsersDocument = gql`
    mutation updateUsers($input: MutateUsersInput!) {
  updateUsers(input: $input) {
    ...UsersFields
  }
}
    ${UsersFieldsFragmentDoc}`;
export type UpdateUsersMutationFn = Apollo.MutationFunction<UpdateUsersMutation, UpdateUsersMutationVariables>;

/**
 * __useUpdateUsersMutation__
 *
 * To run a mutation, you first call `useUpdateUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUsersMutation, { data, loading, error }] = useUpdateUsersMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUsersMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUsersMutation, UpdateUsersMutationVariables>) {
        return Apollo.useMutation<UpdateUsersMutation, UpdateUsersMutationVariables>(UpdateUsersDocument, baseOptions);
      }
export type UpdateUsersMutationHookResult = ReturnType<typeof useUpdateUsersMutation>;
export type UpdateUsersMutationResult = Apollo.MutationResult<UpdateUsersMutation>;
export type UpdateUsersMutationOptions = Apollo.BaseMutationOptions<UpdateUsersMutation, UpdateUsersMutationVariables>;
export const DeleteUsersDocument = gql`
    mutation deleteUsers($input: MutateUsersInput!) {
  deleteUsers(input: $input) {
    ...UsersFields
  }
}
    ${UsersFieldsFragmentDoc}`;
export type DeleteUsersMutationFn = Apollo.MutationFunction<DeleteUsersMutation, DeleteUsersMutationVariables>;

/**
 * __useDeleteUsersMutation__
 *
 * To run a mutation, you first call `useDeleteUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUsersMutation, { data, loading, error }] = useDeleteUsersMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteUsersMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUsersMutation, DeleteUsersMutationVariables>) {
        return Apollo.useMutation<DeleteUsersMutation, DeleteUsersMutationVariables>(DeleteUsersDocument, baseOptions);
      }
export type DeleteUsersMutationHookResult = ReturnType<typeof useDeleteUsersMutation>;
export type DeleteUsersMutationResult = Apollo.MutationResult<DeleteUsersMutation>;
export type DeleteUsersMutationOptions = Apollo.BaseMutationOptions<DeleteUsersMutation, DeleteUsersMutationVariables>;
export const CreatePodDocument = gql`
    mutation createPod($input: CreatePodInput!) {
  createPod(input: $input) {
    ...PodFields
  }
}
    ${PodFieldsFragmentDoc}`;
export type CreatePodMutationFn = Apollo.MutationFunction<CreatePodMutation, CreatePodMutationVariables>;

/**
 * __useCreatePodMutation__
 *
 * To run a mutation, you first call `useCreatePodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPodMutation, { data, loading, error }] = useCreatePodMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePodMutation(baseOptions?: Apollo.MutationHookOptions<CreatePodMutation, CreatePodMutationVariables>) {
        return Apollo.useMutation<CreatePodMutation, CreatePodMutationVariables>(CreatePodDocument, baseOptions);
      }
export type CreatePodMutationHookResult = ReturnType<typeof useCreatePodMutation>;
export type CreatePodMutationResult = Apollo.MutationResult<CreatePodMutation>;
export type CreatePodMutationOptions = Apollo.BaseMutationOptions<CreatePodMutation, CreatePodMutationVariables>;
export const UpdatePodDocument = gql`
    mutation updatePod($input: MutatePodInput!) {
  updatePod(input: $input) {
    ...PodFields
  }
}
    ${PodFieldsFragmentDoc}`;
export type UpdatePodMutationFn = Apollo.MutationFunction<UpdatePodMutation, UpdatePodMutationVariables>;

/**
 * __useUpdatePodMutation__
 *
 * To run a mutation, you first call `useUpdatePodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePodMutation, { data, loading, error }] = useUpdatePodMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePodMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePodMutation, UpdatePodMutationVariables>) {
        return Apollo.useMutation<UpdatePodMutation, UpdatePodMutationVariables>(UpdatePodDocument, baseOptions);
      }
export type UpdatePodMutationHookResult = ReturnType<typeof useUpdatePodMutation>;
export type UpdatePodMutationResult = Apollo.MutationResult<UpdatePodMutation>;
export type UpdatePodMutationOptions = Apollo.BaseMutationOptions<UpdatePodMutation, UpdatePodMutationVariables>;
export const DeletePodDocument = gql`
    mutation deletePod($input: MutatePodInput!) {
  deletePod(input: $input) {
    ...PodFields
  }
}
    ${PodFieldsFragmentDoc}`;
export type DeletePodMutationFn = Apollo.MutationFunction<DeletePodMutation, DeletePodMutationVariables>;

/**
 * __useDeletePodMutation__
 *
 * To run a mutation, you first call `useDeletePodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePodMutation, { data, loading, error }] = useDeletePodMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePodMutation(baseOptions?: Apollo.MutationHookOptions<DeletePodMutation, DeletePodMutationVariables>) {
        return Apollo.useMutation<DeletePodMutation, DeletePodMutationVariables>(DeletePodDocument, baseOptions);
      }
export type DeletePodMutationHookResult = ReturnType<typeof useDeletePodMutation>;
export type DeletePodMutationResult = Apollo.MutationResult<DeletePodMutation>;
export type DeletePodMutationOptions = Apollo.BaseMutationOptions<DeletePodMutation, DeletePodMutationVariables>;
export const NewUsersDocument = gql`
    subscription newUsers($filter: UsersSubscriptionFilter) {
  newUsers(filter: $filter) {
    ...UsersFields
  }
}
    ${UsersFieldsFragmentDoc}`;

/**
 * __useNewUsersSubscription__
 *
 * To run a query within a React component, call `useNewUsersSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewUsersSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewUsersSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useNewUsersSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewUsersSubscription, NewUsersSubscriptionVariables>) {
        return Apollo.useSubscription<NewUsersSubscription, NewUsersSubscriptionVariables>(NewUsersDocument, baseOptions);
      }
export type NewUsersSubscriptionHookResult = ReturnType<typeof useNewUsersSubscription>;
export type NewUsersSubscriptionResult = Apollo.SubscriptionResult<NewUsersSubscription>;
export const UpdatedUsersDocument = gql`
    subscription updatedUsers($filter: UsersSubscriptionFilter) {
  updatedUsers(filter: $filter) {
    ...UsersFields
  }
}
    ${UsersFieldsFragmentDoc}`;

/**
 * __useUpdatedUsersSubscription__
 *
 * To run a query within a React component, call `useUpdatedUsersSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedUsersSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedUsersSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUpdatedUsersSubscription(baseOptions?: Apollo.SubscriptionHookOptions<UpdatedUsersSubscription, UpdatedUsersSubscriptionVariables>) {
        return Apollo.useSubscription<UpdatedUsersSubscription, UpdatedUsersSubscriptionVariables>(UpdatedUsersDocument, baseOptions);
      }
export type UpdatedUsersSubscriptionHookResult = ReturnType<typeof useUpdatedUsersSubscription>;
export type UpdatedUsersSubscriptionResult = Apollo.SubscriptionResult<UpdatedUsersSubscription>;
export const DeletedUsersDocument = gql`
    subscription deletedUsers($filter: UsersSubscriptionFilter) {
  deletedUsers(filter: $filter) {
    ...UsersFields
  }
}
    ${UsersFieldsFragmentDoc}`;

/**
 * __useDeletedUsersSubscription__
 *
 * To run a query within a React component, call `useDeletedUsersSubscription` and pass it any options that fit your needs.
 * When your component renders, `useDeletedUsersSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeletedUsersSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDeletedUsersSubscription(baseOptions?: Apollo.SubscriptionHookOptions<DeletedUsersSubscription, DeletedUsersSubscriptionVariables>) {
        return Apollo.useSubscription<DeletedUsersSubscription, DeletedUsersSubscriptionVariables>(DeletedUsersDocument, baseOptions);
      }
export type DeletedUsersSubscriptionHookResult = ReturnType<typeof useDeletedUsersSubscription>;
export type DeletedUsersSubscriptionResult = Apollo.SubscriptionResult<DeletedUsersSubscription>;
export const NewPodDocument = gql`
    subscription newPod($filter: PodSubscriptionFilter) {
  newPod(filter: $filter) {
    ...PodFields
  }
}
    ${PodFieldsFragmentDoc}`;

/**
 * __useNewPodSubscription__
 *
 * To run a query within a React component, call `useNewPodSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewPodSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewPodSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useNewPodSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewPodSubscription, NewPodSubscriptionVariables>) {
        return Apollo.useSubscription<NewPodSubscription, NewPodSubscriptionVariables>(NewPodDocument, baseOptions);
      }
export type NewPodSubscriptionHookResult = ReturnType<typeof useNewPodSubscription>;
export type NewPodSubscriptionResult = Apollo.SubscriptionResult<NewPodSubscription>;
export const UpdatedPodDocument = gql`
    subscription updatedPod($filter: PodSubscriptionFilter) {
  updatedPod(filter: $filter) {
    ...PodFields
  }
}
    ${PodFieldsFragmentDoc}`;

/**
 * __useUpdatedPodSubscription__
 *
 * To run a query within a React component, call `useUpdatedPodSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedPodSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedPodSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUpdatedPodSubscription(baseOptions?: Apollo.SubscriptionHookOptions<UpdatedPodSubscription, UpdatedPodSubscriptionVariables>) {
        return Apollo.useSubscription<UpdatedPodSubscription, UpdatedPodSubscriptionVariables>(UpdatedPodDocument, baseOptions);
      }
export type UpdatedPodSubscriptionHookResult = ReturnType<typeof useUpdatedPodSubscription>;
export type UpdatedPodSubscriptionResult = Apollo.SubscriptionResult<UpdatedPodSubscription>;
export const DeletedPodDocument = gql`
    subscription deletedPod($filter: PodSubscriptionFilter) {
  deletedPod(filter: $filter) {
    ...PodFields
  }
}
    ${PodFieldsFragmentDoc}`;

/**
 * __useDeletedPodSubscription__
 *
 * To run a query within a React component, call `useDeletedPodSubscription` and pass it any options that fit your needs.
 * When your component renders, `useDeletedPodSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeletedPodSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDeletedPodSubscription(baseOptions?: Apollo.SubscriptionHookOptions<DeletedPodSubscription, DeletedPodSubscriptionVariables>) {
        return Apollo.useSubscription<DeletedPodSubscription, DeletedPodSubscriptionVariables>(DeletedPodDocument, baseOptions);
      }
export type DeletedPodSubscriptionHookResult = ReturnType<typeof useDeletedPodSubscription>;
export type DeletedPodSubscriptionResult = Apollo.SubscriptionResult<DeletedPodSubscription>;