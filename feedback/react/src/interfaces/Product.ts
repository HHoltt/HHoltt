export default interface Product {
    price: number;
    label: string;
    pictures?: { url: string; main?: boolean; }[];
    tags?: string[];
    offerPrice: number;
}