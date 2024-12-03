const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function convertToReviewUrl(fullUrl) {
  try {
    const url = new URL(fullUrl);
    const pathnameParts = url.pathname.split("/");

    const pid = url.searchParams.get("pid");
    const lid = url.searchParams.get("lid");
    const marketplace = url.searchParams.get("marketplace") || "FLIPKART";

    if (!pid || !lid) {
      throw new Error("Missing required parameters: 'pid' or 'lid'");
    }

    const reviewPath = `/${pathnameParts[1]}/product-reviews/${pid}?pid=${pid}&lid=${lid}&marketplace=${marketplace}`;
    return reviewPath;
  } catch (error) {
    console.error("Error converting URL:", error.message);
    return null;
  }
}

const fetchReiviews = async (actualUrl) => {
  const url = "https://1.rome.api.flipkart.com/api/4/page/fetch";
  const headers = {
    accept: "*/*",
    "accept-language": "en-US,en;q=0.9,ta;q=0.8",
    "content-type": "application/json",
    "sec-ch-ua":
      '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Linux"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "x-user-agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 FKUA/website/42/website/Desktop",
    Referer: "https://www.flipkart.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  };
  const newUrl = convertToReviewUrl(actualUrl);
  const productName = newUrl.split("/")[1];
  console.log(newUrl);

  const body = {
    pageUri: newUrl,
    pageContext: { fetchSeoData: true },
  };
  const res = await axios.post(url, body, { headers });
  const reviewsWidget = res?.data?.RESPONSE?.slots?.filter(
    (slot) => slot?.widget?.type === "REVIEWS"
  );

  if (reviewsWidget?.length > 0) {
    const allReviews = reviewsWidget.flatMap((slot) =>
      slot.widget.data.renderableComponents.map((review) => ({
        author: review?.value?.author,
        rating: review?.value?.rating,
        title: review?.value?.title,
        text: review?.value?.text,
        helpfulCount: review?.value?.helpfulCount,
        images: review?.value?.images || [],
      }))
    );

    return { reviews: allReviews, productName: productName };
  } else {
    console.error("Reviews widget not found!");
  }
};

app.post("/review", async (req, res) => {
  const link = req.body.link;

  if (!link) {
    return res.status(300).json({ message: "Invalid link" });
  }
  const { reviews, productName } = await fetchReiviews(link);
  res.status(200).json({ reviews: reviews, productName: productName });
});

app.listen(9020, () => {
  console.log(`app listenting on port : http://localhost:9020`);
});
