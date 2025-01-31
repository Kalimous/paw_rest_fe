import { useNavigate } from "react-router-dom";
import "./Body.css";

const Body = () =>{
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('../Register')
    }

    return(
        <div>
            <div className="animal-btn">
                <button className="abandoned-animals-report">유기동물<br/>제보</button>
                <button className="missing-animals-register" onClick={handleClick}>실종동물<br/>등록</button>
            </div>           
        </div>          
    );
};

export default Body;