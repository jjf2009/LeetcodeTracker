// Use a broader pattern to ensure you catch the request
const target = ["*://leetcode.com/submissions/detail/*/check/"];

function logResponse(details) {
  // Check if the request was successful at the network level
  if (details.statusCode === 200) {
    console.log("Submission check detected:", details.url);
    // We will work on getting the body in the next step
  }
}

browser.webRequest.onCompleted.addListener(logResponse, { urls: target });
