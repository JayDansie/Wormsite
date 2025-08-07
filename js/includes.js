async function loadComponent(id, file) {
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Failed to load ${file}`);
    const text = await response.text();
    document.getElementById(id).innerHTML = text;
  } catch (error) {
    console.error(error);
  }
}

loadComponent("header", "/html/header.html");
loadComponent("footer", "/html/footer.html");
