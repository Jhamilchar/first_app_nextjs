import Link from "next/link";

const Navigation = () => {
  return (

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link href="/">
            <div className="navbar-brand">Home</div>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link href="/about">
                    <div className="nav-link" >About</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/services">
                    <div className="nav-link" >Services</div>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navigation;