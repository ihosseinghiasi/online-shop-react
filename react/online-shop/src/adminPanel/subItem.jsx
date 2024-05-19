import "../public/css/admin/accordion.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
const SubItem = ({ firstItem, secondItem, faq }) => {
    const { title1, icon1, link1 } = firstItem
    const { title2, icon2, link2 } = secondItem
    const [ title3, setTitle3 ] = useState("")
    const [ icon3, setIcon3 ] = useState("")
    const [ link3, setLink3 ] = useState("")
   const navigate = useNavigate()
    useEffect(() => {
    if( faq.sub3 !== undefined ) {
        setTitle3(faq.sub3.title3)   
        setIcon3(faq.sub3.icon3)   
        setLink3(faq.sub3.link3)   
    }
   }, [])

   function navigation () {
    console.log({link2})
    navigate(link2)
   }

    return ( 
        <>
            <div className="subAccordion">
            <li><p> <img src={icon1} className="me-4 mt-1" alt="" /> {title1} </p></li>
            </div>
            <div className="subAccordion">
            <li onClick={navigation}><p> <img src={icon2} className="me-4 mt-1" alt="" /> {title2} </p></li>
            </div>
            { title3 !== "" ? (
                <div className="subAccordion">
                    <li><p> <img src={icon3} className="me-4" alt="" /> {title3} </p></li>
                </div>
        ) : ( null ) } 
     </>
     );
}
 
export default SubItem;