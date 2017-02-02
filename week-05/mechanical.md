# Mechanical - Week 05

## Express.js

Given the following HTML

```
<a href="http://localhost:8080/dog?breed=Bruno&age=10">Dog</a>
```

Write a route handler in Express that would send back the query string as JSON.

```



```

Given the following HTML form

```
<form method="POST" action="/process_post">
  <input type="text" name="first_name">
  <input type="text" name="last_name">
  <input type="submit" value="Submit">
</form>
```

Write a route handler in Express that checks that the 'first_name' is blank
If the 'first_name' is blank redirect to '/fail' otherwise redirect to '/success'

```







```

## AJAX

Using jQuery - perform an XHR POST request to '/users' and send {name: 'sam', age: 25} as data.
Console.log the response.

```







```

## CRUD

Assume you are in the __Mongo shell__

1. Create a new database called "misc"

```

```
2. Add a collection called animals with species dog, and breed Husky

```

```
3. Find  all documents in animals collection

```

```

## Templating

Given an array of `var letters = ['A', 'B', 'C']` Use EJS templating to render the letters as an unordered list.

```





```

## Bonus

Write the function that accomplishes the following:

```
add(4)(5) // 9
```

```





```
