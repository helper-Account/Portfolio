// start sidebar
let sidebar = document.querySelectorAll(".sidebar a")

sidebar.forEach(ele => {
    ele.onclick = function(){
        sidebar.forEach(ele => {
ele.classList.remove("active")
        })

        ele.classList.add("active")
    }
})

// End sidebar