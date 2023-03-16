import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom"; //useParams을 사용해서 id값을 전달받음
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const ProductPage = () => {
    const [product, setProduct] = useState(null); // 처음엔 null
    const navigate = useNavigate();
    const {id} = useParams();
    
    useEffect(() => {
        const url = `http://localhost:8080/products/${id}`;
        
        axios.get(url).then((result) => {
            setProduct(result.data.product);
            // console.log(result);
        }).catch((error) => {
            console.log("error", error);
        });
    }, [id])

    if(product == null){
        return <h1>상품정보를 받고 있습니다...</h1>
        // product가 null이면 return해서 useEffect안에 함수를 다시 실행함
    }
    
    return (
        <div>
            <div>
                <button id="back-btn" onClick={() => {navigate(-1)}}>back</button>
                <div id="seller">{product.desc}</div>
                <br />
                <div id="image-box">
                    <img src={`/${product.imgUrl}`}  alt={product.name}/>
                </div>
                <div id="content-box">
                    <div id="name">{product.name}</div>
                    <div id="price">{product.price}원</div>
                    <div id="createdAt">상품등록일 {dayjs(product.createdAt).format("YY-MM-DD-hh시MM분ss초")}</div>
                    <div id="seller">{product.seller}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;



