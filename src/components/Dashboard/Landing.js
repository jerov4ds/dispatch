import React from 'react';
import Navbar from '../Layout/Navbar';
import { connect } from 'react-redux';

const Landing = () => {
    return (
        
        <div>
            <Navbar />
            <section className="bg-blue text-white  pt-5 pb-4">
                <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Find your</h1>
                                <h1>Perfect Match</h1>
                                <p>Get the best offers on cars. Check out the latest cars.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">New Car</a>
                                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Used Car</a>
                                    
                                </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div className="card bg-light card-body ">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <select id="inputState" className="form-control">
                                                        <option selected>... Select Make...</option>
                                                        <option value="">BMW</option>
                                                        <option value="">Audi</option>
                                                        <option value="">Maruti</option>
                                                        <option value="">Tesla</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <select id="inputState" className="form-control">
                                                        <option selected>... Select Model...</option>
                                                        <option value="">BMW</option>
                                                        <option value="">Audi</option>
                                                        <option value="">Maruti</option>
                                                        <option value="">Tesla</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <button type="button" className="btn btn-primary btn-block">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div className="card bg-light card-body text-white">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <select id="inputState" className="form-control">
                                                        <option selected>... Select Make...</option>
                                                        <option value="">BMW</option>
                                                        <option value="">Audi</option>
                                                        <option value="">Maruti</option>
                                                        <option value="">Tesla</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <select id="inputState" className="form-control">
                                                        <option selected>... Select Model...</option>
                                                        <option value="">BMW</option>
                                                        <option value="">Audi</option>
                                                        <option value="">Maruti</option>
                                                        <option value="">Tesla</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <button type="button" className="btn btn-primary btn-block">Search</button>
                                            </div>
                                        </div>  
                                    </div>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="http://www.freepngimg.com/download/car/4-2-car-png-hd.png" />
                    </div>
                </div>
                </div>
            </section>
            <section className="py-5 featured">
                <div className="container">
                <div className="row mb-3">
                    <div className="col-md-12">
                        <h2>Featured Cars</h2>
                    </div>
                </div>
                <div className="row">
                        <div className="col-md-12 text-center ">
                            <nav className="nav-justified ">
                                <div className="nav nav-tabs " id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="pop1-tab" data-toggle="tab" href="#pop1" role="tab" aria-controls="pop1" aria-selected="true">Popular Cars</a>
                                    <a className="nav-item nav-link" id="pop2-tab" data-toggle="tab" href="#pop2" role="tab" aria-controls="pop2" aria-selected="false">Upcoming</a>
                                    <a className="nav-item nav-link" id="pop3-tab" data-toggle="tab" href="#pop3" role="tab" aria-controls="pop3" aria-selected="false">Newly Launched</a>
                                    
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="pop1" role="tabpanel" aria-labelledby="pop1-tab">
                                    <div className="pt-4"></div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="text-center">
                                                <div className="card-group">
                                                <a href="#">
                                                        <div className="card">
                                                            <img className="card-img-top" src="https://imgd.aeplcdn.com/310x174/cw/ec/22803/Audi-New-SQ7-Right-Front-Three-Quarter-70082.jpg?wm=0&q=85" alt="Card image cap" />
                                                            <div className="card-body">
                                                                <h4 className="card-title">Maruti Swift</h4>
                                                                <p className="card-text">Rs. 6.44 Lac to 8.99 Lac.</p>
                                                            </div>
                                                            <div className="card-footer">
                                                                <button type="button" className="btn btn-danger btn-block">know more</button>
                                                            </div>
                                                        </div>  
                                                    </a>
                                                    <a href="#">
                                                        <div className="card">
                                                            <img className="card-img-top" src="https://imgd.aeplcdn.com/310x174/cw/ec/34253/Mitsubishi-New-Outlander-Exterior-126541.jpg?wm=0&q=85" alt="Card image cap" />
                                                            <div className="card-body">
                                                                <h4 className="card-title">Porsche</h4>
                                                                <p className="card-text">Rs. 6.44 Lac to 8.99 Lac.</p>
                                                            </div>
                                                            <div className="card-footer">
                                                                <button type="button" className="btn btn-danger btn-block">know more</button>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <div className="card">
                                                        <img className="card-img-top" src="https://imgd.aeplcdn.com/310x174/cw/ec/26523/Maruti-Suzuki-Ciaz-Facelift-Exterior-87489.jpg?wm=0&q=85" alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Swift Dezire</h4>
                                                            <p className="card-text">Rs. 6.44 Lac to 8.99 Lac.</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <button type="button" className="btn btn-danger btn-block">know more</button>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <img className="card-img-top" src="https://imgd.aeplcdn.com/310x174/cw/ec/22803/Audi-New-SQ7-Right-Front-Three-Quarter-70082.jpg?wm=0&q=85" alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Maruti Swift</h4>
                                                            <p className="card-text">Rs. 6.44 Lac to 8.99 Lac.</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <button type="button" className="btn btn-danger btn-block">know more</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="tab-pane fade" id="pop2" role="tabpanel" aria-labelledby="pop2-tab">
                                    <div className="pt-3"></div>
                                    <p>
                                        2. There's another way to do this for layouts that doesn't have to put the navbar inside the container, and which doesn't require any CSS or Bootstrap overrides.

                                        Simply place a div with the Bootstrap container class around the navbar. This will center the links inside the navbar:
                                    </p>
                                </div>
                                <div className="tab-pane fade" id="pop3" role="tabpanel" aria-labelledby="pop3-tab">
                                    <div className="pt-3"></div>
                                    <p>
                                        3. There's another way to do this for layouts that doesn't have to put the navbar inside the container, and which doesn't require any CSS or Bootstrap overrides.

                                        Simply place a div with the Bootstrap container class around the navbar. This will center the links inside the navbar:
                                    </p>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <h2>Reviews, News and Advice</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 pl-1 pr-1">
                            <div className="card">
                                <div className="card-img-top">
                                    <img src="http://velikorodnov.com/html/autotrader/images/263x180_img1.jpg" />
                                </div>
                                <div className="card-body">
                                    <h4>New & Used Vehicles</h4>
                                    <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel.</p>
                                    <a href="#">Read More...</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3  pl-1 pr-1">
                            <div className="card">
                                <div className="card-img-top">
                                    <img src="http://velikorodnov.com/html/autotrader/images/263x180_img2.jpg" />
                                </div>
                                <div className="card-body">
                                    <h4>New & Used Vehicles</h4>
                                    <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel.</p>
                                    <a href="#">Read More...</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3  pl-1 pr-1">
                            <div className="card">
                                <div className="card-img-top">
                                    <img src="http://velikorodnov.com/html/autotrader/images/263x180_img3.jpg" />
                                </div>
                                <div className="card-body">
                                    <h4>New & Used Vehicles</h4>
                                    <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel.</p>
                                    <a href="#">Read More...</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3  pl-1 pr-1">
                            <div className="card">
                                <div className="card-img-top">
                                    <img src="http://velikorodnov.com/html/autotrader/images/263x180_img4.jpg" />
                                </div>
                                <div className="card-body">
                                    <h4>New & Used Vehicles</h4>
                                    <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel.</p>
                                    <a href="#">Read More...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-blue text-white">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <h2>Explore Cars by body type</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <i className="fa fa-key fa-4x text-danger mb-3"></i>
                            <h5>Sell My Car</h5>
                            <p>Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="fa fa-user fa-4x text-success mb-3"></i>
                            <h5>Trade My Car</h5>
                            <p>Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="fa fa-inr fa-4x text-warning mb-3"></i>
                            <h5>Value My Car</h5>
                            <p>Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <h2>Compare Cars</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 pl-1 pr-1">
                            <div className="card">
                                <div className="card-img-top">
                                    <img src="http://velikorodnov.com/html/autotrader/images/289x190_img1.jpg" />
                                </div>
                                <div className="card-body">
                                    <a href="#" className="text-dark"><h5>2016 Ford Fusion Hybrid</h5></a>
                                    <ul className="list-unstyled list-inline">
                                        <a href="#" className="text-warning"><li className="list-inline-item"><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i></li></a>
                                        <a href="#" className="text-muted"><li className="list-inline-item"><small>3 Reviews</small></li></a>
                                    </ul>
                                    <h4 className="text-danger"><i className="fa fa-inr"></i> 255060.00</h4>
                                    <ul className="list-unstyled list-inline">
                                        <a href="#" className="text-primary"><li className="list-inline-item"><small>Contact Seller</small></li></a>
                                        <li className="list-inline-item"><small>|</small></li>
                                        <a href="#" className="text-primary"><li className="list-inline-item"><small>Add to Wishlist</small></li></a>
                                        <li className="list-inline-item"><small>|</small></li>
                                        <a href="#" className="text-primary"><li className="list-inline-item"><small>Add to Compare</small></li></a>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 pl-1 pr-1">
                            <div className="card">
                                <div className="card-img-top">
                                    <img src="http://velikorodnov.com/html/autotrader/images/289x190_img1.jpg" />
                                </div>
                                <div className="card-body">
                                    <a href="#" className="text-dark"><h5>2016 Ford Fusion Hybrid</h5></a>
                                    <ul className="list-unstyled list-inline">
                                        <a href="#" className="text-warning"><li className="list-inline-item"><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i></li></a>
                                        <a href="#" className="text-muted"><li className="list-inline-item"><small>3 Reviews</small></li></a>
                                    </ul>
                                    <h4 className="text-danger"><i className="fa fa-inr"></i> 255060.00</h4>
                                    <ul className="list-unstyled list-inline">
                                        <a href="#" className="text-primary"><li className="list-inline-item"><small>Contact Seller</small></li></a>
                                        <li className="list-inline-item"><small>|</small></li>
                                        <a href="#" className="text-primary"><li className="list-inline-item"><small>Add to Wishlist</small></li></a>
                                        <li className="list-inline-item"><small>|</small></li>
                                        <a href="#" className="text-primary"><li className="list-inline-item"><small>Add to Compare</small></li></a>
                                    
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 pl-1 pr-1">
                            <div className="card">
                                <div className="card-img-top">
                                    <img src="http://velikorodnov.com/html/autotrader/images/289x190_img1.jpg" />
                                </div>
                                <div className="card-body">
                                    <a href="#" className="text-dark"><h5>2016 Ford Fusion Hybrid</h5></a>
                                    <ul className="list-unstyled list-inline">
                                        <a href="#" className="text-warning"><li className="list-inline-item"><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i></li></a>
                                        <a href="#" className="text-muted"><li className="list-inline-item"><small>3 Reviews</small></li></a>
                                    </ul>
                                    <h4 className="text-danger"><i className="fa fa-inr"></i> 255060.00</h4>
                                    <ul className="list-unstyled list-inline">
                                        <a href="#" className="text-primary"><li className="list-inline-item"><small>Contact Seller</small></li></a>
                                        <li className="list-inline-item"><small>|</small></li>
                                        <a href="#" className="text-primary"><li className="list-inline-item"><small>Add to Wishlist</small></li></a>
                                        <li className="list-inline-item"><small>|</small></li>
                                        <a href="#" className="text-primary"><li className="list-inline-item"><small>Add to Compare</small></li></a>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer py-5 bg-blue text-white border" id="footer">
                <div className="container py-3">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12 ">
                            <img className="mb-4" src="http://velikorodnov.com/html/autotrader/images/logo.png" alt="Logo" style={{width:'120px'}} />
                            <p className="">86 Petersham town, New South wales Waedll Steet, Australia PA 6550</p>
                            <ul className="list-unstyled">
                                <li>+61 525 240 310</li>
                                <li>iamosahan@gmail.com</li>
                                <li>www.askbootstrap.com</li>
                            </ul>
                        </div>
                        <div className="col-md-9 col-sm-6 col-xs-12 ">
                            <div className="row">
                                <div className="col-md-3">
                                    <h6 className="pb-2">OUR PROPERTIES </h6>
                                    <ul className="list-unstyled">
                                        <a href="#"><li> Single Story</li></a>
                                        <a href="#"><li> Double Story</li></a>
                                        <a href="#"><li> Triple Story</li></a>
                                        <a href="#"><li> Resort </li></a>
                                        <a href="#"><li> Homes in Hawai</li></a>
                                        <a href="#"><li> Palace</li></a>
                                        
                                        
                                    </ul>
                                
                                </div>
                                <div className="col-md-3">
                                    <h6 className="pb-2">QUICK LINKS </h6>
                                    <ul className="list-unstyled">
                                        <a href="#"><li> Single Story</li></a>
                                        <a href="#"><li> Double Story</li></a>
                                        <a href="#"><li> Triple Story</li></a>
                                        <a href="#"><li> Resort </li></a>
                                        <a href="#"><li> Homes in Hawai</li></a>
                                        <a href="#"><li> Palace</li></a>
                                        
                                        
                                    </ul>
                                
                                </div>
                                <div className="col-md-3">
                                    <h6 className="pb-2">ABOUT OP </h6>
                                    <ul className="list-unstyled">
                                        <a href="#"><li> Single Story</li></a>
                                        <a href="#"><li> Double Story</li></a>
                                        <a href="#"><li> Triple Story</li></a>
                                        <a href="#"><li> Resort </li></a>
                                        <a href="#"><li> Homes in Hawai</li></a>
                                        <a href="#"><li> Palace</li></a>
                                        
                                        
                                    </ul>
                                
                                </div>
                                <div className="col-md-3">
                                    <h6 className="pb-2">NEWSLETTER </h6>
                                    <small> Get the most recent updates from our site and be updated your self...GET IN TOUCH</small>
                                    <div className="social-icons pt-3">
                                        <ul className="list-inline list-unstyled">
                                            <a href="#"><li className="list-inline-item"><i className="fa fa-facebook-square fa-2x text-primary"></i></li> </a>
                                            <a href="#"><li className="list-inline-item"><i className="fa fa-twitter-square fa-2x text-info"></i></li> </a>
                                            <a href="#"><li className="list-inline-item"><i className="fa fa-youtube-play fa-2x text-danger"></i></li> </a>
                                            <a href="#"><li className="list-inline-item"><i className="fa fa-google-plus-square fa-2x text-danger"></i></li> </a>
                                            
                                        </ul>
                                    </div>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="copyright bg-light py-2" id="copyright">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <small>© Copyright 2018 Osahan Property. All Rights Reserved</small><br />
                            <small> Made with by Ask Bootstrap </small>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing