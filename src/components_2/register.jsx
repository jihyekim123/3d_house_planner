import React, {useState} from 'react';
import './login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';




function Register (props) {

    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [tel, setTel] = useState("");
    const [gender, setGender] = useState([]);
    const [birth, setBirth] = useState("");
    const [name, setName] = useState("");
    const [nick, setNick] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		const userData = {
            email: email,
            password: pw,
            phone_number: tel,
            gender: gender,
            birth: birth,
            name: name,
            nickname: nick,
		};

		try {
			await axios.post(' ', userData);
		} catch (catchedError) {
            console.log('error');
		}
	}

    return (
        <div className='background'>
            <div className="registerPage" onSubmit={handleSubmit}>
                <div className='inputTitle'>이메일</div>
                <div>
                    <input className="input" type="text" placeholder="이메일 입력" 
                        value={email} onChange={(e) => setEmail(e.target.value)} multiple="multiple"/>
                </div>

                <div className='inputTitle'>비밀번호</div>
                <div>
                    <input className="input" type="password" placeholder="비밀번호 입력" 
                        value={pw} onChange={(e) => setPw(e.target.value)} multiple="multiple"/>
                </div>

                <div className='inputTitle'>전화번호</div>
                <div>
                    <input className="input" type="text" placeholder="전화번호 입력" 
                        value={tel} onChange={(e) => setTel(e.target.value)} multiple="multiple"/>
                </div>

                <div className='inputTitle'>성별</div>
                <div className='genderPick'>
                        <input type="radio" value="남자" checked={gender === "남자"} 
                            onChange={(e) => setGender(e.target.value)} multiple="multiple"/>
                        <label>남자</label>
                        <input className="inputGender" type="radio" value="여자" checked={gender === "여자"} 
                            onChange={(e) => setGender(e.target.value)} multiple="multiple"/>
                        <label>여자</label>
                </div>

                <div className='inputTitle'>생년월일</div>
                <div>
                    <input className="input" type="date" 
                        value={birth} onChange={(e) => setBirth(e.target.value)} multiple="multiple"/>
                </div>

                <div className='inputTitle'>이름</div>
                <div>
                    <input className="input" type="text" placeholder="이름 입력" 
                        value={name} onChange={(e) => setName(e.target.value)} multiple="multiple"/>
                </div>

                <div className='inputTitle'>닉네임</div>
                <div>
                    <input className="input" type="text" placeholder="닉네임 입력" 
                        value={nick} onChange={(e) => setNick(e.target.value)} multiple="multiple"/>
                </div>

                <div>
                    <Link to="/login">
                        <button className="bottomButton">
                            가입하기
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );



}
export default Register;