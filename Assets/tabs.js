document.getElementById("account-btn").addEventListener("click", function () {
  document.getElementById("account-section").classList.remove("hidden");
  document.getElementById("password-section").classList.add("hidden");
  document.getElementById("account-btn").classList.add("active");
  document.getElementById("password-btn").classList.remove("active");
});

document.getElementById("password-btn").addEventListener("click", function () {
  document.getElementById("password-section").classList.remove("hidden");
  document.getElementById("account-section").classList.add("hidden");
  document.getElementById("password-btn").classList.add("active");
  document.getElementById("account-btn").classList.remove("active");
});
