<template>
  <div id="home">
    <svg class="orange-circle" width="200" height="200" viewBox="0 0 120 120">
      <defs>
        <filter id="rect-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <clipPath id="rect-clip">
          <rect x="27.5" y="27.5" width="45" height="25" rx="5" transform="rotate(5, 50, 40)" />
        </clipPath>
        <clipPath id="rect-clip-90">
          <rect x="27.5" y="27.5" width="35" height="25" rx="5" transform="translate(0, 33) rotate(85, 50, 40)" />
        </clipPath>
      </defs>
      <circle cx="60" cy="60" r="60" fill="#FF8C00" />
      <!-- 3D isometric tire (right) -->
      <g transform="translate(70, 85) rotate(-90)">
        <!-- Bottom ellipse (outer) -->
        <ellipse cx="0" cy="0" rx="15" ry="6" fill="#333333" />
        <!-- Tire body (sidewall) -->
        <rect x="-15" y="-12" width="30" height="12" fill="#333333" />
        <!-- Tread grooves on sidewall -->
        <line x1="-14" y1="3" x2="-14" y2="-10" stroke="#222222" stroke-width="1" />
        <line x1="-10" y1="5" x2="-10" y2="-11" stroke="#222222" stroke-width="1" />
        <line x1="-5" y1="6" x2="-5" y2="-12" stroke="#222222" stroke-width="1" />
        <line x1="0" y1="6.5" x2="0" y2="-12" stroke="#222222" stroke-width="1" />
        <line x1="5" y1="6" x2="5" y2="-12" stroke="#222222" stroke-width="1" />
        <line x1="10" y1="4.8" x2="10" y2="-11" stroke="#222222" stroke-width="1" />
        <line x1="14" y1="2.8" x2="14" y2="-10" stroke="#222222" stroke-width="1" />
        <!-- Top ellipse (tread surface) -->
        <ellipse cx="0" cy="-12" rx="15" ry="6" fill="#444444" />
      </g>
      <g clip-path="url(#rect-clip-90)">
        <rect x="27.5" y="27.5" width="45" height="25" rx="5" fill="#FFFFFF" transform="translate(0, 33) rotate(85, 50, 40)" />
        <rect x="29.5" y="29.5" width="41" height="21" fill="#444444" filter="url(#rect-blur)" transform="translate(0, 33) rotate(85, 50, 40)" />
      </g>
      <g transform="translate(-2, 0.5)" clip-path="url(#rect-clip)">
        <rect x="27.5" y="27.5" width="45" height="25" rx="5" fill="#FFFFFF" transform="rotate(5, 50, 40)" />
        <rect x="29.5" y="29.5" width="41" height="21" fill="#444444" filter="url(#rect-blur)" transform="rotate(5, 50, 40)" />
        <rect x="30" y="30" width="40" height="20" rx="5" fill="#000000" transform="rotate(5, 50, 40)" />
        <rect x="42" y="35" width="3" height="3" fill="#00FFFF" transform="rotate(5, 50, 40)" />
        <rect x="55" y="35" width="3" height="3" fill="#00FFFF" transform="rotate(5, 50, 40)" />
        <rect x="50.5" y="41" width="1.5" height="1.5" fill="#00FFFF" transform="rotate(5, 50, 40)" />
        <rect x="48.5" y="41" width="1.5" height="1.5" fill="#00FFFF" transform="rotate(5, 50, 40)" />
        <rect x="52.5" y="43" width="1.5" height="1.5" fill="#00FFFF" transform="rotate(5, 50, 40)" />
        <rect x="46.5" y="43" width="1.5" height="1.5" fill="#00FFFF" transform="rotate(5, 50, 40)" />
        <rect x="52.5" y="45" width="1.5" height="1.5" fill="#00FFFF" transform="rotate(5, 50, 40)" />
        <rect x="46.5" y="45" width="1.5" height="1.5" fill="#00FFFF" transform="rotate(5, 50, 40)" />
        <rect x="50.5" y="47" width="1.5" height="1.5" fill="#00FFFF" transform="rotate(5, 50, 40)" />
        <rect x="48.5" y="47" width="1.5" height="1.5" fill="#00FFFF" transform="rotate(5, 50, 40)" />
      </g>


      <!-- 3D isometric tire -->
      <g transform="translate(42, 85) rotate(-90)">
        <!-- Bottom ellipse (outer) -->
        <ellipse cx="0" cy="0" rx="15" ry="6" fill="#333333" />
        <!-- Tire body (sidewall) -->
        <rect x="-15" y="-12" width="30" height="12" fill="#333333" />
        <!-- Tread grooves on sidewall -->
        <line x1="-14" y1="3" x2="-14" y2="-10" stroke="#222222" stroke-width="1" />
        <line x1="-10" y1="5" x2="-10" y2="-11" stroke="#222222" stroke-width="1" />
        <line x1="-5" y1="6" x2="-5" y2="-12" stroke="#222222" stroke-width="1" />
        <line x1="0" y1="6.5" x2="0" y2="-12" stroke="#222222" stroke-width="1" />
        <line x1="5" y1="6" x2="5" y2="-12" stroke="#222222" stroke-width="1" />
        <line x1="10" y1="4.8" x2="10" y2="-11" stroke="#222222" stroke-width="1" />
        <line x1="14" y1="2.8" x2="14" y2="-10" stroke="#222222" stroke-width="1" />
        <!-- Top ellipse (tread surface) -->
        <ellipse cx="0" cy="-12" rx="15" ry="6" fill="#444444" />
        <!-- Hub/rim (inner hole) -->
        <ellipse cx="0" cy="-12" rx="6" ry="2.5" fill="#888888" />
        <ellipse cx="0" cy="-12" rx="3" ry="1.2" fill="#aaaaaa" />
      </g>

      <!-- Dust cloud behind tire -->
      <g transform="translate(17, 5)" opacity="0.6">
        <circle cx="55" cy="95" r="5" fill="#ccccaa" />
        <circle cx="62" cy="92" r="4" fill="#ccccaa" />
        <circle cx="60" cy="98" r="3.5" fill="#bbbb99" />
        <circle cx="68" cy="95" r="3" fill="#bbbb99" />
        <circle cx="66" cy="89" r="2.5" fill="#aaaa88" />
        <circle cx="73" cy="93" r="2" fill="#aaaa88" />
        <circle cx="70" cy="99" r="2.5" fill="#aaaa88" />
        <circle cx="76" cy="97" r="1.5" fill="#999977" />
        <circle cx="78" cy="91" r="1.5" fill="#999977" />
      </g>

      <g transform="translate(-10, 5)" opacity="0.6">
        <circle cx="55" cy="95" r="5" fill="#ccccaa" />
        <circle cx="62" cy="92" r="4" fill="#ccccaa" />
        <circle cx="60" cy="98" r="3.5" fill="#bbbb99" />
        <circle cx="68" cy="95" r="3" fill="#bbbb99" />
        <circle cx="66" cy="89" r="2.5" fill="#aaaa88" />
        <circle cx="73" cy="93" r="2" fill="#aaaa88" />
        <circle cx="70" cy="99" r="2.5" fill="#aaaa88" />
        <circle cx="76" cy="97" r="1.5" fill="#999977" />
        <circle cx="78" cy="91" r="1.5" fill="#999977" />
      </g>

      <g transform="translate(20, 20) rotate(-15)" id="yield-sign">
        <rect x="58" y="49" width="4" height="25" rx="1" fill="#666666" />
        <polygon points="60,18.6 78,49.4 42,49.4" fill="none" stroke="#666666" stroke-width="6" stroke-linejoin="round" />
        <polygon points="60,18.6 78,49.4 42,49.4" fill="#FFD700" stroke="#FFD700" stroke-width="4" stroke-linejoin="round" />
        <text x="60.5" y="40.95" text-anchor="middle" font-size="5" font-weight="bold" font-family="'Press Start 2P', 'Courier New', monospace" fill="#333333">PAUSE</text>
        <text x="60" y="48" text-anchor="middle" font-size="5" font-weight="bold" font-family="'Press Start 2P', 'Courier New', monospace" fill="#333333">AI</text>
      </g>
    </svg>
    <div class="home-section">
      <div class="home-section-heading">First, help us out!</div>
      <LinkTree/>
    </div>
    <div class="home-section">
      <div class="home-section-heading">Or, learn more about our cause</div>
      <div class="content-box">
        <p>Pause AI NYC is a regional chapter of <a href="https://www.pauseai-us.org/" target="_blank" rel="noopener noreferrer">Pause AI US</a>, a 501(c)3 organization advocating for a global pause on developing cutting-edge AI models until their safety can be guaranteed.</p>
        <p class="proposal">
          <strong>Our proposal is simple:</strong><br>
          Don't build powerful AI systems until we know how to keep them safe. Pause AI.
        </p>
        <p>Surveys of thousands of AI researchers estimate a <a href=https://aiimpacts.org/wp-content/uploads/2024/01/EMBARGOED_-AI-Impacts-Survey-Release-Google-Docs.pdf target="_blank" rel="noopener noreferrer">1 in 6 chance of human extinction</a> from uncontrollable, superintelligent AI. Uncontrollable, superintelligent is exactly where we are headed if the AI industry gets its way. There are almost no guardrails for the development of frontier AI. AI companies are allowed to train models of any size, without knowledge or concern for what dangers they may pose. Some AI company CEOs have admitted there's a chance their technology destroys humanity – but they're willing to roll the dice anyway.</p>
        <p>We advocate international cooperation to ensure that no company or country builds unsafe AI, giving us the time and the democratic oversight necessary to develop frontier AI safely. We suggest regulating the chips that are necessary to train and run the most powerful AI, pausing training runs above a threshold of computing power (<a href=https://drive.google.com/file/d/1LbQgcz_aehcnhFMupCtXqoR-BV5dX5Rv/view target="_blank" rel="noopener noreferrer">read more technical details of how this could work</a>), but there are many draft treaties and mechanism compatible with pause.</p>
        <p>If we Pause AI, we can enjoy the benefits of the safe AI systems below the Pause threshold while we have the time to work to ensure that it's safe to build even more powerful systems that could be even more beneficial.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import LinkTree from '@/components/LinkTree.vue'
</script>

<style scoped lang="scss">
#home {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.orange-circle {
  position: absolute;
  top: 20px;
  right: 20px;
  pointer-events: none;
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
.proposal {
  color: #e74c3c;
  font-size: 1.1em;
  margin-bottom: 20px;
}
.proposal strong {
  font-weight: 600;
}

@media (max-width: 600px) {
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
