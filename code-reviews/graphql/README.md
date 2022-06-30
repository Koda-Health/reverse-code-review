# Let's discuss ways to improve this GraphQL schema

Given the graphql schema in `code-review.graphql`, we're looking to see what points you bring up for discussion, what questions you ask and suggestions that you make. What would you add to this file before approving a code review?

Some things to consider as you review this design:

- `getMultipleDocs` may be backed a large table/collection with potentially thousands of documents
- For instance on the `updateUser` mutation, the number of input parameters is likely to grow over time (e.g. we may add a `favoriteColor` field)
- There are no one right answers and everything in this file is up for debate...

The above are not the only considerations-- but are a few things to keep in mind as you evaluate this design.
