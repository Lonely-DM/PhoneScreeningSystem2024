// SidebarToggle.js

let sidebarOpen = false;
const sidebar = document.getElementById("sidebar");

export function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

export function closeSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = false;
  }
}
