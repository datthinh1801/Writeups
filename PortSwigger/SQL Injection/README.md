# SQL Injection
## Cheat sheet
### String concatenation
| DBMS | Syntax |
|---|---|
| Oracle | `'foo'\|\|'bar'` |
| Microsoft | `'foo'+'bar'` |
| PostgreSQL | `'foo'\|\|'bar'` |
| MySQL | `'foo' 'bar'` (note the space between the 2 strings) |
| | `'CONCAT('foo','bar')` |
