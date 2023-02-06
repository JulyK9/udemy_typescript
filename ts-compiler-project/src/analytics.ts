// console.log("Sending data... after exclude");
// // comment : removeComments 옵션 확인용
let logged;

function sendAnalytics(data: string) {
  console.log(data);
  logged = true;
  // logged = "Max";
}

sendAnalytics("The data");
