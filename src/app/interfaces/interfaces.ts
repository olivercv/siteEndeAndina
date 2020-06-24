export interface INews {
  publications: IPublication[];
  total: number;
  ok: boolean;
}

export interface ICategories {
  publications: ICategory[];
  total: number;
  ok: boolean;
}



export interface IPublication {
    id: number;
    date: Date;
    title: string;
    description: string;
    category: ICategory;
    active: boolean;
    type?: number;
    order?: number;
    image?: string;
  }

export interface ICategory {
    id: number;
    name: string;
    description: string;
    active: boolean;
    order?: number;
  }

