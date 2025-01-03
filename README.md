# MongoDB Query Optimization: Missing Index

This repository demonstrates a common MongoDB performance issue caused by a missing index on a query field.

The `bug.js` file contains code that executes a query without an optimized index. This leads to full collection scans, resulting in slow query times, especially with large datasets.

The `bugSolution.js` file provides the solution, which involves creating an index on the field used in the query, significantly improving query performance.

## Steps to Reproduce

1. Clone the repository.
2. Run `bug.js` and observe the execution time.
3. Create an index using the instructions in `bugSolution.js`.
4. Re-run `bug.js` and observe the improvement in query time.