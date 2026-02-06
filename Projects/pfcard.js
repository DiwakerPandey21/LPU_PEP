// Create main page container
const page = document.createElement("div");
page.className = "page";

// ---------------- TOP SECTION ----------------
const top = document.createElement("div");
top.className = "top";

const profileCard = document.createElement("div");
profileCard.className = "profile-card";

// Emoji / Profile Pic
const emoji = document.createElement("div");
emoji.className = "emoji";
emoji.id = "profilePic";
emoji.textContent = "🙂";

// Name
const name = document.createElement("h2");
name.id = "profileName";
name.textContent = "monk!";

// Bio
const bio = document.createElement("p");
bio.id = "profileBio";
bio.textContent = "bio";

// Append profile card elements
profileCard.appendChild(emoji);
profileCard.appendChild(name);
profileCard.appendChild(bio);
top.appendChild(profileCard);

// ---------------- BOTTOM SECTION ----------------
const bottom = document.createElement("div");
bottom.className = "bottom";

const inputs = document.createElement("div");
inputs.className = "inputs";

// Image URL input
const imgInput = document.createElement("input");
imgInput.id = "imgInput";
imgInput.type = "text";
imgInput.placeholder = "Enter Image URL";

// Name input
const nameInput = document.createElement("input");
nameInput.id = "nameInput";
nameInput.type = "text";
nameInput.placeholder = "Enter Name";

// Bio textarea
const bioInput = document.createElement("textarea");
bioInput.id = "bioInput";
bioInput.placeholder = "Enter Bio";

// Button
const button = document.createElement("button");
button.textContent = "Update Profile";

// Update function
button.onclick = function () {
  const img = imgInput.value;
  const newName = nameInput.value;
  const newBio = bioInput.value;

  if (img) {
    emoji.innerHTML = `<img src="${img}" />`;
  }
  if (newName) {
    name.textContent = newName;
  }
  if (newBio) {
    bio.textContent = newBio;
  }
};

// Append inputs
inputs.appendChild(imgInput);
inputs.appendChild(nameInput);
inputs.appendChild(bioInput);
inputs.appendChild(button);

bottom.appendChild(inputs);

// ---------------- FINAL APPEND ----------------
page.appendChild(top);
page.appendChild(bottom);
document.body.appendChild(page);
