import {Link, useNavigate} from 'react-router-dom';
import {Button} from "antd";
import { UploadOutlined } from '@ant-design/icons';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <Link to="/">
                        <img src="/images/icons/logo.png" alt="" />
                    </Link>
                    {/* Route의 path에 작성한 경로대로 navigate연결 */}
                    <Button size="large" shape="round" icon={<UploadOutlined />} onClick={() => {navigate("/upload")}}>
                        상품업로드
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Header;