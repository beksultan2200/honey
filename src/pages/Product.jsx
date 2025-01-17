import { useState } from 'react';
import HeaderMain from '../components/HeaderMain'
import Footer from '../components/Footer'
import { PiStarDuotone } from "react-icons/pi";
import { Link } from 'react-router-dom';
const Product = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e) => {
    const element = e.target;
    const rect = element.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / element.offsetWidth) * 100;
    const y = ((e.clientY - rect.top) / element.offsetHeight) * 100;
    element.style.transformOrigin = `${x}% ${y}%`;
  };

  const handleButtonClick = (i) => {
    setActiveContentIndex(i);
  };

  return (
    <>
      <HeaderMain />
      <div className="product">
        <div className="main-container">
          <div className="flex-over-product">
            <div className="product-flex">
              <div className="product-for-flex">
                <div className="product-img-zoom"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                >
                  <div className="product-img"
                    style={{
                      width: '540px',
                      height: '540px',
                      background: `url("https://beymaral-honey.com/wp-content/uploads/2023/03/product-21.jpg") no-repeat center center`,
                      backgroundSize: 'cover',
                      transform: isHovered ? 'scale(1.5)' : 'scale(1)',
                    }}>
                  </div>
                </div>
                <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/product-21.jpg" alt="" />
              </div>
              <div className="product-text">
                <div className="first-product-text">
                  <h2>WHITE CHEESE</h2>
                  <h6>$65.00</h6>
                  <p>Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                    Justo duo dolor et ea rebum, setet
                    clita kasd gubergren, amet.</p>
                </div>
                <div className="product-btns">
                  <div className="product-quantity">
                    <div className="product-quantity-plus-minus">
                      <div className="product-quantity-total-sum">
                        <input type="number" />
                      </div>
                      <div className="product-quantity-btns">
                        <div className="product-quantity-btn-minus">
                          <button>-</button>
                        </div>

                        <div className="product-quantity-btn-plus">
                          <button>+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className='addBtn'>Add to cart</button>
                </div>
                <div className="product-info">
                  <h3>Info</h3>
                  <h5>SKU: 001</h5>
                  <h5>Category: <span>Honey</span></h5>
                </div>
                <div className="product-share">
                  <h3>Share:</h3>
                  <div className="product-links">
                    <a href="">Facebook</a>
                    <a href="">Twitter</a>
                    <a href="">LinkedIn</a>
                  </div>
                </div>
              </div>
              <div className="flex-flex">
                <div className="product-diff-content">
                  <a className={activeContentIndex === 0 ? 'active' : ''} onClick={() => handleButtonClick(0)}>
                    Description
                  </a>
                  <a className={activeContentIndex === 1 ? 'active' : ''} onClick={() => handleButtonClick(1)}>
                    Additional information
                  </a>
                  <a className={activeContentIndex === 2 ? 'active' : ''} onClick={() => handleButtonClick(2)}>
                    Reviews (0)
                  </a>
                </div>
                <div className="content">
                  <div className={activeContentIndex === 0 ? "content-1 active" : "content-1"}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Enim ad minim
                      veniam, quis nostrud exercitation sed do eiusmod tempor
                      incididunt ut labore et dolore magna.
                    </p>
                  </div>
                  <div className={activeContentIndex === 1 ? "content-2 active" : "content-2"}>
                    <div className="flex-row">
                      <h3>Weight</h3>
                      <h5>0.5 kg</h5>
                    </div>
                    <div className="flex-row">
                      <h3>Dimensions</h3>
                      <h5>1 × 2 × 3 cm</h5>
                    </div>
                  </div>
                  <div className={activeContentIndex === 2 ? "content-3 active" : "content-3"}>
                    <div className="product-reviews">
                      <h2>REVIEWS</h2>
                      <p>There are no reviews yet.</p>

                      <h2>BE THE FIRST TO REVIEW “WHITE CHEESE”</h2>
                      <p>Your email address will not be published. Required fields are marked *</p>
                      <h6>Your Rating *</h6>
                      <div className="stars">
                        <PiStarDuotone size={25} />
                        <PiStarDuotone size={25} />
                        <PiStarDuotone size={25} />
                        <PiStarDuotone size={25} />
                        <PiStarDuotone size={25} />
                      </div>
                      <div className="review-inputs">
                        <textarea name="" id="" cols="30" rows="10" placeholder='Your Review *' />
                        <div className="rew-inputs">
                          <input type="text" placeholder='Your Name *' /> <input type="text" placeholder='Your Email *' />
                        </div>
                      </div>
                      <div className="review-checkbox">
                        <label>
                          <input type="checkbox" />
                          Save my name, email, and website in this browser for the next time I comment.
                        </label>
                      </div>
                      <div className="product-last-btn">
                        <button>Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-related">
                <div className="product-related-title">
                  <h2>Related products</h2>
                </div>
                <div className="product-items">
                  <div className="product-item">
                    <div className="product-item-img">
                      <Link to='/product'>
                        <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/product-21.jpg" alt="" />
                      </Link>
                      <button className="btn">Add to cart</button>
                    </div>
                    <div className="product-item-text">
                      <h2>WHITE CHEESE</h2>
                      <h5>$65.00</h5>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="product-item-img">
                      <Link to='/product'>
                        <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/product-21.jpg" alt="" />
                      </Link>
                      <button className="btn">Add to cart</button>
                    </div>
                    <div className="product-item-text">
                      <h2>WHITE CHEESE</h2>
                      <h5>$65.00</h5>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="product-item-img">
                      <Link to='/product'>
                        <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/product-21.jpg" alt="" />
                      </Link>
                      <button className="btn">Add to cart</button>
                    </div>
                    <div className="product-item-text">
                      <h2>WHITE CHEESE</h2>
                      <h5>$65.00</h5>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="product-item-img">
                      <Link to='/product'>
                        <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/product-21.jpg" alt="" />
                      </Link>
                      <button className="btn">Add to cart</button>
                    </div>
                    <div className="product-item-text">
                      <h2>WHITE CHEESE</h2>
                      <h5>$65.00</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Product
