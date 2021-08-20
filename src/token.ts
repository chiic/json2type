import * as Chars from './char';

enum TokenType {
	OpenBraceToken = 1,
	CloseBraceToken = 2,
	OpenBracketToken = 3,
	CloseBracketToken = 4,
	CommaToken = 5,
	ColonToken = 6,
	NullKeyword = 7,
	TrueKeyword = 8,
	FalseKeyword = 9,
	StringLiteral = 10,
	NumericLiteral = 11,
	LineCommentTrivia = 12,
	BlockCommentTrivia = 13,
	LineBreakTrivia = 14,
	Trivia = 15,
	Unknown = 16,
	EOF = 17
}


class Token {
    type: TokenType;
    value: string;
    constructor(type, value) {}
}

export class Tokenizer {
    input: string;
    offset = 0;
    peek = 0;
    private token: TokenType;
    constructor(input: string) {
        this.input = input;
        this.peek = this.input.charCodeAt(this.offset);
    }

    isLetter() {}

    getToken() {
        return this.token
    }

    next() {
        while(true) {
            switch(this.peek) {
                case Chars.space:
                case Chars.tab:
                case Chars.carriageReturn:
                    this.consume();
                    continue;
                case Chars.leftCurlyBrace:
                    this.consume();
                    return this.token = TokenType.OpenBraceToken;
                case Chars.rightCurlyBrace:
                    this.consume();                
            }
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