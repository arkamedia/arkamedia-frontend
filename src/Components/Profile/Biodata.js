import React, { Component } from "react";
import "./Biodata.css";

export class Biodata extends Component {
  render() {
    return (
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              My-account
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col col-md-2 col-sm-12">
            <ul className="side-menu-profile">
              <li>
                <a href="#">Pesanan Saya</a>
              </li>
              <li>
                <a class="active" href="#">
                  Akun Saya
                </a>
              </li>
              <li>
                <a href="#">Wishlist Saya</a>
              </li>
              <li
                style={{
                  marginTop: "100px"
                }}
              >
                <a href="#">Keluar</a>
              </li>
            </ul>
          </div>
          <div className="col col-md-8 col-sm-12">
            <div className="wrapper-biodata">
              <div className="wrapper-inner">
                <ul class="nav nav-tabs ">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">
                      Biodata
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Daftar Alamat
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Pembayaran
                    </a>
                  </li>
                </ul>
                <div className="subscriber">
                  <h3>Berlangganan Newsletter</h3>
                </div>
                <form>
                  <div id="frame">
                    <div class="form-group">
                      <input type="text" name="nama" required />
                      <label>Nama Lengkap</label>
                    </div>
                    <div class="form-group">
                      <input type="text" name="email" required />
                      <label>Email</label>
                      <span className="email-verifikasi">
                        <a href="#" alt="...">
                          Verifikasi Email Saya
                        </a>
                      </span>
                    </div>
                    <div className="sex-choose">
                      <h3>Jenis Kelamin</h3>

                      <div class="form-check-inline">
                        <label class="form-check-label">
                          <input
                            type="radio"
                            class="form-check-input"
                            name="optradio"
                          />
                          Laki-Laki
                        </label>
                      </div>
                      <div class="form-check-inline">
                        <label class="form-check-label">
                          <input
                            type="radio"
                            class="form-check-input"
                            name="optradio"
                          />
                          Perempuan
                        </label>
                      </div>
                      <div class="form-check-inline disabled">
                        <label class="form-check-label">
                          <input
                            type="radio"
                            class="form-check-input"
                            name="optradio"
                          />
                          Rahasia
                        </label>
                      </div>
                    </div>
                    <div className="birthday">
                      <h3>Tanggal Lahir</h3>
                      <div class="form-group">
                        <div class="input-group ">
                          <input type="date" class="form-control" />
                          <span class="input-group-addon">
                            <span class="fa fa-calendar"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="phone">
                      <h3>No. Telp</h3>
                      <div class="form-group">
                        <input
                          type="text"
                          placeholder="8xxxxx"
                          name="phone"
                          defaultValue="+62"
                          required
                        />
                      </div>
                      <span className="phone-verifikasi">
                        <h2>Nomor telepon 9 - 14 angka</h2>
                      </span>
                    </div>
                  </div>
                  <div className="radio-hobby">
                    <h3>Hobi</h3>
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <td>
                            <input type="checkbox" id="a" name="name1" />
                            &nbsp;<label for="a">Kecantikan</label>
                          </td>

                          <td>
                            <input type="checkbox" id="b" name="name1" />
                            &nbsp;<label for="b">Otomotif</label>
                          </td>
                          <td>
                            <input type="checkbox" id="c" name="name1" />
                            &nbsp;<label for="c">Membaca</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" id="d" name="name1" />
                            &nbsp;<label for="d">Berkebun</label>
                          </td>

                          <td>
                            <input type="checkbox" id="e" name="name1" />
                            &nbsp;<label for="e">Seni</label>
                          </td>
                          <td>
                            <input type="checkbox" id="f" name="name1" />
                            &nbsp;<label for="f">Teknologi</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" id="g" name="name1" />
                            &nbsp;<label for="g">Wisata</label>
                          </td>

                          <td>
                            <input type="checkbox" id="h" name="name1" />
                            &nbsp;<label for="h">Keterampilan</label>
                          </td>
                          <td>
                            <input type="checkbox" name="name1" id="i" />
                            &nbsp;<label for="i">Koleksi</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" id="j" name="name1" />
                            &nbsp;<label for="j">Belanja</label>
                          </td>

                          <td>
                            <input type="checkbox" id="k" name="name1" />
                            &nbsp;<label for="k">Olahraga</label>
                          </td>
                          <td>
                            <input type="checkbox" id="l" name="name1" />
                            &nbsp;<label for="l">Fashion</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" id="m" name="name1" />
                            &nbsp;<label for="m">Kuliner</label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="radio-hobby">
                    <h3>Kategori Buku Favorit</h3>
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <td>
                            <input type="checkbox" id="1" name="name1" />
                            &nbsp;<label for="1">Agama & Spritualitas</label>
                          </td>

                          <td>
                            <input type="checkbox" id="2" name="name1" />
                            &nbsp;<label for="2">Biografi</label>
                          </td>
                          <td>
                            <input type="checkbox" id="3" name="name1" />
                            &nbsp;<label for="3">Bisnis & Ekonomi</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" id="4" name="name1" />
                            &nbsp;<label for="4">Buku Anak</label>
                          </td>

                          <td>
                            <input type="checkbox" id="5" name="name1" />
                            &nbsp;<label for="5">Buku Pelajaran</label>
                          </td>
                          <td>
                            <input type="checkbox" id="6" name="name1" />
                            &nbsp;<label for="6">Diet & Kesehatan</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" id="7" name="name1" />
                            &nbsp;<label for="7">Fiksi</label>
                          </td>

                          <td>
                            <input type="checkbox" id="8" name="name1" />
                            &nbsp;<label for="8">Hukum</label>
                          </td>
                          <td>
                            <input type="checkbox" id="9" name="name1" />
                            &nbsp;<label for="9">Ilmu Sosial</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" id="10" name="name1" />
                            &nbsp;<label for="10"> Kamus & Tesaurus</label>
                          </td>

                          <td>
                            <input type="checkbox" id="11" name="name1" />
                            &nbsp;
                            <label for="11"> Kerajinan & Hobi</label>
                          </td>
                          <td>
                            <input type="checkbox" id="12" name="name1" />
                            &nbsp;<label for="12">Komputer & Teknologi</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" id="13" name="name1" />
                            &nbsp;<label for="13">Kuliner</label>
                          </td>
                          <td>
                            <input type="checkbox" id="14" name="name1" />
                            &nbsp;<label for="14">Medis</label>
                          </td>
                          <td>
                            <input type="checkbox" id="15" name="name1" />
                            &nbsp;<label for="15">Misteri & Horor</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" id="16" name="name1" />
                            &nbsp;<label for="16">Orangtua & Keluarga</label>
                          </td>
                          <td>
                            <input type="checkbox" id="17" name="name1" />
                            &nbsp;
                            <label for="17">Pendidikan & Pengajaran</label>
                          </td>
                          <td>
                            <input type="checkbox" id="18" name="name1" />
                            &nbsp;<label for="18">Pengembangan Diri</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" id="19" name="name1" />
                            &nbsp;<label for="19">Psikologi</label>
                          </td>
                          <td>
                            <input type="checkbox" id="20" name="name1" />
                            &nbsp;<label for="20">Referensi</label>
                          </td>
                          <td>
                            <input type="checkbox" id="21" name="name1" />
                            &nbsp;<label for="21">Sains & Alam</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" id="22" name="name1" />
                            &nbsp;<label for="22">Seni & Desain</label>
                          </td>
                          <td>
                            <input type="checkbox" id="23" name="name1" />
                            &nbsp;<label for="23">Teknik</label>
                          </td>
                          <td>
                            <input type="checkbox" id="24" name="name1" />
                            &nbsp;<label for="24">Travel</label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <button className="btn btn-primary form-profile">
                    SIMPAN
                  </button>
                </form>
                <hr />
                <div className="change-password">
                  <a href="#">Ubah Kata Sandi</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
