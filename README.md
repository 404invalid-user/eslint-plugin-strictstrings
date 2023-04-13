# eslint-plugin-strictstrings
enforce no spaces in single quotes and spaces in double quotes


## example eslint config
```json
{
    "plugins": [
        "strictstrings"
    ],
    "rules": {
        "strictstrings/single-quotes-no-space": [
            "error",
            "never"
        ],
        "strictstrings/double-quotes-space": [
            "error",
            "always"
        ]
    }
}
```

## Rules

### Single Quotes

incorrect - `'some string'`

incorrect - `'some-string '`

correct - `'some-string'`

correct - `'some_string'`

<br>

### Double Quotes
correct - `"some string"`

correct - `"some-string "`

incorrect - `"some-string"`

incorrect - `"some_string"`