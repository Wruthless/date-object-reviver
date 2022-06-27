# Date object reviver

This is some JavaScript code that takes a date string and parses it to a date object.

The following screen shot shows the original date object as the first entry. The second line shows the date object passed to `JSON.stringify()`. The third line is what is displayed with a simple `JSON.parse()`. Finally, we see the object has returned to its orginal form in the last line.

![](https://assets.codepen.io/2154393/date-object.png)

The main `JSON.parse()` function requires an ISO 8601 date format. You can manipulate the regex in the if statement to define different formats. Or, better yet, make is so you can pass multiple formats :-)
