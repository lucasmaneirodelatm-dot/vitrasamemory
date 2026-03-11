let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
e.preventDefault();
deferredPrompt = e;

const btn = document.createElement("button");
btn.innerText = "Instalar VITRASA MEMORY";
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.padding = "10px";

document.body.appendChild(btn);

btn.addEventListener("click", async () => {
deferredPrompt.prompt();
});
});
