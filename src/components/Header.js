

const Header = ()=>{

    return (<div className="container-fluid border-bottom d-none d-lg-block">
    <div className="row gx-0">
        <div className="col-lg-4 text-center py-2">
            <div className="d-inline-flex align-items-center">
                <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                <div className="text-start">
                    <h6 className="text-uppercase mb-1">Our Office</h6>
                    <span>24 Nasr El-Thawra, Faisal</span>
                    <br></br>
                    {/* <span>6 imarat abu el fotuh 87 khatam <br></br> el morsaleen, El haram</span> */}
                </div>
            </div>
        </div>
        <div className="col-lg-4 text-center border-start border-end py-2">
            <div className="d-inline-flex align-items-center">
                <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                <div className="text-start">
                    <h6 className="text-uppercase mb-1">Email Us</h6>
                    <span>ipetsstoreservice@gmail.com</span>
                </div>
            </div>
        </div>
        <div className="col-lg-4 text-center py-2">
            <div className="d-inline-flex align-items-center">
                <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                <div className="text-start">
                    <h6 className="text-uppercase mb-1">Call Us</h6>
                    <span>01144939212 - </span>
                   
                    <span>01128705957</span>
                </div>
            </div>
        </div>
    </div>
   
</div>
);

}

export default Header;