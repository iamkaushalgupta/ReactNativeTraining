export interface Links {
    previous?: any;
    current: string;
    next: string;
}

export interface Pagination {
    total: number;
    pages: number;
    page: number;
    limit: number;
    links: Links;
}

export interface Meta {
    pagination: Pagination;
}

export interface Datum {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
}

export interface TestRoot {
    meta: Meta;
    data: Datum[];
}