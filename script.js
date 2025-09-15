function askAI() {
  let question = document.getElementById("question").value.toLowerCase();
  let answerBox = document.getElementById("answer");
  // Normalize input: add dash between letters and numbers (CR3 -> CR-3)
question = question.replace(/\b(cr|lt|cl|tr)(\d+)\b/g, "$1-$2");


  // ----------------- 🍽 Mess Menu -----------------
  const messMenu = {
    monday: { 
      breakfast: "Aaloo Parantha, Plain Curd, Sprouts, Bread, Butter, Jam, Tea", 
      lunch: "Dal Chana Urad, Mattar Paneer, Boondi Raita, Tandoori Roti & Plain Chapati, Salad, Banana", 
      dinner: "Dal Panchranga, Kadai/Karela, Tandoori Roti & Plain Chapati, Rice, Salad, Papad, Sweet Dish – Semiya, Hot & Cold Milk"
    },
    tuesday: { 
      breakfast: "Poha, Veg Cutlet, Cornflakes, Milk, Kala Chana Chat, Bread, Butter, Jam, Tea, Apple Royal", 
      lunch: "Dal Rajmah, Mix Veg, Plain Curd, Tandoori Roti & Plain Chapati, Rice, Salad", 
      dinner: "Dal Moong Makh, Chili Paneer, Tandoori Roti & Plain Chapati, Rice, Salad, Sweet Dish – Besan Ladoo, Hot & Cold Milk"
    },
    wednesday: { 
      breakfast: "Poori, Aaloo Tomato Sabji, Veg Semiya, Boiled Egg, Sprouts, Bread, Butter, Jam, Cold Coffee", 
      lunch: "Choley Bhature, Biryani, Dahi Vada/Pakodi with South Chutney, Onion Salad & Lemon, Banana", 
      dinner: "Dal Maharani, Egg Curry/Egg Curry Baingan Bharta/Masala, Tandoori Roti & Plain Chapati, Rice, Salad, Sweet – Amul Butter Scotch / Mango Cup, Hot & Cold Milk"
    },
    thursday: { 
      breakfast: "Idli, Sambhar, Vada, Upma, Coconut Chutney, Kala Chana Chat, Bread, Butter, Jam, Tea, Apple Golden", 
      lunch: "Jeera Aaloo, Kadhi Pakoda, Tandoori Roti & Plain Chapati, Rice, Salad, Papad", 
      dinner: "Dal Arhar, Aaloo Methi, Tandoori Roti & Plain Chapati, Matar Pulao, Salad, Green Chutney, Sweet Dish – Fruit Custard, Hot & Cold Milk"
    },
    friday: { 
      breakfast: "Kachori Dal/Matar, Aaloo Sabji, Maggi (Zero Maida), Cornflakes, Sprouts, Bread, Butter, Jam, Milk/Tea", 
      lunch: "Dal Masoor Sabut, Aaloo Gobhi, Boondi Raita, Tandoori Roti & Plain Chapati, Rice, Salad, Papad", 
      dinner: "Dal Moong Sabut, Kaddu Masala, Tandoori Roti & Plain Chapati, Rice, Salad, Sweet Dish – Rice Kheer, Hot & Cold Milk"
    },
    saturday: { 
      breakfast: "Aaloo Sandwich, Macaroni (Zero Maida), Daliya, Boiled Egg, Kala Chana Chat, Bread, Butter, Jam, Cold Coffee", 
      lunch: "Dal Rajmah, Aaloo Simla Mirch, Lassi, Tandoori Roti & Plain Chapati, Rice, Salad", 
      dinner: "Chana Masala, Mix Veg, Tandoori Roti & Plain Chapati, Rice, Salad, Green Chutney, Sweet Dish Halwa, Hot & Cold Milk"
    },
    sunday: { 
      breakfast: "Bread Pakora/Samosa, White Sauce Pasta (Zero Maida), Daliya, Omelette, Bread, Butter, Jam, Tea", 
      lunch: "Paneer Onion Parantha, Veg Biryani, Curd, Butter, Salad, Papad, Pickle, Amul Kulfi – Kashmiri", 
      dinner: "Dal Makhani, Aaloo Beans, Tandoori Roti & Plain Chapati, Rice, Salad, Sweet Dish – Gulab Jamun, Hot & Cold Milk"
    }
  };

  // ----------------- 🏫 University Room Directory -----------------
  const roomDirectory = {
    // Ground Floor
    "amphitheatre": "Ground Floor - Auditorium",
    "administration office": "Ground Floor",
    "meeting room": "Ground Floor",
    "learning resource centre": "Ground Floor",
    "lrc": "Ground Floor - Learning Resource Centre",
    "cr-3": "Ground Floor - Classroom",
    "cr-4": "Ground Floor - Classroom",
    "cl-7": "Ground Floor - Computer Lab",
    "cl-8": "Ground Floor - Computer Lab",
    "lt-1": "Ground Floor - Lecture Theatre",
    "lt-2": "Ground Floor - Lecture Theatre",
    "reception": "Ground Floor",
    "registrar office": "Ground Floor",
    "hr office": "Ground Floor",

    // First Floor
    "cl-9": "First Floor - Computer Lab",
    "cl-10": "First Floor - Computer Lab",
    "cl-11": "First Floor - Computer Lab",
    "tr-1": "First Floor - Tutorial Room",
    "tr-2": "First Floor - Tutorial Room",
    "tr-3": "First Floor - Tutorial Room",
    "cr-5": "First Floor - Classroom",
    "cr-6": "First Floor - Classroom",
    "cr-7": "First Floor - Classroom",
    "cr-8": "First Floor - Classroom",
    "cr-9": "First Floor - Classroom",
    "cr-10": "First Floor - Classroom",
    "lt-3": "First Floor - Lecture Theatre",
    "ece lab-6": "First Floor",
    "physics lab-1": "First Floor",
    "board room": "First Floor",
    "pantry": "First Floor",
    "faculty (hss, it, cse)": "First Floor",

    // Second Floor
    "cr-11": "Second Floor - Classroom",
    "cr-12": "Second Floor - Classroom",
    "lt-4": "Second Floor - Lecture Theatre",
    "tr-5": "Second Floor - Tutorial Room",
    "tr-6": "Second Floor - Tutorial Room",
    "tr-7": "Second Floor - Tutorial Room",
    "cl-1": "Second Floor - Computer Lab",
    "ug biotech lab-4": "Second Floor",
    "genomic technologies lab": "Second Floor",
    "bioinformatics lab": "Second Floor",
    "ece labs-3,4,5": "Second Floor",
    "characterization lab": "Second Floor",
    "faculty (ece, bt & bi, pms, math, hss)": "Second Floor",
    "director & dean (a&r) office": "Second Floor",
    "vice chancellor office": "Second Floor",
    "pro chancellor office": "Second Floor",

    // Third Floor
    "em analysis lab": "Third Floor",
    "pg biotech lab": "Third Floor",
    "probiotics and gut lab": "Third Floor",
    "physics lab-2": "Third Floor",
    "research lab": "Third Floor - ECE, CSE, BI, e-Yantra, IOT",
    "server room": "Third Floor",
    "language lab": "Third Floor",
    "cvd lab": "Third Floor",
    "ug biotech lab-3": "Third Floor",
    "pg lab": "Third Floor",
    "cl-3": "Third Floor - Computer Lab",
    "cl-4": "Third Floor - Computer Lab",
    "cl-5": "Third Floor - Computer Lab",
    "cl-6": "Third Floor - Computer Lab",
    "cl-12": "Third Floor - Computer Lab",
    "material science lab": "Third Floor",
    "group discussion room": "Third Floor",
    "faculty (bt & bi)": "Third Floor",
    "ece labs-1,2,7": "Third Floor",

    // Fourth Floor
    "biotech labs": "Fourth Floor",
    "cr-16": "Fourth Floor - Classroom",
    "cr-17": "Fourth Floor - Classroom",
    "cr-18": "Fourth Floor - Classroom",
    "cr-19": "Fourth Floor - Classroom",

    // Lower Level -1
    "accounts & finance": "Lower Level -1",
    "cr-1": "Lower Level -1 - Classroom",
    "cr-2": "Lower Level -1 - Classroom",
    "controller of examination": "Lower Level -1",

    // Lower Level -2
    "water filter room": "Lower Level -2",
    "record room": "Lower Level -2",
    "telephone exchange": "Lower Level -2",
    "tuck shop": "Lower Level -2",

    // Lower Level -3
    "ipc cell": "Lower Level -3",
    "punjab national bank": "Lower Level -3",
    "tied cell": "Lower Level -3"
  };

  // ----------------- 🔍 Answer Logic -----------------
  let response = "";

  // 1️⃣ Check if query is about mess menu
  for (let day in messMenu) {
    if (question.includes(day)) {
      if (question.includes("breakfast")) {
        response = `On ${day.charAt(0).toUpperCase() + day.slice(1)} Breakfast: ${messMenu[day].breakfast}`;
      } else if (question.includes("lunch")) {
        response = `On ${day.charAt(0).toUpperCase() + day.slice(1)} Lunch: ${messMenu[day].lunch}`;
      } else if (question.includes("dinner")) {
        response = `On ${day.charAt(0).toUpperCase() + day.slice(1)} Dinner: ${messMenu[day].dinner}`;
      } else {
        response = `On ${day.charAt(0).toUpperCase() + day.slice(1)}: 
        Breakfast = ${messMenu[day].breakfast}, 
        Lunch = ${messMenu[day].lunch}, 
        Dinner = ${messMenu[day].dinner}`;
      }
    }
  }

  // 2️⃣ Check if query is about rooms
if (response === "") {
    // Normalize input like CR3 -> CR-3
    question = question.replace(/\b(cr|lt|cl|tr)(\d+)\b/g, "$1-$2");

    for (let room in roomDirectory) {
        if (question.includes(room)) {
            response = `${room.toUpperCase()} is located at ${roomDirectory[room]}.`;
            break;
        }
    }
}


  // 3️⃣ Default response
  if (response === "") {
    response = "I don't know that yet. Please check the mess menu or academic block layout!";
  }

  answerBox.innerHTML = `<p>${response}</p>`;
}
