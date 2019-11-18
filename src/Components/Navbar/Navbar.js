import React from 'react';
// import { Nav, NavDropdown } from "react-bootstrap";

class Navbar extends React.Component {
	render() {
		return (
			<div>
				<nav
					className='navbar fixed-top navbar-light '
					style={{
						height: '24px',
						backgroundColor: '#201848',
						position: 'fixed',
						top: '0',
						width: '100%',
						zIndex: '100',
						fontFamily: 'Karla',
						fontSize: '14px',
					}}>
					<a
						className='icon ion-help-circled'
						style={{ color: '#fff', marginLeft: '70rem', marginTop: '-3px' }}
						href='!#'>
						Bantuan
					</a>
				</nav>

				<nav
					className='navbar navbar-expand-lg '
					style={{
						position: 'fixed',
						top: '24px',
						right: '0',
						left: '0',
						background: '#281e5a',
						color: '#fff',
						zIndex: '100',
						boxShadow: '0 0 0 0 rgba(0,0,0,.12)',
						height: '65px',
						fontFamily: 'Karla',
					}}>
					<img
						style={{ width: '10rem', marginLeft: '9rem' }}
						href='!#'
						src='https://res.cloudinary.com/naandalistcloud/image/upload/v1573977387/Arkamedia/logo_cn2jnc.png'></img>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon' />
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav mr-auto'>
							<li className='nav-item dropdown'>
								<a
									style={{
										width: '10rem',
										marginLeft: '8rem',
										marginRight: '-5rem',
										fontSize: '18px',
										fontFamily: 'Karla,sans-serif',
										color: '#fff',
									}}
									className='nav-link dropdown-toggle'
									href='!#'
									id='navbarDropdown'
									role='button'
									data-toggle='dropdown'
									aria-haspopup='true'
									aria-expanded='false'>
									Kategori
								</a>
								<div
									className='dropdown-menu'
									aria-labelledby='navbarDropdown'
									style={{
										fontSize: '15px',
										fontFamily: 'Karla,sans-serif',
										color: '#fff',
										// backgroundColor: "#281e5a"
									}}>
									<a className='dropdown-item' href='!#'>
										BUKU
									</a>
									<a className='dropdown-item' href='!#'>
										STATIONERY, SEKOLAH DAN KANTOR
									</a>
									<a className='dropdown-item' href='!#'>
										EBOOK
									</a>
									<a className='dropdown-item' href='!#'>
										MAJALAH
									</a>
									<a className='dropdown-item' href='!#'>
										FASHION DAN AKSESORIS
									</a>
									<a className='dropdown-item' href='!#'>
										TEKNOLOGI
									</a>
									<a className='dropdown-item' href='!#'>
										MAINAN DAN HOBI{' '}
									</a>

									<a className='dropdown-item' href='!#'>
										MAKANAN DAN MINUMAN
									</a>
									<a className='dropdown-item' href='!#'>
										OLAHRAGA
									</a>
									<a className='dropdown-item' href='!#'>
										PERALATAN KESEHATAN
									</a>
									<a className='dropdown-item' href='!#'>
										PERLENGKAPAN BAYI
									</a>
									<a className='dropdown-item' href='!#'>
										TISU
									</a>
									<a className='dropdown-item' href='!#'>
										TALI SEPATU
									</a>
								</div>
							</li>
						</ul>

						<form
							className='form-inline my-2 my-lg-0'
							style={{ marginRight: '2rem', width: '31rem' }}>
							<input
								style={{
									width: '45rem',
									fontSize: '18px',
									fontFamily: 'Karla,sans-serif',
								}}
								className='form-control mr-sm-2'
								type='search'
								placeholder='Cari Produk, Judul Buku, Penulis'
								aria-label='Search'
							/>
						</form>
						<a
							href='!#'
							style={{
								color: '#fff',
								fontFamily: 'Karla,sans-serif',
							}}>
							Masuk
						</a>
						<img
							style={{
								width: '30px',
								marginRight: '10rem',
								marginLeft: '2rem',
							}}
							src='https://res.cloudinary.com/afsori/image/upload/v1574059667/Arkamedia/shopping-bagian_vbtugu.png'></img>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
