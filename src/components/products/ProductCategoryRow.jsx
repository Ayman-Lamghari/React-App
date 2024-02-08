/**
 * Ligne de tableau avec nom de la categorie
 * 
 * @param {String} name 
*/
export function ProductCategoryRow({name}){
    
    return <tr>
        <td colspan={2}><stron>{name}</stron></td>
    </tr>
}