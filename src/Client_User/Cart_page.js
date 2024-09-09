import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
function CartPage() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState({});
  const { cartLength, setCartLength } = useContext(CartContext);

  useEffect(() => {
    getDataLocalCart();
  }, []);

  const getDataLocalCart = async () => {
    const dataCartLocal = localStorage.getItem("cart");
    if (dataCartLocal) {
      const dataCart = JSON.parse(dataCartLocal);
      setCart(dataCart);
      axios
        .post("http://localhost:3003/api/product/cart", dataCart)
        .then((res) => {
          console.log(res.data.data);
          setData(res.data.data);
          setCartLength(
            Object.keys(dataCart).reduce((sum, key) => sum + dataCart[key], 0)
          );
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleDelete = async (key) => {
    const newCart = { ...cart };
    delete newCart[key];
    setCart(newCart);
    await localStorage.setItem("cart", JSON.stringify(newCart));
    const newData = data.filter((item) => item.id !== parseInt(key));
    setData(newData);
    setCartLength(
      Object.keys(newData).reduce((sum, key) => sum + newData[key], 0)
    );
  };

  const handleIncreaseQty = (key) => {
    const newCart = { ...cart, [key]: (cart[key] || 1) + 1 };
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCartLength(
      Object.keys(newCart).reduce((sum, key) => sum + newCart[key], 0)
    ); // Cập nhật cartLength
  };

  const handleDecreaseQty = (key) => {
    const newCart = { ...cart, [key]: Math.max((cart[key] || 1) - 1, 1) };
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCartLength(
      Object.keys(newCart).reduce((sum, key) => sum + newCart[key], 0)
    ); // Cập nhật cartLength
  };

  const formatCurrency = (amount) => {
    return amount.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    //format price to VND
  };

  function renderData() {
    if (data && data.length > 0) {
      return data.map((value) => {
        const key = value.id;
        const totalPrice = value.price * cart[key];

        const formattedPrice = formatCurrency(value.price); // Định dạng giá sản phẩm
        const formattedTotalPrice = formatCurrency(totalPrice); // Định dạng tổng giá
        return (
          <tr key={key}>
            <td colSpan={4} className="prod-column">
              <div className="column-box">
                <div className="remove-btn">
                  <i
                    onClick={() => handleDelete(key)}
                    className="flaticon-close"
                  />
                </div>
                <div className="prod-thumb">
                  <a href="#">
                    <img src={`http://localhost:3003${value.image}`} />
                  </a>
                </div>
                <div className="prod-title">{value.name}</div>
              </div>
            </td>
            <td className="price">{formattedPrice}</td>
            <td className="qty">
              <div
                className="item-quantity"
                style={{
                  display: "flex",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  overflow: "hidden",
                  width: "120px",
                }}
              >
                <button
                  className="quantity-decrease"
                  style={{
                    border: "none",
                    backgroundColor: "#f0f0f0",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDecreaseQty(key)}
                >
                  -
                </button>
                <input
                  className="quantity-spinner"
                  type="text"
                  value={cart[key]}
                  name="quantity"
                  style={{
                    textAlign: "center",
                    width: "40px",
                    border: "none",
                    outline: "none",
                  }}
                  readOnly
                />
                <button
                  className="quantity-increase"
                  style={{
                    border: "none",
                    backgroundColor: "#f0f0f0",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleIncreaseQty(key)}
                >
                  +
                </button>
              </div>
            </td>
            <td className="sub-total">{formattedTotalPrice}</td>
          </tr>
        );
      });
    }
  }

  const calculateTotal = () => {
    let x = Object.keys(cart).reduce((total, key) => {
      const item = data.find((item) => item.id == key);
      return total + (item ? item.price * cart[key] : 0);
    }, 0);
    const formattedTotalBill = formatCurrency(x);
    return formattedTotalBill;
  };

  const totalBill = calculateTotal();
  return (
    <section className="cart-section cart-page">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12 table-column">
            <div className="table-outer">
              <table className="cart-table">
                <thead className="cart-header">
                  <tr>
                    <th>&nbsp;</th>
                    <th className="prod-column">Product Name</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th className="price">Price</th>
                    <th className="quantity">Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                    <td colSpan={4} className="prod-column">
                      <div className="column-box">
                        <div className="remove-btn">
                          <i className="flaticon-close" />
                        </div>
                        <div className="prod-thumb">
                          <a href="#">
                            <img
                              src="/assets/images/resource/shop/cart-1.jpg"
                              alt
                            />
                          </a>
                        </div>
                        <div className="prod-title">Black Boys Shirt</div>
                      </div>
                    </td>
                    <td className="price">$50.00</td>
                    <td className="qty">
                      <div className="item-quantity">
                        <input
                          className="quantity-spinner"
                          type="text"
                          defaultValue={1}
                          name="quantity"
                        />
                      </div>
                    </td>
                    <td className="sub-total">$50.00</td>
                  </tr> */}
                  {renderData()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="othre-content clearfix">
          <div className="coupon-box pull-left clearfix">
            <input type="text" placeholder="Enter coupon code..." />
            <button type="submit" className="theme-btn-two">
              Apply coupon
              <i className="flaticon-right-1" />
            </button>
          </div>
          <div className="update-btn pull-right">
            <button type="submit" className="theme-btn-one">
              Update Cart
              <i className="flaticon-right-1" />
            </button>
          </div>
        </div>
        <div className="cart-total">
          <div className="row">
            <div className="col-xl-5 col-lg-12 col-md-12 offset-xl-7 cart-column">
              <div className="total-cart-box clearfix">
                <h4>Cart Totals</h4>
                <ul className="list clearfix">
                  <li>
                    Subtotal:<span>{totalBill}</span>
                  </li>
                  <li>
                    Order Total:<span>{totalBill}</span>
                  </li>
                </ul>
                <a href="cart.html" className="theme-btn-two">
                  Proceed to Checkout
                  <i className="flaticon-right-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CartPage;
