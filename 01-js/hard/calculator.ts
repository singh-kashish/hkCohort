/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

// ../hard/calculator.ts
// ../hard/calculator.ts
type Token = {
  type: 'number' | 'op' | 'paren';
  value: number | string;
};

class Calculator {
  private result: number;

  constructor() {
    this.result = 0;
  }

  static _to_Number(value: number | string): number {
    const num = typeof value === 'number' ? value : Number(value);
    if (!Number.isFinite(num)) {
      throw new Error('Invalid number input');
    }
    return num;
  }

  add(num: number | string): number {
    const n = Calculator._to_Number(num);
    this.result += n;
    return this.result;
  }

  subtract(num: number | string): number {
    const n = Calculator._to_Number(num);
    this.result -= n;
    return this.result;
  }

  multiply(num: number | string): number {
    const n = Calculator._to_Number(num);
    this.result *= n;
    return this.result;
  }

  divide(num: number | string): number {
    const n = Calculator._to_Number(num);
    if (n === 0) {
      throw new Error('Division by zero is not allowed');
    }
    this.result /= n;
    return this.result;
  }

  clear(): number {
    this.result = 0;
    return this.result;
  }

  getResult(): number {
    return this.result;
  }

  calculate(str: string): number {
    if (typeof str !== 'string') {
      throw new Error('Input expression must be a string');
    }
    // Removes all spaces, tabs and new lines from the input string
    const stripped = str.replace(/\s+/g, '');
    // Tokenize
    const tokens = this._tokenize(stripped);
    // Convert to RPN using Shunting Yard Algorithm
    const rpn = this._toRPN(tokens);
    // Evaluate RPN expression
    const value = this._evalRPN(rpn);
    this.result = value;
    return this.result;
  }

  // Tokenizer function to convert input string with no whitespaces, tabs, new lines into tokens
  private _tokenize(expression: string): Token[] {
    const tokens: Token[] = [];
    let itr = 0;

    const isUnaryPosition = (): boolean => {
      const prev = tokens[tokens.length - 1];
      return !prev || prev.type === 'op' || (prev.type === 'paren' && prev.value === '(');
    };

    while (itr < expression.length) {
      const char = expression[itr];

      // Handle Parentheses
      if (char === '(' || char === ')') {
        tokens.push({ type: 'paren', value: char });
        itr++;
        continue;
      }

      // Handle Operators
      if (char === '*' || char === '/') {
        tokens.push({ type: 'op', value: char });
        itr++;
        continue;
      }

      // Handle + and - (could be unary or binary)
      if (char === '+' || char === '-') {
        if (isUnaryPosition()) {
          // Unary +/- must be followed by a number with an optional decimal point
          const { value: numStr, nextIndex } = this.readNumber(expression, itr + 1);
          const signedNumStr = (char === '-' ? '-' : '') + numStr;
          tokens.push({ type: 'number', value: this.parseNumberStrict(signedNumStr) });
          itr = nextIndex;
        } else {
          // Binary +/-
          tokens.push({ type: 'op', value: char });
          itr++;
        }
        continue;
      }

      // Number starting without sign
      if (this.isDigit(char) || char === '.') {
        const { value: numStr, nextIndex } = this.readNumber(expression, itr);
        tokens.push({ type: 'number', value: this.parseNumberStrict(numStr) });
        itr = nextIndex;
        continue;
      }

      // Invalid character (letters or other symbols)
      throw new Error(`Invalid character in expression: '${char}' at position ${itr}`);
    }

    // Validate token ordering (mismatched parens, ending with op, etc.)
    this._validateTokenSequence(tokens);
    return tokens;
  }

  // Helpers for Tokenizer
  // Is Digit
  private isDigit(char: string): boolean {
    return char >= '0' && char <= '9';
  }

  // Read Number
  private readNumber(str: string, startIndex: number): { value: string; nextIndex: number } {
    let sawDigit = false;
    let sawDot = false;
    let currIndex = startIndex;

    while (currIndex < str.length) {
      const currChar = str[currIndex];
      if (this.isDigit(currChar)) {
        sawDigit = true;
        currIndex++;
      } else if (currChar === '.') {
        if (sawDot) break; // Second dot encountered, stop reading number
        sawDot = true;
        currIndex++;
      } else {
        break; // Non-digit character encountered, stop reading number
      }
    }

    const numberStr = str.slice(startIndex, currIndex);
    // Prevent tokens like "5abc" after stripping spaces
    if (!sawDigit && !sawDot) {
      throw new Error(`Invalid number at position ${startIndex}`);
    }
    // If next char is a letter, it's invalid
    if (currIndex < str.length && /[a-zA-Z_]/.test(str[currIndex])) {
      throw new Error(`Invalid trailing character '${str[currIndex]}' after number at position ${currIndex}`);
    }
    return { value: numberStr, nextIndex: currIndex };
  }

