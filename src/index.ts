import * as charCodes from './char';

enum TokenType {
    LB, // {
    RB, // }
    COMMA, // ,
    COLON, // :
    LM, // [
    RM, // ]
    LETTER //
}

class Token {
    type: TokenType;
    value: string;
    constructor(type, value) {}
}

export abstract class Parser {
    input: string;
    offset = 0;
    peek = charCodes.u;
    constructor(input: string) {
        this.input = input;
        this.peek = this.input.charCodeAt(this.offset);
    }

    isLetter() {
        return this.peek >= charCodes. && this.peek <= Chars.$Z || this.peek >= Chars.$a && this.peek <= Chars.$z;

    }

    nextToken() {
        switch(this.peek) {
            case char.
        }
    }

    consume() {
        this.offset++;
        if(this.offset > this.input.length) {
            this.peek = 0;
        } else {
            this.peek = this.input.charCodeAt(this.offset);
        }
    }
}