import Header from "../components/Header";
import Logo from "../components/Logo";
import About from "../components/About";
import Services from "../components/Services";
import Products from "../components/Products";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Home = ()=>{

    return (
        <div>
        <Header></Header>
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
            <a href="/home" className="navbar-brand ms-lg-5">
                <h1 className="m-0 text-uppercase text-dark"><i className="bi bi-shop fs-1 text-primary me-3"></i>iPets Shop</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <a href="/home" className="nav-item nav-link active">Home</a>
                    <a href="/about" className="nav-item nav-link">About</a>
                    <a href="/service" className="nav-item nav-link">Service</a>
                    <a href="/product" className="nav-item nav-link">Product</a>
                    <a href="/team" className="nav-item nav-link">Team</a>
                   
                    <a href="/contact" className="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5">Contact <i className="bi bi-arrow-right"></i></a>
                </div>
            </div>
        </nav>
        <Logo></Logo>
        <About></About>
        <Services></Services>
        <Products></Products>
        <Team></Team>
        <Footer></Footer> 
        <a href="#" className="btn btn-primary py-3 fs-4 back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
      );
    }

export default Home;