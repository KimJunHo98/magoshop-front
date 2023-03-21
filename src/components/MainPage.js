import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config/constants.js";
import axios from "axios";
import {Carousel} from 'antd';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "./MainPage.css";
dayjs.extend(relativeTime);

const MainPage = () => {
	const [products, setProducts] = useState([]);
	const [banners, setBanners] = useState([]);

	useEffect(() => {
		axios
			.get(`${API_URL}/products`)
			.then((result) => {
				const products = result.data.product;
				setProducts(products);
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get(`${API_URL}/banners`)
			.then((result) => {
				const banners = result.data.banner;
				setBanners(banners);
			})
			.catch((error) => {
				console.error("에러 발생 : ", error);
			});
	}, []);
	
	return (
		<div>
			<div id="body">
				<Carousel autoplay autoplaySpeed={3000}>
					{banners.map((banner) => {
						return (
							<Link to={banner.href} key={banner.id}>
								<div id="banner">
									<img src={`${API_URL}/${banner.imageUrl}`} alt="" />
								</div>
							</Link>
						);
					})}
				</Carousel>
				<h1>Products</h1>
				<div id="product-list">
					{products.map((product) => {
						return (
							<div className="product-card" key={product.id}>
								{product.soldout === 1 ? <div className="product-blur"></div> : null}
								<Link className="product-link" to={`/products/${product.id}`}>
									<div>
										<img className="product-img" src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
									</div>
									<div className="product-content">
										<span className="product-name">{product.name}</span>
										<span className="product-price">{product.price}원</span>
										<div className="product-footer">
											<span className="product-seller">
												<img src="images/icons/avatar.png" className="product-avatar" alt="{product.seller}" />
												<span>{product.seller}</span>
											</span>
											<span className="product-date">상품등록일: {dayjs(product.createdAt).format("YY년MM월DD일-hh시MM분ss초")}</span>
											<pre id="description">{product.desc}</pre>
										</div>
									</div>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default MainPage;
