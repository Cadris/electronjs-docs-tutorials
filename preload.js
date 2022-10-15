window.addEventListener('DOMContentLoaded', () => {

    // A helper utility function
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    // The Operation directions
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
})


/**
 * This is the preload scripts which will run on the DOM - Browser side. 
 * 
 * The client side can not access the main process - `app's` data. 
 * So this script will access/create the data, and hand over the data to client side.
 * 
 * This script will run before the initial render.
 */