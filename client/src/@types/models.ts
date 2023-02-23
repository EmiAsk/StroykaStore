export interface ProductModel {
    id: string;
    img: string;
    title: string;
    provider: string;
    rating: number;
    price: number;
    type: string;
    discount: string;
    discountAmount?: number;
};

export interface CartProductModel {
    count: string;
    id: string;
    user: string;
    product: ProductModel;
};

export interface SentOrderModel {
    items: {
        product: string;
        count: string;
    }[]
};

export interface ResponseOrderModel {
    createdAt: string;
    id: string;
    items: {
        count: number;
        product: ProductModel;
    }[];
    user: string;
};

export interface OrderCardModel {
    count: number;
    product: ProductModel
};

export interface OrderModel {
    [key: number]: CartProductModel;
    createdAt: string;
    id: string;
};

export interface ReviewModel {
    avatar: string;
    content: string;
    name: string;
    createdAt: string;
};

export interface BrandsModel {
    id: string;
    list: string[];
    title: string
};

export interface CatalogModel {
    title: string;
    image: string;
    list: {
        title: string;
        path: string
    }[];
};

export interface InputsModel {
    name: string,
    surname: string;
    tel: number;
    email: string;
    birthDay: string;
    password: string;
    cpassword: string;
};

type labelVariant = 'Популярные' | 'Дешевле' | 'Дороже' | 'По алфавиту';
type titleVariant = 'popular' | 'cheaper' | 'expensive' | 'alphabetically';

export interface SortTypeModel {
    label: labelVariant;
    title: titleVariant;
};


