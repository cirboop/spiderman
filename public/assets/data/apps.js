var apps = [
   
    {
      "id": "google",
      "title": "Google",
      "url": "https://www.google.com/?safe=active&ssui=on",
      'image': 'https://img.freepik.com/free-icon/search_318-265146.jpg'
      
    },
    
    
    {
      'id': 'win11',
      'title': 'Windows 11 in React',
      'url': 'https://win11.blueedge.me/',
      "image": "https://th.bing.com/th/id/OIP.h_Z4vIV4lUGs8jqxyigdvgHaEG?rs=1&pid=ImgDetMain",
      "description": "A remake of the Windows 11 UI in React.js"
    },
    
  ]
  
  var customapps = JSON.parse(localStorage.getItem("customapps"))
  if (customapps) customapps.forEach(app => {
    apps.push(app)
  })
  
  console.log("Loaded " + apps.length + " apps")
  if (customapps) console.log("Loaded " + customapps.length + " custom apps")
