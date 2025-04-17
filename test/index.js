// index.js
const fs = require("fs");
const path = require("path");
const math = require("./math");

// Dùng math module
const a = 20, b = 5;
const result = `
Add: ${math.add(a, b)}
Sub: ${math.sub(a, b)}
Mul: ${math.mul(a, b)}
Div: ${math.div(a, b)}
`;

// Ghi kết quả vào file
const filePath = path.join(__dirname, "data.txt");

fs.writeFile(filePath, result, (err) => {
  if (err) throw err;
  console.log("✅ Ghi kết quả vào data.txt thành công.");

  // Đọc lại file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) throw err;
    console.log("📄 Nội dung file:");
    console.log(data);
  });
});
