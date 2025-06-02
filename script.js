function myFunction() {
    const currentColor = window.getComputedStyle(document.body).backgroundColor;
    const color1 = "rgb(96, 128, 115)";  // #608073
    const color2 = "rgb(153, 204, 184)"; // #99CCB8
  
    if (currentColor === color1) {
      document.body.style.backgroundColor = "#99CCB8"; // switch to color2
    } else {
      document.body.style.backgroundColor = "#608073"; // switch to color1
    }
  }

  