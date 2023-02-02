import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';


function LandingPage(props) {

    return (
        <div>        
          
            {/* <div>
                메인페이지
            </div> */}
            <div>
                <Link to="/ModelPage">
                    <button className="btn">
                        3D 인테리어 모델
                    </button>
                </Link>

            </div>


            <div>
                <Link to="/login">
                    <button>로그인</button>
                </Link>
                <Link to="/register">
                    <button>회원가입</button>
                </Link>
            </div>





        </div>





    );


}
export default LandingPage;


