import React from "react";
import { Form, Input, Button, Divider, InputNumber } from "antd";
import styles from "./Upload.module.css";
const { TextArea } = Input;

const UploadPage = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    // const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    // };

    return (
        <div>
            <div id={styles.upload_container}>
                <Form name="uploadForm" onFinish={onFinish}>
                    <Form.Item name="upload">
                        <div id={styles.upload_img}>
                            <img src="/images/icons/camera.png" alt="" />
                            <span>이미지를 업로드 해주세요</span>
                        </div>
                    </Form.Item>
                    <Divider/>
                    <Form.Item label={<span className={styles.upload_label}>상품명</span>} name="product-name" rules={[{ required: true, message: "상품명은 필수 입력 사항입니다." }]}>
					    <Input className={styles.upload_name} placeholder="상품명을 입력해주세요" size="large" />
				    </Form.Item>
                    <Divider/>
                    <Form.Item label={<span className={styles.upload_price}>판매가</span>} name="product-price" rules={[{ required: true, message: "판매가는 필수 입력 사항입니다." }]}>
                        <InputNumber className={styles.upload_price} size="large" min={0} defaultValue={0} />
                    </Form.Item>
                    <Divider/>
                    <Form.Item label={<div className={styles.upload_label}>상품설명</div>} name="product-desc" rules={[{ required: true, message: "상품설명은 필수 입력 사항입니다." }]}>
                        <TextArea id={styles.product_desc} size="large" placeholder="상품정보를 입력해주세요" maxLength={300} />
                    </Form.Item>
                    <Form.Item>
                        <Button id={styles.submit_button} type="primary" htmlType="submit">
                            상품등록
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default UploadPage;
 