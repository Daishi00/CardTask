const students = [
  {
    name: "Martin",
    lastName: "Lant",
    marks: [9, 8, null, 7, 5],
  },
  {
    name: "Francesco",
    lastName: "Portus",
    marks: [5, 4, 2, 3, 2],
  },
  {
    name: "Bill",
    lastName: "Merdoc",
    marks: [10, null, null, null, 10],
  },
  {
    name: "John",
    lastName: "Entman",
    marks: [9, 8, 7, 9, 7, 5],
  },
]

const visitedLectures = (marks) => {
  return marks.filter((mark) => mark !== null).length
}

const averageMark = (marks) => {
  const visited = marks.filter((mark) => mark !== null)
  const sum = visited.reduce((prev, next) => {
    return prev + next
  }, 0)
  return sum / 5
}

const student = document.querySelector(".container")
student.innerHTML = students
  .map((student) => {
    return `<ul class="card ${
      averageMark(student.marks) < 5 ? "red" : "green"
    }">
  <li>${student.name}</li>
  <li>${student.lastName}</li>
  <li>${visitedLectures(student.marks)} lectures</li>
  <li>${averageMark(student.marks)}</li></ul>`
  })
  .join("")

const cards = document.querySelectorAll(".card")
cards.forEach((item) => {
  item.addEventListener("click", (e) => {
    cards.forEach((el) => el.classList.remove("gray"))
    if (item.className == "card red" || item.className == "card green") {
      item.className += " gray"
    } else item.classList.remove("gray")
  })
})
