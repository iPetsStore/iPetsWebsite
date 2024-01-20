

const About = ()=>{

    return (<div className="container-fluid py-5">
    <div className="container">
        <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight: "500px"}}>
                <div className="position-relative h-100">
                    <img className="position-absolute w-100 h-100 rounded" src="img/about.jpg" style={{objectFit: "cover"}}/>
                </div>
            </div>
            <div className="col-lg-7">
                <div className="border-start border-5 border-primary ps-5 mb-5">
                    <h6 className="text-primary text-uppercase">About Us</h6>
                    <h1 className="display-5 text-uppercase mb-0">We Keep Your Pets Happy All Time</h1>
                </div>
                <h4 className="text-body mb-4">These adorable little creatures fill our world with joy. These little beings deserve the best care in the world as well, and that’s why we have pet stores catering to their needs.</h4>
                <div className="bg-light p-4">
                    <ul className="nav nav-pills justify-content-between mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item w-50" role="presentation">
                            <button className="nav-link text-uppercase w-100 active" id="pills-1-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1"
                                aria-selected="true">Our Mission</button>
                        </li>
                        <li className="nav-item w-50" role="presentation">
                            <button className="nav-link text-uppercase w-100" id="pills-2-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2"
                                aria-selected="false">Our Vission</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                            <p className="mb-0">Providing comfort and care for all pets, Starting from their food items to toys, and clothes and other basic items you would need.  It is essential for the adorable furry little paw friends to have a store that will cater to their needs and requirements. ipets store does just that. It is the go-to store for anything pet-related.</p>
                        </div>
                        <div className="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                            <p className="mb-0">Pets deserve your attention and care.  Pets become a part of your life with time. They are now treated like family and looked after with care, love, and sincerity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>);
}

export default About;