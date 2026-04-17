const password = document.getElementById("password");
 const progress = document.getElementById("progress"); 
 const strengthText = document.getElementById("strengthText");
  const scoreText = document.getElementById("scoreText"); 
  const toggle = document.getElementById("toggle");
password.addEventListener("input", () => { let value = password.value; 
    let score = 0;
if (/.{8,}/.test(value)) score += 20;
 if (/[A-Z]/.test(value)) score += 20; 
 if (/[a-z]/.test(value)) score += 20;
  if (/[0-9]/.test(value)) score += 20;
   if (/[!@#$%^&*]/.test(value)) score += 20;
progress.style.width = score + "%";
 scoreText.textContent = "Strength Score: " + score + "/100";
progress.className = "";

if (score <= 40) { progress.classList.add("weak");
     strengthText.textContent = "Weak Password"; 
    } else if (score <= 80) { progress.classList.add("medium");
         strengthText.textContent = "Medium Password"; 
        } else { progress.classList.add("strong"); 
            strengthText.textContent = "Strong Password"; } });
toggle.addEventListener("click", () => { password.type = password.type === "password" ? "text" : "password";
});

