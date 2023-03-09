import React, {useState, useEffect} from "react";
import "./MainPage.css";
import axios from "axios";

const MainPage = () => {
    const [products, setProducts] = useState([]); // 배열 선언
    
    useEffect(() => {
        const url = "https://34cfd325-3eb1-4e77-acaf-677aeafe6486.mock.pstmn.io/products";
        
        axios.get(url).then((result) => {
            const products = result.data.products;

            setProducts(products);
        }).catch((error) => {
            console.log("error", error);
        });
    }, [])
    console.log(products);

    return(
        <>
            <div id="header">
                <div id="header-area">
                    <img src="images/icons/logo.png" alt=""/>
                </div>
            </div>
            <div id="body">
                <div id="banner">
                    <img src="images/banners/banner1.png" alt=""/>
                </div>
                <h1>Products</h1>
                <div id="product-list">
                    {/* map()함수란?
                        - 반복되는 컴포넌트를 렌더링하기 위하여 자바스크립트 배열의 내장 함수인 map()을 사용 한다.
                        - 파라미터로 전달된 함수를 사용하여 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 새로운 배열 생성 한다. 
                    */}
                    {products.map((product, i) => {
                        return(
                            <div className="product-card" key={i}>
                                <div>
                                    <img className="product-img" src={product.imageUrl} alt=""/>
                                </div>
                                <div className="product-content">
                                    <p className="product-name">{product.name}</p>
                                    <span className="product-price">{product.price}원</span>
                                    <span className="product-seller">
                                        <img className="product-avatar" src="images/icons/avatar.png" alt=""/>
                                        <span>{product.seller}</span>
                                    </span>
                                </div>
                            </div>
                        )
                    })} 
                </div>
            </div>
            <div id="footer">
                <a href="#">회사소개</a>
                <a href="#">이용약관</a>
                <a href="#">통신판매업신고번호:123-1234</a>
                <a href="#">사업자등록번호:456-56-78951</a>
                <a href="#">고객센터:456-78951</a>
            </div>
        </>
    )
}
export default MainPage;