const butInstall = document.getElementById('buttonInstall');

// The logic below installs the PWA.

// Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});


// Event handler for the 'butInstall' element.
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }
  
  promptEvent.prompt();
  
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

// Handler for the 'appIsntalled' event.
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
}); 

