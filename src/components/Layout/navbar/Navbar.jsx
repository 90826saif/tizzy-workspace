import Link from "next/link";
import Image from "next/image";
import styles from "@/components/Layout/navbar/Navbar.module.css";
import logo from "@/assets/images/logo.png";
import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {
  return (
    <header className={`${styles.mainHeader} ${styles.gHeader}`}>
      <div className={styles.offcanvasMenu}>
        <div className={styles.mainMenu}>
          <div className="container">
            <div className="mobile-menu d-flex justify-content-between align-items-center">
              <div className={styles.logoImg}>
                <Link href="/" aria-label="Tizzy Cloud logo">
                  <Image
                    src={logo}
                    className={styles.mainLogo}
                    alt="Tizzy Cloud logo"
                    width={150}
                    height={50}
                  />
                </Link>
              </div>
              <div className="mobile-offcanvas d-flex align-items-center">
                <a
                  className="offcanvas-close"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                  aria-label="Open mobile menu"
                  title="Open mobile menu"
                >
                  <span className="toggle-img"></span>
                </a>
              </div>
              <div
                className="offcanvas offcanvas-start menu-right"
                tabIndex={-1}
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div className="offcanvas-header p-0">
                  <Link
                    className="navbar"
                    href="/"
                    aria-label="Tizzy Cloud logo"
                  >
                    {/* <Image
                      src={logo}
                      className="img"
                      alt="Tizzy Cloud logo"
                      width={150}
                      height={50}
                    /> */}
                  </Link>
                  {/* <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <MdArrowOutward />
                  </button> */}
                </div>
                <div className="offcanvas-body">
                  <div className={styles.mainNav}>
                    <nav className="navbar navbar-expand-lg">
                      <div
                        className="navbar-collapse"
                        id="navbarSupportedContent"
                      >
                        <ul className="navbar-nav m-auto">
                          <li className="nav-item">
                            <Link
                              className="nav-link active"
                              href="#home"
                              aria-label="Home"
                            >
                              Home
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              href="#plans"
                              aria-label="Plans"
                            >
                              Plans
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              href="#features"
                              aria-label="Features"
                            >
                              Features
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              href="#why-tizzy"
                              aria-label="Why Tizzy"
                            >
                              Why Tizzy
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              href="#product-demo"
                              aria-label="Product Demo"
                            >
                              Product Demo
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              href="#faqs"
                              aria-label="FAQs"
                            >
                              FAQs
                            </Link>
                          </li>
                        </ul>
                        <div className="Workspace-right">
                          <Link
                            href=""
                            className="tp-btn-blue"
                            aria-label="Talk To Expert"
                          >
                            <span className="tp-btn-blue-text">
                              Talk To Expert
                            </span>
                            <span className="tp-btn-blue-circle">
                            <MdArrowOutward />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
