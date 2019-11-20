import React from 'react';

const MainCarousel = () =>{

        return(
            <>
            <div className="container" style={{marginTop:'40px'}}>
                <div class="row">
                    <div class="col-8">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                            
                                <div className="carousel-item active">
                                    <img style={{
                                        width:'100%',
                                        borderRadius:'10px',
                                        height: '20rem',
							            objectFit: 'cover',
                                    }} src="https://cdn.gramedia.com/uploads/marketing/Storefront_Compressed__wauto_h300.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" >
                                    <img style={{
                                        width:'100%',
                                        borderRadius:'10px',
                                        height: '20rem',
							            objectFit: 'cover',
                                    }} src="https://cdn.gramedia.com/uploads/marketing/18_NOV_SINARAN_storefront.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img style={{
                                        width:'100%',
                                        borderRadius:'10px',
                                        height: '20rem',
							            objectFit: 'cover',
                                    }} src="https://cdn.gramedia.com/uploads/marketing/Design_Miss_Irit_November_v2-01__wauto_h300.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>

                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                            </a>
                        </div>                    
                    </div>
                    <div class="col-4">
                    <img style={{
                        width:'100%',
                        height: '50%',
                        borderRadius:'10px',
                        objectFit: 'cover',
                        paddingBottom:'5px',
                        boxSizing: 'borderBox',
                    }} src="https://cdn.gramedia.com/uploads/marketing/Storefront_Compressed.jpg" className="d-block w-100" alt="..." />
                    
                    <img style={{
                        width:'100%',
                        height: '50%',
                        borderRadius:'10px',
                        objectFit: 'cover',
                        paddingTop:'5px',
                        boxSizing: 'borderBox',
                    }} src="https://cdn.gramedia.com/uploads/marketing/18_NOV_SINARAN_storefront.jpg" className="d-block w-100" alt="..." />                    
                    </div>
                </div>

            </div>
            </>
        );
}

export default MainCarousel;