<template>
  <div id="about">
    <div class="about-section">
      <div class="about-section-heading">About Us</div>
      <div class="content-box">
        <!-- TODO: Write the About Us content for Pause AI NYC.
             who we are, our mission, how people can get involved,
             and what makes the NYC chapter unique. Use <p> tags for paragraphs. -->
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
#about {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.about-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  .about-section-heading {
    font-size: 24px;
  }
}

.content-box {
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
p {
  color: #333;
  margin-bottom: 16px;
  font-size: 1em;
}

@media (max-width: 600px) {
  .about-section {
    .about-section-heading {
      font-size: 18px;
    }
  }
  .content-box {
    padding: 20px;
  }
}
</style>
