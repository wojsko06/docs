//@ts-nocheck
// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
import { gql } from 'tinacms';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  sys?: Maybe<SystemInfo>;
  id: Scalars['ID'];
  form: Scalars['JSON'];
  values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  getCollection: Collection;
  getCollections: Array<Collection>;
  node: Node;
  getDocument: DocumentNode;
  getDocumentList: DocumentConnection;
  getDocumentFields: Scalars['JSON'];
  getDocsDocument: DocsDocument;
  getDocsList: DocsConnection;
};


export type QueryGetCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};


export type QueryGetDocsDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocsListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};

export type DocumentNode = DocsDocument;

export type Docs = {
  __typename?: 'Docs';
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['JSON']>;
};

export type DocsDocument = Node & Document & {
  __typename?: 'DocsDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Docs;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type DocsConnectionEdges = {
  __typename?: 'DocsConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<DocsDocument>;
};

export type DocsConnection = Connection & {
  __typename?: 'DocsConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<DocsConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  createDocument: DocumentNode;
  updateDocsDocument: DocsDocument;
  createDocsDocument: DocsDocument;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdateDocsDocumentArgs = {
  relativePath: Scalars['String'];
  params: DocsMutation;
};


export type MutationCreateDocsDocumentArgs = {
  relativePath: Scalars['String'];
  params: DocsMutation;
};

export type DocumentMutation = {
  docs?: InputMaybe<DocsMutation>;
};

export type DocsMutation = {
  title?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['JSON']>;
};

export type DocsPartsFragment = { __typename?: 'Docs', title?: string | null | undefined, slug?: string | null | undefined, section?: string | null | undefined, body?: any | null | undefined };

export type GetDocsDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetDocsDocumentQuery = { __typename?: 'Query', getDocsDocument: { __typename?: 'DocsDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Docs', title?: string | null | undefined, slug?: string | null | undefined, section?: string | null | undefined, body?: any | null | undefined } } };

export type GetDocsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDocsListQuery = { __typename?: 'Query', getDocsList: { __typename?: 'DocsConnection', totalCount: number, edges?: Array<{ __typename?: 'DocsConnectionEdges', node?: { __typename?: 'DocsDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Docs', title?: string | null | undefined, slug?: string | null | undefined, section?: string | null | undefined, body?: any | null | undefined } } | null | undefined } | null | undefined> | null | undefined } };

export const DocsPartsFragmentDoc = gql`
    fragment DocsParts on Docs {
  title
  slug
  section
  body
}
    `;
export const GetDocsDocumentDocument = gql`
    query getDocsDocument($relativePath: String!) {
  getDocsDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      ...DocsParts
    }
  }
}
    ${DocsPartsFragmentDoc}`;
export const GetDocsListDocument = gql`
    query getDocsList {
  getDocsList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...DocsParts
        }
      }
    }
  }
}
    ${DocsPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      getDocsDocument(variables: GetDocsDocumentQueryVariables, options?: C): Promise<{data: GetDocsDocumentQuery, variables: GetDocsDocumentQueryVariables, query: string}> {
        return requester<{data: GetDocsDocumentQuery, variables: GetDocsDocumentQueryVariables, query: string}, GetDocsDocumentQueryVariables>(GetDocsDocumentDocument, variables, options);
      },
    getDocsList(variables?: GetDocsListQueryVariables, options?: C): Promise<{data: GetDocsListQuery, variables: GetDocsListQueryVariables, query: string}> {
        return requester<{data: GetDocsListQuery, variables: GetDocsListQueryVariables, query: string}, GetDocsListQueryVariables>(GetDocsListDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { staticRequest } from 'tinacms'
const requester: (doc: any, vars?: any, options?: any) => Promise<any> = async (
  doc,
  vars,
  _options
) => {
  let data = {}
  try {
    data = await staticRequest({
      query: doc,
      variables: vars,
    })
  } catch (e) {
    // swallow errors related to document creation
    console.warn('Warning: There was an error when fetching data')
    console.warn(e)
  }

  return { data, query: doc, variables: vars || {} }
}

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = ()=>getSdk(requester)

