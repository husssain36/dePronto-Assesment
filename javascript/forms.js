const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  name = form.name.value;
  date = form.date.value;
  feedbackTitle = form.title.value;
  feedback = form.feedback.value;
  gender = form.gender.value;
  check = form.checkbox;
  check_array = [];
  check.forEach((item) => {
    if (item.checked) {
      check_array.push(item.value);
    }
  });
  console.log({
    name: name,
    date: date,
    title: feedbackTitle,
    feedback: feedback,
    gender: gender,
    check: check_array,
  });
});