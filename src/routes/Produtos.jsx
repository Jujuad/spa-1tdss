import { Link } from "react-router-dom"
import { ListaProdutos } from "../Components/ListaProdutos"
import './Produtos.css';
import{TiEdit as Editar} from "react-icons/ti"
import{AiFillDelete as Excluir} from "react-icons/ai"


export default function Produtos() {

  document.title = "Lista de Produtos";

  const tbEstilos = {
    textAlign: "Center",
    letterSpacing: "2px",
    color: "#ff4343",
    textDecoration: "none"
  }


  return (
    <div>
        <h1>Produtos</h1>

        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>PREÇO</th>
                <th>EDITAR</th>
            </tr>
            </thead>
            <tbody>
            {ListaProdutos.map((produto,indice)=>(
                 <tr key={indice} style={tbEstilos}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                    <td><Link to={`/editar/produtos/${produto.id}`}><Editar/> </Link> | <Link to={`/excluir/produtos/${produto.id}`}> <Excluir/> </Link></td>
                 </tr>
            ))}
        </tbody>
        <tfoot>
        <tr>
           <td colSpan={4} style={{textAlign:"center"}}>PRODUTOS</td>
        </tr>
        </tfoot>
        </table>
        
    </div>
  )
}
