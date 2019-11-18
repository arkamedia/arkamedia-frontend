import React from 'react';
import './RegistForm.css';
import FbIcon from './IconAsset/FbIcon';
import GoogleIcon from './IconAsset/GoogleIcon';

const RegistForm = () =>{

        return(
            <>
            <ul className="nav" style={{borderBottom:'1px solid #eee', paddingBottom:'9px'}}>
                <div className="container">
                    <li className="nav-item">
                    <a className="nav-link active" href="#!">
                    <img  src="https://res.cloudinary.com/naandalistcloud/image/upload/v1574086712/Arkamedia/logo-blue_dcgxks.png"
                        style={{width: '120px', marginLeft:'1rem'}} alt="facebook icon"/>
                    </a>
                    </li>
                    
                </div>
            </ul>
            < div style={{marginTop:'40px', marginBottom:'50px'}}>
                <div className="container">
                <h2>Daftar</h2>
                <div className="row">
                    <div className="col-6">
                    
                    <div className="col-10">
                    <form>
                        <div className="form-group">
                        {/* <label htmlFor="formGroupExampleInput">Example label</label> */}
                        <input type="text" className="form-control no-border" id="formGroupExampleInput" placeholder="Nama Lengkap" />
                        </div>

                        <div className="form-group">
                        {/* <label htmlFor="formGroupExampleInput2">Another label</label> */}
                        <input type="email" className="form-control no-border" id="formGroupExampleInput2" placeholder="Email" />
                        </div>

                        <div className="form-group">
                        {/* <label htmlFor="formGroupExampleInput2">Another label</label> */}
                        <input type="password" className="form-control no-border" id="formGroupExampleInput2" placeholder="Kata Sandi" />
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                            <label className="form-check-label" htmlFor="defaultCheck1" style={{marginLeft:'1rem'}}>
                            Dengan pembuatan akun, Anda menyetujui <a href="https://help.gramedia.com/hc/en-us/articles/360012264112-Kebijakan-dan-Privasi"> syarat & ketentuan </a>Arkamedia.com
                            </label>
                        </div>

                        <button type="button" class="btn btn-outline-secondary btn-block button-daftar" style={{marginTop:'2rem'}}>
                            <p>Daftar</p>  
                        </button>
                        <p className="center top-one">Sudah mendaftar? <a href="#!">Masuk</a></p>
                    </form>
                    </div>   
                            
                    </div>
                    <div className="col-6">
                    <div className="col-10 mx-auto">
                    <button type="button" class="btn btn-outline-secondary btn-block btn-fb">
                       <p> <FbIcon/> Daftar dengan Facebook</p>  
                    </button>

                    <button type="button" class="btn btn-outline-secondary btn-block btn-google">
                       <p> <GoogleIcon/>  Daftar dengan Google</p>  
                    </button>

                    </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </>
        );
}

export default RegistForm;