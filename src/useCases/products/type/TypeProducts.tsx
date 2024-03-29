export type TProductRegister = {
    id_product: number;
    created_at?: Date | any;
    updated_at?: Date | any | null;
    descric_product: string | number;
    amount?:number | undefined |any;
    val_max_product: number;
    val_min_product: number;
    fk_brand: number |any;
    fk_sector: number | any;
    bar_code: string;
    image?: | string;
};

export type TItem = {
    descric: string;
};

export type TItens = {
    id: number;
    item: number;
    descric: string | number;
    amount: number;
    valor: number;
    tItem: number;
    image?:string;
};

export type TItemSale ={
    id: number
    item: number
    descric: string
    amount: number
    valor: number
    tItem: number

}

export type TSale = {
    filial: number;
    user_id: number;
    user: string;
    fk_name_pers: number;
    name_pers: string;
    cpf_pers: string;
    address_pers: string;
    phone_pers: string;
    bairro_pers: string
    fk_cep: number;
    num_cep: string | undefined | any
    name_city: string | undefined | any
    uf: string | undefined
    disc_sale: number;
    tItens: number;
    tNote: number;
    paySale: number;
    itens: [
        {
            id: number;
            item: number;
            descric: string;
            amount: number | any;
            valor: number | any;
            tItem: number;
        }
    ]
};

export type TBrand = {
id_brand: number;
name_brand: string;
};

export type TSector ={
    id_sector:number;
    name_sector:string;
};