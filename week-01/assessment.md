Week 1 Assessment - Name _An Nguyen_ _/21

### Bash _/3

_Write out the bash commands to create a new director called 'project'_

```

mkdir project 


```

_Write out the bash commands to change directories into 'project'_

```

cd project


```

_Write out the bash commands to create 'index.html' and 'style.css' files_

```

touch index.html style.css


```

### Git _/4

_Write out the git commands to initialize a git repository_

```

git init 


```

_Write out the git commands to add 'index.html' and 'style.css' to staging_

```

git add . 
or 
git index.html style.css


```

_Write out the git commands to commit your changes_

```

git commit -m "<message>"


```

_Write out the bash commands to remove the git repository_

```

rm -rf .git 


```

### Variables _/2

_Declare a variable 'captain' and assign the string 'Ahab' to it_

```

var captain = "Ahab";


```

_Use string concatentation and the 'captain' variable to form the phrase 'Oh Ahab, my Ahab!';_

```

"Oh " + captain + ", my " + captain + "!";


```


### Conditionals _1

_Write a conditional statement that console.log's 'SOS!' if there are more souls than life rafts._

var souls = 3;
var lifeRafts = 2;

```

if (souls > lifeRafts) {
    console.log("SOS!");
}


```

### Arrays _/4

_Declare and assign a variable 'weekend' to an array containing the string 'Friday'_

```

var weekend = ['Friday'];


```

_Add the strings 'Saturday' and 'Sunday' to 'weekend'_

```

weekend.push('Saturday', 'Sunday');


```

_How would you access 'Saturday'?_

```

weekend[1];


```

_Remove 'Friday' from 'weekend'_

```

weekend.slice(0);


```

### JavaScript Objects _/3

_Declare and assign a variable 'brain' to an object literal with a property of 'energyLevel' that points to the number 10_

```

var brain = {
    energyLevel: 10
    }


```

_Access the value 10 in 'brain'_

```

brain.energyLevel;


```

_Add a 'dream' property to 'brain' that points to the string 'Electric Sheep'_

```

brain.dream = "electric sky";

```

### Functions _/2

_Write a function to calculate and return the area of a rectangle._
_(The area of a rectangle is the product of its length and width)_

```

var area = function(l, w) {
    var a = l * w;
    return a;
}


```

_Invoke the function with 3 and 4 as arguments and assign the returned value to a variable_

```

area(3, 4);


```

### HTML _/1

_Write an anchor tag that links to 'http://www.google.com' with the classes 'search-engine' and 'preferred' and the text content 'Google'_

```

<a href="http://www.google.com" class="search-engine preferred">Google</a>


```

### CSS _/1

_Write a CSS rule-set that would target elements with the class 'active' and set their background colors to 'pink' and give them a margin of 5 pixels._

```

.active {
    background: pink;
    margin: 5px;
}


```
