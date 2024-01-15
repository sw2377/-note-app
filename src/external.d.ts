import { LexicalNode as OriginalLexicalNode } from "lexical";

declare module "lexical" {
  interface LexicalNode {
    __text?: string;
  }
}

export declare class ExtendedLexicalNode extends OriginalLexicalNode {}
