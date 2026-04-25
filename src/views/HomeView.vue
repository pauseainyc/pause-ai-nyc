<template>
  <div id="home">
    <div class="home-top">
      <div class="home-section" id="get-involved">
        <div class="home-section-heading">Get involved!</div>
        <LinkTree/>
      </div>
      <div class="calendar-section">
        <div class="home-section-heading">Upcoming events</div>
          <iframe src="https://calendar.google.com/calendar/embed?height=200&wkst=1&ctz=America%2FNew_York&showPrint=0&mode=AGENDA&src=MmI2YjJlNTMzMGQ1NDlhZDc0ZGJmYjIxMGM1YTI5YTY4ZWU4NWY0ZDU0ZjAwMmYwY2QyZGE2OWRiOTJlOWJkNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23b39ddb" style="border:solid 1px #777" width="550" height="200" frameborder="0" scrolling="no"></iframe>
      </div>
    </div>
    <div class="home-section" id="learn-more">
      <div class="home-section-heading">Or, learn more about our cause</div>
      <div class="content-box">
        <p class="proposal">
          <strong>We Have the Power to Create a Human Centered Future!</strong>
        </p>
        <p>70% of Americans want to pause or slow down dangerous AI development, but AI companies are racing to build a technology that could cause mass unemployment, catastrophic accidents, and even human extinction. Most people agree superhuman AI is dangerous. We organize to stop it. </p>
        <p>
          <strong>Join us to protect the world from dangerous AI and create a future worth living in.</strong>
        </p>
        <img class="doodle-divider" src="/icons/doodle-hr.svg" alt="" />
        <p>PauseAI NYC is a regional group of <a href="https://www.pauseai-us.org/" target="_blank" rel="noopener noreferrer">PauseAI US</a>, a 501(c)3 organization advocating for a global pause on developing cutting-edge AI models until their safety can be guaranteed.</p>
        <!-- <p class="proposal">
          <strong>Our proposal is simple:</strong><br>
          Don't build powerful AI systems until we know how to keep them safe. Pause AI.
        </p>
        <p>Surveys of thousands of AI researchers estimate a <a href=https://aiimpacts.org/wp-content/uploads/2024/01/EMBARGOED_-AI-Impacts-Survey-Release-Google-Docs.pdf target="_blank" rel="noopener noreferrer">1 in 6 chance of human extinction</a> from uncontrollable, superintelligent AI. Uncontrollable, superintelligent is exactly where we are headed if the AI industry gets its way. There are almost no guardrails for the development of frontier AI. AI companies are allowed to train models of any size, without knowledge or concern for what dangers they may pose. Some AI company CEOs have admitted there's a chance their technology destroys humanity – but they're willing to roll the dice anyway.</p>
        <p>We advocate international cooperation to ensure that no company or country builds unsafe AI, giving us the time and the democratic oversight necessary to develop frontier AI safely. We suggest regulating the chips that are necessary to train and run the most powerful AI, pausing training runs above a threshold of computing power (<a href=https://drive.google.com/file/d/1LbQgcz_aehcnhFMupCtXqoR-BV5dX5Rv/view target="_blank" rel="noopener noreferrer">read more technical details of how this could work</a>), but there are many draft treaties and mechanism compatible with pause.</p>
        <p>If we Pause AI, we can enjoy the benefits of the safe AI systems below the Pause threshold while we have the time to work to ensure that it's safe to build even more powerful systems that could be even more beneficial.</p> -->
      </div>
    </div>
  </div>
</template>

<script setup>
  import LinkTree from '@/components/LinkTree.vue'
</script>

<style scoped lang="scss">
#home {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.home-top {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}
.calendar-section {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  iframe {
    max-width: 100%;
  }
}
.home-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  .home-section-heading {
    font-size: 24px;
  }
}

.content-box {
  padding: 32px;
  border-style: solid;
  border-width: 10px;
  border-image: url(/border-large.svg) 10 10 10 10 stretch stretch;
  background: white;
  border-radius: 10px;
}
p {
  color: #333;
  margin-bottom: 16px;
  font-size: 1em;
}
.proposal {
  color: #e74c3c;
  font-size: 1.1em;
  margin-bottom: 20px;
}
.proposal strong {
  font-weight: 600;
}

.doodle-divider {
  display: block;
  width: 60%;
  margin: 16px auto;
  opacity: 0.6;
}

@media (max-width: 768px) {
  .home-top {
    flex-direction: column;
  }
  .home-section {
    .home-section-heading {
      font-size: 18px;
    }
  }
  .content-box {
    padding: 20px;
  }
}
</style>
