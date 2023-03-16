import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import "./MainPage.css";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const MainPage = () => {
    const [products, setProducts] = useState([]); // 배열 선언
    
    useEffect(() => {
        const url = "http://localhost:8080/products";
        
        axios.get(url).then((result) => {
            const products = result.data.product;

            setProducts(products);
            // console.log(result);
        }).catch((error) => {
            console.log("error", error);
        });
    }, [])

    return(
        <>
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
                    {products.map((product) => {
                        return (
                            <div className="product-card" key={product.id}>
                                <Link className="product-link" to={`/products/${product.id}`}>
                                    <div>
                                        <img className="product-img" src={product.imgUrl} alt={product.name}/>
                                    </div>
                                    <div className="product-content">
                                        <p className="product-name">{product.name}</p>
                                        <span className="product-price">{product.price}원</span>
                                        <div class="product_footer">
                                            <span className="product-seller">
                                                <img className="product-avatar" src="images/icons/avatar.png" alt=""/>
                                                <span>{product.seller}</span>
                                            </span>
                                            <span className="product-date">상품등록일 {dayjs(product.createdAt).format("YY-MM-DD hh시MM분ss초")}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })} 
                </div>
            </div>
        </>
    )
}
export default MainPage;