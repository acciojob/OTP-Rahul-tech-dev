const boxes = document.querySelectorAll(".code");

boxes[0].focus();

boxes.forEach((input, idx) => {
  input.addEventListener("keydown", (e) => {
    if (/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      input.value = e.key;
      boxes[idx + 1]?.focus();
    } else if (e.key === "Backspace") {
      e.preventDefault();
      input.value = "";
      if (boxes[idx - 1]) {
        boxes[idx - 1].value = "";
        boxes[idx - 1].focus();
      }
    }
  });
});