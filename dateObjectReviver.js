let data =JSON.parse(text, function(key, value) {
    // Remove any values whose property name begins with an underscore by 
    // returning undefined.
    if (key[0] === "_") return undefined;

    // If the value is a string in ISO 8601 date format convert it to a Date.
    if (typeof value === "string" &&
        /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)) {
        return new Date(value);
    };

    // If the value is not a proper date format, return the value unchanged.
    return value;
});