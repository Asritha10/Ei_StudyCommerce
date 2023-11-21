const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51LY1QBSIqQO61hDB1N5xIHmXGhlBCe4vcJ3XUMod7MDiwTauydAjpETHWKh2iBdJiGkiQh8C3xwt0Ya2hBuPEFNi00kEhiboPC');

class StripeApp {
  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(express.static("public"));
    this.app.use(express.json());
    this.app.get('/', this.handleRoot.bind(this));
    this.app.post("/checkout", this.handleCheckout.bind(this));
    this.app.listen(4000, () => console.log("Listening on port 4000!"));
  }

  handleRoot(req, res) {
    res.json({'msg':'HAII'});
  }

  async handleCheckout(req, res) {
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];

    items.forEach((item) => {
      lineItems.push({
        price: item.id,
        quantity: item.quantity
      });
    });

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: "http://localhost:8080/success",
      cancel_url: "http://localhost:8080/cancel"
    });

    res.send(JSON.stringify({
      url: session.url
    }));
  }
}

const stripeApp = new StripeApp();
