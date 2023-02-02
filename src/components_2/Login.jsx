import React, {useState, useEffect} from 'react';
import './login.css';
import axios from 'axios';
import { Link, useNavigate  } from 'react-router-dom';


function Login (props) {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [isEntered, setIsEntered] = useState(false);

	const handleSubmit = async (e) => {
        console.log('abc');
		e.preventDefault();
        setIsEntered(true);

		const login = {
			email: email,
			password: pw,
		}

		try {
			await axios.post(' ', login);

		} catch (catchedError) {
            console.log('error');
		}
	}
    
    const handleNavigate=()=>{
        console.log('abc');
        navigate('/home');
    }
    
    useEffect(()=>{
        if (isEntered) {
            navigate('/home');
        }
    }, [isEntered]);


    return(
        <div className='background'>
        {/* <form onSubmit={handleSubmit}> */}
            <div className="loginMenu" onSubmit={handleSubmit}>       
            
                <div className="blank"> </div>
                <div>
                    <div className="inputTitle">이메일 주소</div>
                    <div>
                        <input className="input" type="text" 
                        placeholder="이메일 입력" value={email}onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                
                    <div className="inputTitle">비밀번호</div>
                    <div>
                        <input className="input" type="password" 
                        placeholder="비밀번호 입력" value={pw} onChange={(e) => setPw(e.target.value)}/>
                    </div>

                </div>

                <div>
                    <Link to="/home">
                        <button className="bottomButton" type="submit">
                            로그인
                        </button>
                    </Link>
                </div>
            </div>
        {/* </form> */}
        </div>

    );



}
export default Login;