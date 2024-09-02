// Potential Personal Ticket History JS for the SRV Ticketing Solution by Zunga Siakalima

// Sidebar Toggle Function
var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar () {
    if(!sidebarOpen){
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar () {
    if(!sidebarOpen){
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = false;
    }
}

//JS Table Script
new DataTable('#example');