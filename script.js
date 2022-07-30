console.log("hi")

const d = document.createElement("div")
d.textContent = "script"
const s = document.createElement("span")
s.textContent = "new span"
document.append(d)

setTimeout(() => document.append(s), 1000)