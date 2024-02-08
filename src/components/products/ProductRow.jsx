/**
 * Ligne produit dans un tableau a 2 colonnes (nom /prix)
 * @param {{name: string, stocked: boolean, price: string}} product 
 */
export function ProductRow ({product}) {
    const style = product.stocked ? undefined : {color: 'red'}

    return <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}