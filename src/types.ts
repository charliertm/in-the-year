export interface WikiData {
  batchcomplete: string;
  warnings: Warnings;
  query: Query;
}

export interface Query {
  normalized: Normalized[];
  redirects: Normalized[];
  pages: Pages;
}

export interface Normalized {
  from: string;
  to: string;
}

export interface Pages {
  [key: string]: Page;
}

export interface Page {
  pageid: number;
  ns: number;
  title: string;
  extract: string;
  thumbnail: Thumbnail;
  pageimage: string;
  contentmodel: string;
  pagelanguage: string;
  pagelanguagehtmlcode: string;
  pagelanguagedir: string;
  touched: Date;
  lastrevid: number;
  length: number;
  fullurl: string;
  editurl: string;
  canonicalurl: string;
}

export interface Thumbnail {
  source: string;
  width: number;
  height: number;
}

export interface Warnings {
  extracts: Extracts;
}

export interface Extracts {
  "*": string;
}
