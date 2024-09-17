import { notFound } from "next/navigation";
export default function ProductId({
    params,
}: {
    params: {
        productId: string;
    };
}) {
    if(parseInt(params.productId)>1000){
        notFound();
    }
    return <h1>Product Number { params.productId }</h1> 
}