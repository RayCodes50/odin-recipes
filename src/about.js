import imgOurStory from "./assets/1695292538-our-story-image.webp";
import imgOurStoryFood from "./assets/1695292826-our-food-image.webp";
const aboutMenu = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.innerHTML = `

      <div class="storyWrap">
    <div class='middle'>
        <p>about</p>
        <p>wagamama</p>
      </div>
        <p class="story_h2">our story</p>
        <p>
          a celebration of asian food inspired by fast-paced, japanese ramen
          bars, wagamama burst into life in 1992. when we first opened our doors
          in london’s bloomsbury, we were on a mission to create a unique way of
          eating. bringing the fresh, nourishing, flavours of asia to all on our
          communal benches
        </p>
        <p>
          that was over 30 years ago now. three whole decades to sharpen skills
          and refine recipes. and three whole decades for you, our guests, to
          join us on our journey, enjoying everything our asian-inspired
          experience has to offer
        </p>
        <p>
          and now, the journey continues, as we keep playing with spices,
          discovering fresh tastes, and welcoming more and more of you each and
          every day
        </p>
        <div class="img_wrap">
          <figure class="container">
            <img src="${imgOurStory}" alt="" />
            <figcaption>photographer: ewen spencer</figcaption>
          </figure>
        </div>
        <p class="story_h2">our food</p>
        <p>
          created to ignite the senses, every dish we serve is packed with the
          mouth-watering flavours, fragrances, and spices of cuisines across
          asia
        </p>
        <p>
          spices, sauces, and steaming broths to bring the heat. fresh, crunchy
          vegetables to pack in those vital vitamins. silky noodles and sticky
          rice to fuel and fill you. quality proteins like meat, tofu and fish
          to sustain you. and textures to crunch, snap and slurp. whatever you
          order, everything is fresh: prepared by our chefs in our open kitchen
          and served as soon as its ready. so it's still streaming and at its
          best. just like we've always done it
        </p>

        <div class="img_wrap">
          <figure class="container">
            <img src="${imgOurStoryFood}" alt="" />
            <figcaption>photographer: ewen spencer</figcaption>
          </figure>
        </div>
      </div>`;
};

export { aboutMenu };
