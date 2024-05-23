import { Link } from "react-router-dom";
import "../public/css/admin/admin.css"
import "../public/css/admin/general.css"
import axios from "axios"; 

const TableRow = ( { index, id, email, lastName, department, handleDelete } ) => {  

    return ( 
        <>
            <tr>
                <td className="faField"> {index} </td> 
                <td className="faField"> {lastName} </td>
                <td className="enField"> {id} </td>
                <td className="faField"> {department} </td>
                <td>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-4">
                            <Link to={`/admin/showAdmin/${id}`} class="btn btn-success" role="button">
                                 <img src={'/uploads/icons/edit.svg'} alt="edit" />   
                            </Link>   
                            </div>
                            <div class="col-4">
                            {/* <form > */}
                                <button onClick={() => handleDelete(id)} type="button" class="btn btn-danger">
                                    <img src={'/uploads/icons/trash-2.svg'} alt="remove" />
                                </button>
                            {/* </form> */}
                        </div>
                        </div>
                        </div>
                </td>
            </tr>
        </>
     );
}
 
export default TableRow;