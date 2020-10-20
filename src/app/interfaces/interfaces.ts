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
    _id: number;
    date: Date;
    title: string;
    description: string;
    category: ICategory;
    active: boolean;
    type?: number;
    order?: number;
    image?: string;
    lnk?: string;
  }

export interface ICategory {
    _id: number;
    name: string;
    description: string;
    active: boolean;
    order?: number;
  }

export interface IConvocatories {
    convocatories: IConvocatory[];
    total: number;
    ok: boolean;
  }

export interface Idocument {
    _id: number;
    titulo: string;
    sfile: string;
    convocatory: IConvocatory;
  }

export interface IConvocatory {
  _id: number;
  titulo: string;
  estado: string;
  correo: string;
  fecha_invitacion: Date;
  fecha_presentacion: Date;
  fecha_ampliacion: Date;
  fecha_consultas: Date;
  docs: Idocument[];
}
