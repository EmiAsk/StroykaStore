export type TCard = {
    id: number;
    fixId: number;
    img: string;
    title: string;
    provider: string;
    rating: number;
    price: number;
    type: number;
    discount: string;
    discountAmount?: number;
}