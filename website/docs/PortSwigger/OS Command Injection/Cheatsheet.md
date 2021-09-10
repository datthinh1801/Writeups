## Useful commands
| Purpose of command | Linux | Windows |
|---|---|---|
| Name of current user | `whoami` | `whoami` |
| Operating system | `uanme -a` | `ver` |
| Network configuration | `ifconfig` | `ipconfig /all` |
| Network connections | `netstat -an` | `netstat -an` |
| Running processes | `ps -ef` | `tasklist` |

## Ways of injecting OS commands
| Method | Unix-based | Windows |
|---|---|---|
| `&` | Yes | Yes |
| `&&` | Yes | Yes |
| `\|` | Yes | Yes |
| `\|\|` | Yes | Yes |
| `;` | Yes | No |
| Newline - `0x0a` or `\n`| Yes | No |
| \` injected command \` | Yes | No |
| $( injected command ) | Yes | No |
