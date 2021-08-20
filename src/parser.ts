import { Tokenizer } from "./token";

class Parser {
    private tokenizer: Tokenizer;
    constructor(input: string) {
        this.tokenizer = new Tokenizer(input);
    }

    nextToken() {
        return this.tokenizer.next();
    }

    parse() {
        const token = this.nextToken();
    }
}