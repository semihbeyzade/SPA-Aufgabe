
  const navItems = document.querySelectorAll(".navitem")

  for (let navItem of navItems){
    navItem.addEventListener("click", (e)=>{
      e.stopPropagation()
      navItems.forEach(i => i.classList.remove("active"))
      e.target.classList.add("active")
    });

    navItem.addEventListener("mouseenter", ()=>{
      navItems.forEach(i => i.classList.remove("active"))
    });
  }

  document.body.addEventListener('click', function(ev) {
    navItems.forEach(i => i.classList.remove("active"))
  });
