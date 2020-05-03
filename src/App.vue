<template>
  <div id="app">
    <div class="app-logo">
      <img src="./static/assets/logo-acnh-en.png" alt="acnh-logo" />
    </div>
    <div class="app-wrapper">
      <div id="nav">
        <router-link to="/" class="nav-link">Home</router-link>|
        <router-link to="/flowers" class="nav-link">Flowers</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-image: url("./static/assets/leaf_bg.png");
}

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  max-width: 800px;
  margin: 150px auto 50px;
  background: #fff8e1;
  border: 12px solid #795548;
  border-radius: 80px;
  min-height: 500px;
}

.app-wrapper {
  margin: 150px 50px;
}

.app-logo {
  position: absolute;
  top: -150px;
  left: 50%;
  transform: translateX(-50%);
}

#nav {
  text-align: center;
  margin-bottom: 35px;
}

.nav-link {
  color: #37474f;
  text-decoration: none;
  font-weight: 900;
  font-size: 1.15em;
  position: relative;
  margin: 0 8px;
  padding-bottom: 5px;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  /* transform: translateX(0); */
  border: 3px solid transparent;
  transition: 0.5s all ease-in-out;
}

.nav-link:hover {
  color: #546e7a;
}

.nav-link:hover::after {
  border-color: #ff6d00;
  width: 100%;
  /* transform: translateX(1); */
}

.router-link-exact-active::after {
  width: 100%;
  border-color: #ff6d00;
}
</style>
