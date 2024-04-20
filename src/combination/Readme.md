# Combinators

## Exercise input

- Given is the following code

```
import { from } from 'rxjs';
import { delay } from 'rxjs/operators';

const titleDb = from([
    {id: 1, title: 'Titel 1'},
    {id: 2, title: 'Titel 2'}
]).pipe(delay(500));

const historyDb = from([
    {id: 1, history: {}},
    {id: 2, history: {created: '1990'}}
]).pipe(delay(500));;
```

## Expected output

- Combine the above streams so that you receive the title and the corresponding history.
