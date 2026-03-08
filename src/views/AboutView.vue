<template>
  <div id="about">
    <div class="about-section">
      <div class="about-section-heading">About Us</div>
      <div class="content-text">
        <p>Welcome to our site! We are so excited for you to be here, we have so much to tell you about!</p>
        <p>While the <a href="https://pauseai.info/about">international PauseAI organization started in the Netherlands in May 2023</a>, our NYC-specific group started around Summer of 2025. There was another iteration of the NYC group in 2024 (prior to the current leadership team), but the old group dissolved when the primary lead had to move away from the city.</p>
        <p>So who are we? We are NYC residents, inhabitants, and folks from the surrounding area who all share a concern about AI safety, and <u>are willing to do something about it</u>. Our leaders and members come from a variety of backgrounds including (but not limited to) software engineering, teachering, web development, political organizing, AI research, art, film and more! There is no pre-requisite to join! </p>
        <p>Our local group is growing quickly, and we would love to see you join us.</p>
      </div>
      <div class="about-section-heading">What We Do</div>
      <div class="content-text">
        <p>We discuss and advocate for AI safety at multiple levels. We have group discussions at our general meetings, we call our representatives, and we canvass on the streets of NYC! We advocate for a global treaty on AI development, along with domestic state and federal-level legislation that promotes safety in the AI industry. We actually got a win recently at the NY state level with the recent passage of the <a href="https://www.nysenate.gov/legislation/bills/2025/A6453/amendment/A">RAISE Act</a>. This bill (while weaker than we would have hoped) serves as a huge milestone for AI regulation in the USA, being only the second bill of its kind nationwide (the other one being the <a href="https://legiscan.com/CA/text/SB53/id/3041703">California bill SB 53</a>). Our NYC group made hundreds of phone calls to the Governor's office to move the needle and make that possible. If you want to make <i>real</i> change on this issue, we are the group to join.</p>
        <p>We meet in real life!! Here is a photo from our last general meeting:</p>
        <img src="@/assets/pai-general-2026-03-07-172157.jpeg" alt="Pause AI NYC group photo" style="width: 100%; border-radius: 8px;" />
        <p>But we also do other things like canvassing and interviewing people in parks across the city! Look out for our upcoming street interviews on our social media :) here is a pic from our last interview shoot:</p>
        <img src="@/assets/pai-interview-2026-02-16-165820.jpeg" alt="Pause AI NYC interview" style="width: 100%; border-radius: 8px;" />
        <p>Washington Square Park is so beautiful this time of year.</p>
        <img src="@/assets/washington-square-2026-02-16-152013.jpeg" alt="Washington Square Park" style="width: 100%; border-radius: 8px;" />
        <p>But don't worry the weather is getting warmer and we are going to be out <u>every week</u>, and I wanna see <u><i>you</i></u> there!</p>
      </div>
      <div class="about-section-heading">Additional Fun Photos</div>
      <div class="content-text">
        <p>Here is us getting pizza:</p>
        <img src="@/assets/pizza-2.jpg" alt="pizza pic" style="width: 100%; border-radius: 8px;" />
        <p>Here is a picture from our last general meeting in February (please ignore the Halloween decorations, they give us a spooky vibe and we didnt just totally forget to take them down):</p>
        <img src="@/assets/pai-general-feb.jpg" alt="General Feb" style="width: 100%; border-radius: 8px;" />

        <p>Here another amazin' photo of us eating pizza. We just do this sometimes for fun or if we are hungry. Not an official club event, but you know what they say; "It's Pizza!":</p>
        <img src="@/assets/pizza-2026-02-07-195351.jpeg" alt="General Feb" style="width: 100%; border-radius: 8px;" />
        <p>Finally I will leave you with the most beautiful creature that I know. The cat named Sunny <3<3<3 </p>
        <img src="@/assets/sunny-pic.jpg" alt="General Feb" style="width: 100%; border-radius: 8px;" />
        <!-- TODO: Write the About Us content for Pause AI NYC.
             who we are, our mission, how people can get involved,
             and what makes the NYC group unique. Use <p> tags for paragraphs. -->
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
.what-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  .what-section-heading {
    font-size: 24px;
  }
}

.content-text {
  background-color: rgba(255, 255, 255, 0.9);
  border: 0px solid #ddd;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
}
p {
  color: #333;
  margin-bottom: 16px;
  font-size: 1em;
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
