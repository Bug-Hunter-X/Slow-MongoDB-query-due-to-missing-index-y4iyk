```javascript
db.collection('myCollection').createIndex( { field: 1 } );
```
Adding this line before running the original query ensures that an index on the `field` is used, greatly improving performance.  Ensure that you choose appropriate index types for optimal results based on your queries.