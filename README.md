# SQL Injection Simulation Project

This project demonstrates how SQL injection works by simulating three different security scenarios in a web application. The goal is to highlight the importance of security measures at both front-end and back-end levels.

## Technologies Used

- **Front-end**: Vue.js with Nuxt.js (TypeScript)
- **Back-end**: Java with Spring Framework
- **Database**: MySQL

## Project Scenarios

We simulate three different security scenarios to demonstrate SQL injection vulnerabilities and protections:

### Scenario 1: No Security
- **Front-end**: No input validation or security measures
- **Back-end**: No parameterized queries or input sanitization
- **Result**: Highly vulnerable to SQL injection attacks

### Scenario 2: Secure Back-end Only
- **Front-end**: No input validation
- **Back-end**: Uses prepared statements and input sanitization
- **Result**: Protected against SQL injection despite vulnerable front-end

### Scenario 3: Secure Front-end Only
- **Front-end**: Implements input validation and sanitization
- **Back-end**: No server-side security measures
- **Result**: Vulnerable to direct API attacks despite client-side protection

## How SQL Injection Works

SQL injection is a code injection technique that exploits security vulnerabilities in an application's database layer. Attackers can insert malicious SQL statements into input fields, potentially gaining unauthorized access to sensitive data or performing destructive operations.

## Scenario Details

### Scenario 1: Unprotected System
| Aspect          | Implementation       | Vulnerability                         |
|-----------------|----------------------|---------------------------------------|
| Front-end       | No input validation  | Accepts any user input                |
| Back-end        | Raw SQL queries      | Direct string concatenation in queries|
| Database        | Standard connection  | Accepts all queries                   |

**Impact**: Full system compromise possible through simple injection techniques.

### Scenario 2: Back-end Protection
| Aspect          | Implementation               | Protection Level                     |
|-----------------|------------------------------|--------------------------------------|
| Front-end       | No validation                | Still accepts malicious input        |
| Back-end        | Prepared statements          | Blocks injection attempts            |
| Database        | Parameterized queries        | Only executes legitimate queries     |

**Impact**: System remains secure despite malicious front-end input.

### Scenario 3: Front-end Protection Only
| Aspect          | Implementation               | Weakness                             |
|-----------------|------------------------------|--------------------------------------|
| Front-end       | Input validation             | Can be bypassed with direct API calls|
| Back-end        | Raw SQL queries              | Vulnerable to crafted requests       |
| Database        | Standard connection          | Executes whatever SQL is received    |

**Impact**: Appears secure to users but vulnerable to direct attacks.

## Getting Started

1. Clone the repository
2. Set up the database (see `database/README.md`)
3. Configure front-end and back-end environments
4. Run both servers
5. Test each scenario through the provided interfaces

## Contribution

Contributions are welcome! Please open an issue or pull request for any security improvements or additional scenarios.

## License

MIT

MIT License

Copyright (c) [2025] [Fatec Mococa: João Paulo Marinho Correia && Gabriel Blasi Castoldi]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
