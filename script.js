console.log("hi")


const box = document.querySelector(".box")

const d = document.createElement("div")
d.textContent = "script "
const s = document.createElement("span")
s.textContent = "new span"
d.append(s)

setTimeout(() => box.append(d), 1000)