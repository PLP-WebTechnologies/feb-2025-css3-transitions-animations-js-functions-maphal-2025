<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bouncing Star Animation</title>
  <link rel="stylesheet" href="a7.css">
</head>
<body>
 <div id="star" class="star"></div>
  <button id="trigger-btn">Trigger Animation</button>
  <script src="A7.js"></script>

</body>
</html>

CSS
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #aaa1a8;
  font-family: Arial, sans-serif;
}

.star {
  width: 50px;
  height: 50px;
  background-color: gold;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: none;
}

@keyframes bounce {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -60%) scale(1.2);
  }
}

.bouncing {
  animation: bounce 1s infinite;
}

button {
  position: absolute;
  bottom: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #781818;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #30b632;
}

JS

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #aaa1a8;
  font-family: Arial, sans-serif;
}

.star {
  width: 50px;
  height: 50px;
  background-color: gold;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: none;
}

@keyframes bounce {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -60%) scale(1.2);
  }
}

.bouncing {
  animation: bounce 1s infinite;
}

button {
  position: absolute;
  bottom: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #781818;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #30b632;
}
