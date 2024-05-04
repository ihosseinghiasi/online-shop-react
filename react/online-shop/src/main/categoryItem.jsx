import "../public/css/shop/mainPage.css"

const CategoryItem = ({image, title}) => {
    return ( 
        <>
          <div className="categoryFrame">
                <a href="/admin-cPanel/category/<%= category.categoryName %>/<%= category.id %>">
                    <div className="categoryItem">
                        <img src={image} alt="categoryImage" />
                        <p> {title} </p>
                    </div>    
                </a>
            </div>            
        </>
     )
}
 
export default CategoryItem;