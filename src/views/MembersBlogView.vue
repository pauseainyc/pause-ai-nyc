<template>
  <div id="members-blog">
    <div class="section">
      <div class="section-heading">Members Blog</div>
      <div class="section-content">
        <p>Coming soon!</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#members-blog {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  text-align: left;
  line-height: 1.6;
  margin: 0 auto;
}
.section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
  .section-heading {
    font-size: 24px;
  }
  .section-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 12px;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
    margin: 0 16px;
  }
}

@media (max-width: 600px) {
  .section {
    .section-heading {
      font-size: 18px;
    }
  }
}
</style>
