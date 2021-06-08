/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Authenticate
// ====================================================

export interface Authenticate_authenticate {
  __typename: 'User'
  fullName: string | null
  firstName: string | null
  lastName: string | null
  googleId: string | null
  id: string | null
  picture: string | null
}

export interface Authenticate {
  authenticate: Authenticate_authenticate | null
}
