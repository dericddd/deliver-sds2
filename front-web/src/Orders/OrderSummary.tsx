import { type } from "os";
import { formatPrice } from "./helpers";
import { OrderLocationData } from "./Types";

type Props ={amount:number;totalPrice:number;onSubmit:()=>void;}

function OrderSumarryr({amount, totalPrice, onSubmit}: Props){
    return(
        <div className="order-summary-container">
            <div className="order-summary-content">
                <div>
                    <span className="amount-selected-container">
                        <strong className="amount-selected">{amount}</strong>
                        PEDIDOS SELECIONADOS
                    </span>
                    <span className="order-summary-total">
                        <strong className="amount-selected">{formatPrice(totalPrice)}</strong>
                        VALOR TOTAL
                    </span>
                </div>
                <button className="order-summary-make-order" onClick={onSubmit}>
                    FAZER PEDIDO
                </button>
            </div>
        </div>
    )
}

export default OrderSumarryr;