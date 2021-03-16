$(document).ready(function(){
    $("#trg-sidebar").click(function(){
        openSidebar();
    });

    $("#trg-sidebar-close").click(function(){
        closeSidebar();
    });

    
});

let openSidebar = () => {
    document.querySelector(".sidebar").classList.add("open");
}

let closeSidebar = () => {
    document.querySelector(".sidebar").classList.remove("open");
} 