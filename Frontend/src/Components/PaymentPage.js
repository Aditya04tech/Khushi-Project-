import React from "react";

const PaymentPage = () => {
  const [selectedUPI, setSelectedUPI] = React.useState("");

  const [selectedPayment, setSelectedPayment] = React.useState("");
  const [selectedBank, setSelectedBank] = React.useState("");

  

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-4">
        <div className="flex">
          <div className="w-3/4 pr-4">
            <div className="bg-blue-600 text-white p-4 rounded-t-lg">
              <h2 className="text-lg font-bold">PAYMENT OPTIONS</h2>
            </div>
            <div className="bg-yellow-100 p-4">
              <p>
                Complete payment in{" "}
                <span className="font-bold">00 : 13 : 53</span>
              </p>
            </div>
            <div className="p-4">
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="payment"
                    className="mr-2"
                    defaultChecked
                  />
                  <img
                     src="assets/images/upi icon.png"
                    alt="Google Pay logo"
                    className="mr-2" style={{ width: '48px', height: '48px' }}
                  />
                  {/* <span>UPI</span> */}
                </div>
                <div className="ml-6">
                  <p className="font-bold">Choose an option</p>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="upi"
                      className="mr-2"
                      onChange={() => setSelectedUPI("PhonePe")}
                    />
                    <span>PhonePe</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="upi"
                      className="mr-2"
                      onChange={() => setSelectedUPI("Your UPI ID")}
                    />
                    <span>Your UPI ID</span>
                  </div>
                  {selectedUPI === "Your UPI ID" && (
  <div className="ml-6">
    <input
      type="text"
      placeholder="Enter your UPI ID"
      className="border p-2 rounded w-full"
      value={selectedUPI} // Add this to display the selected UPI ID
      onChange={(e) => setSelectedUPI(e.target.value)} // Add this to update the selectedUPI state
    />
    {selectedUPI !== "" && (
      <button className="pay-button bg-red-600 text-black p-2 rounded w-full ">Pay</button>
    )}
  </div>
)}
                  <p className="text-gray-500">Pay by any UPI app</p>
                </div>
              </div>
              {/* <div className="flex items-center mb-4">
                <input
                  type="radio"
                  name="payment"
                  className="mr-2"
                  onChange={() => setSelectedPayment("Wallets")}
                />
                <img
                  src="https://placehold.co/24x24"
                  alt="Wallets logo"
                  className="mr-2"
                />
                <span>Wallets</span>
              </div> */}
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  name="payment"
                  className="mr-2"
                  onChange={() =>
                    setSelectedPayment("Credit / Debit / ATM Card")
                  }
                />
                <span>Credit / Debit / ATM Card</span>
              </div>
              {selectedPayment === "Credit / Debit / ATM Card" && (
                <div className="ml-6 mb-4">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="border p-2 rounded w-full mb-2"
                  />
                  <div className="flex mb-2">
                    <input
                      type="text"
                      placeholder="Valid Thru (MM/YY)"
                      className="border p-2 rounded w-1/2 mr-2"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="border p-2 rounded w-1/2"
                    />
                  </div>
                  <button className="bg-blue-600 text-black p-2 rounded w-full">
                    Pay
                  </button>
                </div>
              )}
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  name="payment"
                  className="mr-2"
                  onChange={() => setSelectedPayment("Net Banking")}
                />
                <span>Net Banking</span>
              </div>
              {selectedPayment === "Net Banking" && (
                <div className="ml-6 mb-4">
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="bank"
                      className="mr-2"
                      onChange={() => setSelectedBank("HDFC Bank")}
                    />
                    <span>HDFC Bank</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="bank"
                      className="mr-2"
                      onChange={() => setSelectedBank("ICICI Bank")}
                    />
                    <span>ICICI Bank</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="bank"
                      className="mr-2"
                      onChange={() => setSelectedBank("State Bank of India")}
                    />
                    <span>State Bank of India</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="bank"
                      className="mr-2"
                      onChange={() => setSelectedBank("Axis Bank")}
                    />
                    <span>Axis Bank</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="bank"
                      className="mr-2"
                      onChange={() => setSelectedBank("Other Banks")}
                    />
                    <span>Other Banks</span>
                  </div>
                  {selectedBank === "Other Banks" && (
                    <div className="ml-6">
                      <select className="border p-2 rounded w-full">
                        <option value="">Select Bank</option>
                        <option value="Bank 1">Bank 1</option>
                        <option value="Bank 2">Bank 2</option>
                        <option value="Bank 3">Bank 3</option>
                      </select>
                    </div>
                  )}
                </div>
              )}
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  name="payment"
                  className="mr-2"
                  onChange={() => setSelectedPayment("Cash on Delivery")}
                />
                <span>Cash on Delivery</span>
              </div>
              {selectedPayment === "Cash on Delivery" && (
                <div className="ml-6 mb-4">
                  <div className="mb-2">
                    <span>Enter the number shown below:</span>
                    <div className="flex items-center mt-2">
                      <span className="border p-2 rounded bg-gray-200">
                        1234
                      </span>
                      <input
                        type="text"
                        placeholder="Enter Captcha"
                        className="border p-2 rounded w-full ml-2"
                      />
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white p-2 rounded w-full">
                    Confirm Order
                  </button>
                </div>
              )}
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  name="payment"
                  className="mr-2"
                  onChange={() => setSelectedPayment("EMI (Easy Installments)")}
                />
                <span>EMI (Easy Installments)</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-plus mr-2"></i>
                <span>Add Gift Card</span>
              </div>
            </div>
          </div>
          <div className="w-1/4 bg-gray-100 p-4 rounded-lg">
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <h3 className="font-bold mb-2">PRICE DETAILS</h3>
              <div className="flex justify-between mb-2">
                <span>Price (1 item)</span>
                <span>₹1,399</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Delivery Charges</span>
                <span className="text-green-500">FREE</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Platform Fee</span>
                <span>₹3</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold">
                <span>Amount Payable</span>
                <span>₹1,402</span>
              </div>
            </div>
            {/* <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <div className="flex items-center mb-2">
                <img
                  src="https://placehold.co/24x24"
                  alt="Bajaj Finserv logo"
                  className="mr-2"
                />
                <span>
                  No Cost EMI on Bajaj Finserv EMI Card on cart value above
                  ₹2999
                </span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <div className="flex items-center mb-2">
                <img
                  src="https://placehold.co/24x24"
                  alt="Debit and Credit Cards logo"
                  className="mr-2"
                />
                <span>
                  Additional ₹200 off on Select Debit and Credit Cards
                </span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <div className="flex items-center mb-2">
                <img
                  src="https://placehold.co/24x24"
                  alt="Flipkart Axis Bank Credit Card logo"
                  className="mr-2"
                />
                <span>
                  5% Unlimited Cashback on Flipkart Axis Bank Credit Card
                </span>
              </div>
            </div>
            <div className="flex items-center text-gray-500">
              <i className="fas fa-shield-alt mr-2"></i>
              <span>
                Safe and Secure Payments. Easy returns. 100% Authentic products.
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
