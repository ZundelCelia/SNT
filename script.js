function goBack() {
  if (document.referrer !== "") {
    history.back();
  } else {
    window.location.href = "index.html"; // Page par défaut
  }
}
