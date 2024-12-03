const fetchProductReviews = async (productLink) => {
  try {
    // Define headers for the request
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    // URL-encoded body for POST requests
    var urlencoded = new URLSearchParams();
    urlencoded.append("link", productLink);

    // Define request options
    var requestOptions = {
      method: "POST", // Changed to POST as `body` is typically not allowed in GET requests
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    // Make the API call
    const response = await fetch(
      "http://localhost:9020/review/",
      requestOptions
    );

    // Check for a successful response
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse and return JSON data
    const result = await response.json();
    return { review: result.reviews, productName: result.productName };
  } catch (error) {
    console.error("Error fetching product reviews:", error.message);
    return { review: null, productName: null };
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#btn-analyse").addEventListener("click", async () => {
    const productLink = document.querySelector("#linkBox").value;
    const { review, productName } = await fetchProductReviews(productLink);
    new JsonViewer({
      theme: "dark",
      value: review,
    }).render("#json-viewer");
  });
});
