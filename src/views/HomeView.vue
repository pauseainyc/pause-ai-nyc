<template>
  <div class="home">
    <h1>Welcome!</h1>
    <h3>This website is under construction.</h3>
    <img src="@/assets/hammer.gif"/>
    <div class="links">
      <a href="https://www.pauseai-us.org/">
        <button class="link-button">
          Pause AI National Site
        </button>
      </a>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: block;
  gap: 16px;
  margin: 32px;
  text-align: center;
  img {
    margin: 16px;
  }
}
.link-button {
  background: green;
  border: 1px solid black;
  border-radius: 3px;
  padding: 8px;
  cursor: pointer;
}
.link-button:hover {
  background: blue;
}
</style>
