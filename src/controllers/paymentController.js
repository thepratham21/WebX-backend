import razorpayInstance from "../utils/razorpay.js";
import crypto from "crypto";

export const createOrder = async (req, res) => {
    try {

        console.log("HEADERS:", req.headers);
        console.log("BODY:", req.body);

        const { plan } = req.body;

        if (!plan) {
            return res.status(400).json({ 
                message: "Plan is required",
                received: req.body 
            });
        }

        const pricing = {
            pro: 499,
            enterprise: 1499,
        };

        const amount = pricing[plan.toLowerCase()];

        if (!amount) {
            return res.status(400).json({ message: "Invalid plan" });
        }

        const options = {
            amount: amount * 100, // ₹ → paise
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorpayInstance.orders.create(options);

        res.json({
            success: true,
            order,
            amount,
            plan,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Order creation failed" });
    }
};

export const verifyPayment = async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            plan,
        } = req.body;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({ 
                success: false, 
                message: "Missing payment verification data" 
            });
        }

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(body)
            .digest("hex");

        if (expectedSignature !== razorpay_signature) {
            return res.status(400).json({ success: false });
        }

        // SUCCESS → Update user 
        // Example:
        // const user = await User.findById(req.user.id);
        // user.plan = plan;
        // user.credits += plan === "pro" ? 500 : 1000;
        // await user.save();

        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ message: "Verification failed" });
    }
};