import React from "react";
import Footer from "../layout/footer";

const download = () => {
  return (
    <div className="mt-8">
      <div className="pt-12">
        <div className="flex items-center justify-center">
          <div className="mr-20">
            <img className="w-60 h-96 ml-52 mt-20" src="Source/assets download/hp-2.gif" alt="Kopi Kenangan App" />
          </div>
          <div className="mt-10 mr-20">
            <h1 className="text-3xl font-bold">KOPI KENANGAN APP</h1>
            <br />
            <h5>
              <b>Find out how to get free vouchers, priority access and extra benefits.</b>
            </h5>
            <p>Here’s how:</p>
            <br />
            <ul className="list-disc ml-20">
              <li className="text-sm">Use the Kopi Kenangan app to order, you may select pickup or delivery to skip the queue</li>
              <li className="text-sm">Collect Kenangan Points cashback through in-app ordering OR scan the QR code at the cashier</li>
              <li className="text-sm">Enjoy exclusive membership deals like free vouchers, birthday drinks, priority access to new products and more</li>
            </ul>
            <br />
            <p className="teks">Extra convenience. Extra benefits. Only in Kenangan app.</p>
            <div className="flex mt-4">
              <a href="https://play.google.com/store/apps/details?gl=US&hl=en&id=com.kopikenangan" target="_blank" rel="noopener noreferrer">
                <img className="mt-2" src="Source/assets download/GOOGLEPLAY.png" width="85" height="30" alt="Google Play" />
              </a>
              <a href="https://play.google.com/store/apps/details?gl=US&hl=en&id=com.kopikenangan" target="_blank" rel="noopener noreferrer" className="ml-3">
                <img className="mt-2" src="Source/assets download/appstore.png" width="85" height="30" alt="App Store" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-56">
        <br />
        <h1 className="text-2xl font-bold text-center mt-100">
          <b>TIPS AND TRICKS</b>
        </h1>
        <div className="flex items-center justify-center ml-265 mt-265">
          <br />
          <img className="w-72 h-72" src="https://images.squarespace-cdn.com/content/v1/5fa1095912d2fc6dfc63ac9c/1611748300359-PT8D6YOKSPGRJEFVE227/website-illustration-1.png?format=1500w" alt="Illustration" />
          <div className="flex px-20">
            <p className="order">
              <strong>Order Ahead To Skip The Queue</strong>
              <br />
              We all know how busy your morning can get. How about saving some time by collecting your morning coffee without waiting?
              <br />
              <br />
              <strong>Use our Kopi Kenangan app</strong> to order ahead and pick up in-stores. Treat yourself with a fresh start of the day without standing in line.
            </p>
          </div>
        </div>
        <br />
        <div className="flex items-center justify-center ml-265 mt-265">
          <table>
            <tr>
              <td>
                <div className="flex px-20">
                  <p className="like">
                    <strong>Kenangan Points</strong>
                    <br />
                    <br />
                    Collect Kenangan Points cashback on every transaction if you order in-app or scan QR code at our cashier counter. Use them as cash for your next transaction with no minimum order!
                    <br />
                    <br />
                    <b>Keep in mind: 1 Kenangan Point = 1Rp</b>
                  </p>
                </div>
              </td>
              <td>
                <img className="w-125" src="https://images.squarespace-cdn.com/content/v1/5fa1095912d2fc6dfc63ac9c/1607928858093-82JLCC7V5LKB5URHGO7D/WhatsApp+Image+2020-12-14+at+12.22.38.jpeg?format=1500w" alt="Kenangan Points" />
              </td>
            </tr>
          </table>
        </div>

        <div className="flex items-center justify-center ml-265 mt-265">
          <br />
          <img className="w-72 h-72" src="https://images.squarespace-cdn.com/content/v1/5fa1095912d2fc6dfc63ac9c/1607928926381-3FLT3JHE4236DWP4I969/WhatsApp+Image+2020-12-14+at+12.22.39+%282%29.jpeg?format=1500w" alt="Promotions" />
          <div className="flex px-20">
            <a href="https://kopikenangan.com/" style={{ color: "black" }}>
              <p className="order">
                <strong>
                  <u>Promotions</u>
                </strong>
              </p>
              <br />
              <br />
              Don't want to miss out on all the promotions and discounts? Wake up every day and check out what's new in our Kenangan APP!
              <br />
              <br />
              We may also surprise you with vouchers for free! Follow us on Instagram <b>(@kopikenangan.id)</b> to keep you posted on more amazing app exclusive benefits.
            </a>
          </div>
          <br />
        </div>

        <br />
        <div className="flex items-center justify-center ml-265 mt-265">
          <br />
          <div className="flex px-20">
            <p className="like">
              <strong>Membership Benefits</strong>
              <br />
              <br />
              At Kopi Kenangan, the more you spend, the more you save! Upgrade your membership tier by making more purchases. In return, you will get % increases on Kenangan Points cashback, more free vouchers, priority access to new
              products and more!
              <br />
              <br />
              <strong>Check out your membership page for more information</strong>
            </p>
            <img
              className="w-72 h-72"
              src="https://images.squarespace-cdn.com/content/v1/5fa1095912d2fc6dfc63ac9c/1608107331627-8ESGEDIFMJIK0NXATZ1D/website-illustration-updated.png?format=1500w"
              alt="Membership Benefits"
              width="300"
              height="300"
            />
          </div>
          <br />
        </div>

        <br />
        <br />
        <a href="https://web.kopikenangan.com/account/delete" style={{ color: "black" }}>
          <p style={{ textAlign: "center" }}>
            <u>Delete my Kopi Kenangan App Account</u>
          </p>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default download;
