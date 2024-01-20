<?php
session_start();
include("../db/config.php");
if(isset($_SESSION["username"])){
    $sess = $_SESSION['username'];
    $result = mysqli_query($conn, "SELECT * FROM `user` WHERE username='$sess'");
    if($result) {
        $row = mysqli_fetch_array($result);
        $level = $row['level'];
        if ($level != 1) {
            exit();
        }
    } else {
        echo "Error: " . mysqli_error($conn);
    }
} else {
    header('location: /dang-nhap.html');
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <!-- Primary Meta Tags -->
    <title>Thêm Thể Loại | Phimhay247.Net</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="120x120" href="assets/img/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon/favicon-16x16.png">
    <link rel="manifest" href="assets/img/favicon/site.webmanifest">
    <link rel="mask-icon" href="assets/img/favicon/safari-pinned-tab.svg" color="#ffffff">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">
    <link type="text/css" href="vendor/sweetalert2/dist/sweetalert2.min.css" rel="stylesheet">
    <link type="text/css" href="vendor/notyf/notyf.min.css" rel="stylesheet">
    <link type="text/css" href="css/volt.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>
<nav class="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
    <a class="navbar-brand me-lg-5" href="index.html">
      <img class="navbar-brand-dark" src="assets/img/brand/light.svg" alt="Volt logo" /> <img
        class="navbar-brand-light" src="assets/img/brand/dark.svg" alt="Volt logo" />
    </a>
    <div class="d-flex align-items-center">
      <button class="navbar-toggler d-lg-none collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>

  <nav id="sidebarMenu" class="sidebar d-lg-block bg-gray-800 text-white collapse" data-simplebar>
    <div class="sidebar-inner px-4 pt-3">
      <div class="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
        <div class="d-flex align-items-center">
          <div class="avatar-lg me-4">
            <img src="assets/img/team/profile-picture-3.jpg" class="card-img-top rounded-circle border-white"
              alt="Bonnie Green">
          </div>
          <div class="d-block">
            <h2 class="h5 mb-3">Hi, Jane</h2>
            <a href="pages/examples/sign-in.html" class="btn btn-secondary btn-sm d-inline-flex align-items-center">
              <svg class="icon icon-xxs me-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
              Sign Out
            </a>
          </div>
        </div>
        <div class="collapse-close d-md-none">
          <a href="#sidebarMenu" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu"
            aria-expanded="true" aria-label="Toggle navigation">
            <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
      <ul class="nav flex-column pt-3 pt-md-0">
        <li class="nav-item">
          <a href="index.html" class="nav-link d-flex align-items-center">
            <span class="sidebar-icon">
              <img src="assets/img/brand/light.svg" height="20" width="20" alt="Volt Logo">
            </span>
            <span class="mt-1 ms-1 sidebar-text">Volt Overview</span>
          </a>
        </li>
        <li class="nav-item ">
          <a href="/" class="nav-link">
            <span class="sidebar-icon">
              <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
            </span>
            <span class="sidebar-text">Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="add_film.php" class="nav-link">
            <span class="sidebar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
              <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"/>
            </svg>
            </span>
            <span class="sidebar-text">Add New Film</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="admin/add_category.php" class="nav-link">
            <span class="sidebar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-plus" viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4"/>
            </svg>
            </span>
            <span class="sidebar-text">Add Category</span>
          </a>
        </li>
        <li class="nav-item">
          <span class="nav-link  collapsed  d-flex justify-content-between align-items-center" data-bs-toggle="collapse"
            data-bs-target="#submenu-app">
            <span>
              <span class="sidebar-icon">
                <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"></path>
                </svg>
              </span>
              <span class="sidebar-text">Tables</span>
            </span>
            <span class="link-arrow">
              <svg class="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
            </span>
          </span>
          <div class="multi-level collapse " role="list" id="submenu-app" aria-expanded="false">
            <ul class="flex-column nav">
              <li class="nav-item ">
                <a class="nav-link" href="pages/tables/bootstrap-tables.html">
                  <span class="sidebar-text">Bootstrap Tables</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <span class="nav-link  collapsed  d-flex justify-content-between align-items-center" data-bs-toggle="collapse"
            data-bs-target="#submenu-pages">
            <span>
              <span class="sidebar-icon">
                <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clip-rule="evenodd"></path>
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                </svg>
              </span>
              <span class="sidebar-text">Page examples</span>
            </span>
            <span class="link-arrow">
              <svg class="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
            </span>
          </span>
          <div class="multi-level collapse " role="list" id="submenu-pages" aria-expanded="false">
            <ul class="flex-column nav">
              <li class="nav-item">
                <a class="nav-link" href="pages/examples/sign-in.html">
                  <span class="sidebar-text">Sign In</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pages/examples/sign-up.html">
                  <span class="sidebar-text">Sign Up</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pages/examples/forgot-password.html">
                  <span class="sidebar-text">Forgot password</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pages/examples/reset-password.html">
                  <span class="sidebar-text">Reset password</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pages/examples/lock.html">
                  <span class="sidebar-text">Lock</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pages/examples/404.html">
                  <span class="sidebar-text">404 Not Found</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pages/examples/500.html">
                  <span class="sidebar-text">500 Not Found</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <span class="nav-link  collapsed  d-flex justify-content-between align-items-center" data-bs-toggle="collapse"
            data-bs-target="#submenu-components">
            <span>
              <span class="sidebar-icon">
                <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
                  <path fill-rule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clip-rule="evenodd"></path>
                </svg>
              </span>
              <span class="sidebar-text">Components</span>
            </span>
            <span class="link-arrow">
              <svg class="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
            </span>
          </span>
          <div class="multi-level collapse " role="list" id="submenu-components" aria-expanded="false">
            <ul class="flex-column nav">
              <li class="nav-item">
                <a class="nav-link" target="_blank"
                  href="https://themesberg.com/docs/volt-bootstrap-5-dashboard/components/accordions/">
                  <span class="sidebar-text">All Components</span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="pages/components/buttons.html">
                  <span class="sidebar-text">Buttons</span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="pages/components/notifications.html">
                  <span class="sidebar-text">Notifications</span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="pages/components/forms.html">
                  <span class="sidebar-text">Forms</span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="pages/components/modals.html">
                  <span class="sidebar-text">Modals</span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="pages/components/typography.html">
                  <span class="sidebar-text">Typography</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li role="separator" class="dropdown-divider mt-4 mb-3 border-gray-700"></li>
      </ul>
    </div>
  </nav>