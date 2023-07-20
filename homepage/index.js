function changeName(id) {
  const element = document.getElementById(id);
  switch (id) {
    case "bee":
      element.textContent = "Bee";
      break;
    case "austin":
      element.textContent = "Austin";
      break;
    case "brian":
      element.textContent = "Brian";
      break;
    case "eugene":
      element.textContent = "Eugene";
      break;
    default:
      break;
  }
}

function resetName(id) {
  const element = document.getElementById(id);
  switch (id) {
    case "bee":
      element.textContent = "B";
      break;
    case "austin":
      element.textContent = "A";
      break;
    case "brian":
      element.textContent = "B";
      break;
    case "eugene":
      element.textContent = "E";
      break;
    default:
      break;
    }
}

const helpIcon = () => {
  alert("purpose and information of this website, BABE");
};