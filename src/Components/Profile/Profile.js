import React, { Component } from "react";
import "./Profile.css";

export class Profile extends Component {
  render() {
    return (
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Library
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col col-md-2 col-sm-12">
            <ul className="side-menu-profile">
              <li>
                <a href="#">Pesanan Saya</a>
              </li>
              <li class="active">
                <a href="#">Akun Saya</a>
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
                            <input type="checkbox" name="name1" />
                            &nbsp;Kecantikan
                          </td>

                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Otomotif
                          </td>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Membaca
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Berkebun
                          </td>

                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Seni
                          </td>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Teknologi
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Wisata
                          </td>

                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Keterampilan
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              name="name1"
                              value="Koleksi"
                            />
                            &nbsp;Koleksi
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Belanja
                          </td>

                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Olahraga
                          </td>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Fashion
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Kuliner
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
                            <input type="checkbox" name="name1" />
                            &nbsp;Agama & Spritualitas
                          </td>

                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Biografi
                          </td>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Bisnis & Ekonomi
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Buku Anak
                          </td>

                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Buku Pelajaran
                          </td>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Diet & Kesehatan
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Fiksi
                          </td>

                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Huku
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              name="name1"
                              value="Koleksi"
                            />
                            &nbsp;Ilmu Sosial
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Kamus & Tesaurus
                          </td>

                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Kerajinan & Hobi
                          </td>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Komputer & Teknologi
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Kuliner
                          </td>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Medis
                          </td>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Misteri & Horor
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Orangtua & Keluarga
                          </td>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Pendidikan & Pengajaran
                          </td>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Pengembangan Diri
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Psikologi
                          </td>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Referensi
                          </td>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Sains & Alam
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;seni & Desain
                          </td>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Teknik
                          </td>
                          <td>
                            <input type="checkbox" name="name1" />
                            &nbsp;Travel
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
