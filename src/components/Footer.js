import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div id="footer">
                <Link to={"/about"}>회사소개</Link>
                <Link to={"/policy"}>이용약관</Link>
                <Link to={"/sales"}>통신판매업신고번호:123-1234</Link>
                <Link to={"/license"}>사업자등록번호:456-56-78951</Link>
                <Link to={"/service"}>고객센터:02-123-4567</Link>
            </div>
        </div>
    )
}
export default Footer;