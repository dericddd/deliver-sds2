import { type } from 'os';
import { checkIsSelected } from './helpers';
import ProductsCard from './ProductCard';
import './styles.css'; 
import { Product } from './Types';

type Props ={
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct:(product: Product)=>void
}
function ProductsList({products,selectedProducts,onSelectProduct}: Props){
    return(
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductsCard key={product.id} product={product} onSelectProduct={onSelectProduct} isSelected={checkIsSelected(selectedProducts, product)}/>
                ))}
            </div>
        </div>
    )
}

export default ProductsList;