  // Parse Number Strictly
  private parseNumberStrict(str: string): number {
    const num = Number(str);
    if (!Number.isFinite(num)) {
      throw new Error(`Invalid number: '${str}'`);
    }
    return num;
  }

  // Validate Token Sequence
  private _validateTokenSequence(tokens: Token[]): void {
    if (tokens.length === 0) throw new Error('Empty expression');

    let balance = 0;
    let prev: Token | null = null;

    for (const tok of tokens) {
      if (tok.type === 'paren') {
        if (tok.value === '(') {
          balance++;
        } else {
          balance--;
          if (balance < 0) throw new Error('Mismatched parentheses');
        }
      }

      if (tok.type === 'op' && prev && prev.type === 'op') {
        throw new Error('Invalid operator sequence');
      }

      // number followed immediately by '(' -> missing operator
      if (prev && prev.type === 'number' && tok.type === 'paren' && tok.value === '(') {
        throw new Error("Missing operator before '('");
      }

      // ')' followed immediately by number -> missing operator
      if (prev && prev.type === 'paren' && prev.value === ')' && tok.type === 'number') {
        throw new Error("Missing operator after ')'");
      }

      prev = tok;
    }

    if (balance !== 0) throw new Error('Mismatched parentheses');

    const last = tokens[tokens.length - 1];
    if (last.type === 'op') {
      throw new Error('Expression cannot end with an operator');
    }
  }

  private _toRPN(tokens: Token[]): Token[] {
    const output: Token[] = [];
    const ops: Token[] = [];

    const precedence: { [key: string]: number } = { '+': 1, '-': 1, '*': 2, '/': 2 };
    const isLeftAssociative = (op: string): boolean => {
      return op === '+' || op === '-' || op === '*' || op === '/';
    };

    for (const token of tokens) {
      if (token.type === 'number') {
        output.push(token);
      } else if (token.type === 'op') {
        while (ops.length) {
          const top = ops[ops.length - 1];
          if (
            top.type === 'op' &&
            ((isLeftAssociative(token.value as string) &&
              precedence[token.value as string] <= precedence[top.value as string]) ||
              (!isLeftAssociative(token.value as string) &&
                precedence[token.value as string] < precedence[top.value as string]))
          ) {
            output.push(ops.pop()!);
          } else {
            break;
          }
        }
        ops.push(token);
      } else if (token.type === 'paren') {
        if (token.value === '(') {
          ops.push(token);
        } else {
          // token.value === ')'
          let foundLeft = false;
          while (ops.length) {
            const top = ops.pop()!;
            if (top.type === 'paren' && top.value === '(') {
              foundLeft = true;
              break;
            }
            output.push(top);
          }
          if (!foundLeft) throw new Error('Mismatched parentheses');
        }
      } else {
        throw new Error('Unknown token');
      }
    }

    while (ops.length) {
      const top = ops.pop()!;
      if (top.type === 'paren') {
        throw new Error('Mismatched parentheses');
      }
      output.push(top);
    }

    return output;
  }

  private _evalRPN(rpn: Token[]): number {
    const stack: number[] = [];

    for (const tok of rpn) {
      if (tok.type === 'number') {
        stack.push(tok.value as number);
      } else if (tok.type === 'op') {
        if (stack.length < 2) {
          throw new Error('Invalid expression');
        }
        const b = stack.pop() as number;
        const a = stack.pop() as number;

        let res: number;
        switch (tok.value) {
          case '+':
            res = a + b;
            break;
          case '-':
            res = a - b;
            break;
          case '*':
            res = a * b;
            break;
          case '/':
            if (b === 0) throw new Error('Division by zero');
            res = a / b;
            break;
          default:
            throw new Error('Unknown operator');
        }
        stack.push(res);
      } else {
        throw new Error('Invalid RPN token');
      }
    }

    if (stack.length !== 1) {
      throw new Error('Invalid expression');
    }
    return stack[0]!;
  }
};

// CommonJS export to keep existing Jest require('../hard/calculator') working
module.exports = Calculator;
