

const Services = ()=>{

    return (<div className="container-fluid py-5">
    <div className="container">
        <div className="border-start border-5 border-primary ps-5 mb-5" style={{maxWidth: "600px"}}>
            <h6 className="text-primary text-uppercase">Services</h6>
            <h1 className="display-5 text-uppercase mb-0">Our Excellent Pet Care Services</h1>
        </div>
        <div className="row g-5">
            <div className="col-md-6">
                <div className="service-item bg-light d-flex p-4">
                    <i className="flaticon-house display-1 text-primary me-4"></i>
                    <div>
                        <h5 className="text-uppercase mb-3">Pet Boarding</h5>
                        <p>Usually people choose to board their pets when they travel</p>
                        {/* <a className="text-primary text-uppercase" href="">Read More<i className="bi bi-chevron-right"></i></a> */}
                        <br></br>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="service-item bg-light d-flex p-4">
                    <i className="flaticon-food display-1 text-primary me-4"></i>
                    <div>
                        <h5 className="text-uppercase mb-3">Pet Feeding</h5>
                        <p>The importance of feeding is not only subscribed to the health factor, but is also relevant in many other aspects</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="service-item bg-light d-flex p-4">
                    <i className="flaticon-grooming display-1 text-primary me-4"></i>
                    <div>
                        <h5 className="text-uppercase mb-3">Pet Grooming</h5>
                        <p>Hygienic care and cleaning of a pet</p>
                        <br></br> <br></br>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="service-item bg-light d-flex p-4">
                    <i className="flaticon-cat display-1 text-primary me-4"></i>
                    <div>
                        <h5 className="text-uppercase mb-3">Pet Training</h5>
                        <p>Motivate your pet, to do what you want, at your request, while having fun.</p>
                        <br></br>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="service-item bg-light d-flex p-4">
                    <i className="flaticon-dog display-1 text-primary me-4"></i>
                    <div>
                        <h5 className="text-uppercase mb-3">Pet Exercise</h5>
                        <p>Exercise is good for your pet, providing plenty of benefits like reducing anxiety, stress and other behavioural problems</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="service-item bg-light d-flex p-4">
                    <i className="flaticon-vaccine display-1 text-primary me-4"></i>
                    <div>
                        <h5 className="text-uppercase mb-3">Pet Treatment</h5>
                        <p>Pet Disease prevention and treatment</p>
                        <br></br> <br></br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>)
}

export default Services;