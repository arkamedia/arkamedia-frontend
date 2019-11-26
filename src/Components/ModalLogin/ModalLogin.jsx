import React from "react";
import "./Modal_Login.css";
import classnames from 'classnames'
import { loginUser } from '../../Config/user'


class ModalLogin extends React.Component {
  constructor() {
    super()
    this.state = {
      user: [],
      loginData: {
        email: null,
        password: null
      },
      err: {}
    }
  }

  onChange = (event) => {
    this.setState({
      loginData: {
        ...this.state.loginData,
        [event.target.name]: event.target.value
      }
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state.loginData;

    loginUser(email, password).then(result => {
      localStorage.setItem('usertoken', result.data)
      window.location.href = '/'
    }).catch(err => this.setState({ err: err.response.data }))

    console.log('login')

  }

  render() {
    console.log(this.state.err)

    return (
      <div>
        <div className="btn-group">

          <div
            className="container modal-login-container"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <a
              href="!#"
              style={{
                color: "#fff",
                fontFamily: "Karla,sans-serif"
              }}
            >
              Masuk
            </a>
          </div>

          <div className="dropdown-menu dropdown-menu-right" >
          {this.state.err.message && (
                  <div className="" style={{
                    width: '200px',
                    marginLeft: '20px',
                    fontSize: '10px',
                    color: 'red'
                  }}>{this.state.err.message}</div>
                )}
            <form noValidate className="formu" onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  value={this.state.loginData.email}
                  onChange={this.onChange}
                  name="email"
                  type="email"
                  className={classnames("form-control modal-form-login", {
                    'is-invalid': this.state.err.email
                  })}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  style={{borderBottom:'1px solid grey', borderRadius:'0px'}}
                />
                {this.state.err.email && (
                  <div className="invalid-feedback" style={{
                    width: '200px',
                    marginLeft: '20px'
                  }}>{this.state.err.email}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  name="password"
                  value={this.state.loginData.password}
                  onChange={this.onChange}
                  type="password"
                  className="form-control modal-form-login"
                  id="exampleInputPassword1"
                  placeholder="Kata Sandi"
                  style={{borderBottom:'1px solid grey', borderRadius:'0px'}}
                />
              </div>
              <a href="#!" className="lupakatasandi">
                Lupa Kata Sandi?
          </a>
              <button className="masuk" variant="secondary" onClick={(e) => e.stopPropagation()}>
                Masuk
            </button>
            </form>


            <div className="belumdaftar">
              Belum Mendaftar?
            <a href="#!" className="daftar">
                Daftar
            </a>
            </div>
            <div>
              <hr className="baris1"></hr>
              <hr className="baris2"></hr>
              <p className="atau">atau</p>
            </div>

            <div className="afs">
              <img
                className="gambar1-modal"
                src="https://res.cloudinary.com/afsori/image/upload/v1574059472/Arkamedia/facebook_dks2xz.png"
                alt="file is loading"
              ></img>
              <div>
                <a href="#!">
                  <p className="masukfacebook">Masuk Dengan Facebook</p>
                </a>
              </div>
            </div>
            <div className="afs2">
              <img
                className="gambar2-modal"
                src="https://res.cloudinary.com/afsori/image/upload/v1574326813/Arkamedia/google_p8df8o.png"
                alt="file is loading"
              ></img>
              <div>
                <a href="#!">
                  <p className="masukgoogle">Masuk Dengan Google</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default ModalLogin;
