<template>
  <div>
    <section class="hero bg-hero grid grid-cols-2 md:px-12">
      <div class="hero-info py-16">
        <div class="flex">
          <h1 class="text-primary text-3xl font-bold">
            <span class="text-black text-4xl">"</span>Learn in-demand
            engineering skills<span class="text-black text-4xl">": </span>
          </h1>
          <img
            src="../assets/images/hero-sub.svg"
            alt="hero-sub"
            class="h-11 ms-3"
          />
        </div>
        <h1 class="text-black lg:text-3xl font-bold">
          Secure your future with MAT's expert-<br />
          led engineering courses
        </h1>
        <p class="text-black mt-5">
          You're a recent graduate, a working professional seeking to up-skill,
          MAT offers a range of industry-oriented programs crafted by experts
          with over 15 years of hands-on experience tailored to your needs.
        </p>
        <div class="flex md:mt-10">
          <button
            class="bg-black border h-11 px-11 border-black text-white rounded-md font-light text-sm"
          >
            Enroll Now
          </button>
          <NuxtLink to="#" class="flex items-center px-6 h-10 text-sm">
            <img
              src="../assets/images/watch.svg"
              alt="watch demo"
              class="h-4"
            />
            <p class="text-black ms-2">Watch Demo</p>
          </NuxtLink>
        </div>
        <div class="flex mt-4">
          <div class="w-40">
            <p class="font-semibold text-black text-2xl ms-5">500</p>
            <p class="text-left text-black text-sm">Course Enrolment</p>
          </div>
          <div class="w-40">
            <p class="font-semibold text-black text-2xl ms-5">90%</p>
            <p class="text-left text-black text-sm">Job Placement Rate</p>
          </div>
        </div>
      </div>

      <div class="hero-img flex">
        <img
          src="../assets/images/hero-img.svg"
          alt="hero bg"
          class="h-96 m-auto me-0"
        />
      </div>
    </section>
    <section class="courses md:p-12">
      <div class="grid md:grid-cols-2">
        <div class="md:col-span-8 text-sm">
          <h3 class="text-black text-2xl font-semibold">
            Our Essential Courses
          </h3>
          <p class="gray mb-8 mt-3 mb-9">
            Industry-oriented courses crafted by experts with over 15 years of
            hands on experience. Go <br />
            from beginner to expert within 6-10 months.
          </p>
        </div>
        <div class="schools flex md:col-span-8">
          <p
            class="text-sm border-2 border-gray-600 p-3 rounded-t-lg"
          >
            School of Engineering Technology
          </p>
          <p class="text-sm border-b-2 border-gray-200 p-3 rounded-t-lg">
            School of Computing Technology
          </p>
          <p class="text-sm border-b-2 border-gray-200 p-3 rounded-t-lg">
            School of Business
          </p>
        </div>
      </div>
      <div class="courses my-10">
        <div class="engineering-courses grid grid-cols-3 gap-x-20 mb-10">
          <div class="cssi-course blue-bg w-80 rounded-xl shadow-xl pt-4 pb-10">
            <img
              src="../assets/images/engineering.svg"
              alt="cssi course"
              class="h-16 mx-auto"
            />
            <p class="text-center text-xl font-semibold mt-5">
              MAT CSSI - Certificate in <br />
              SCADA System <br />
              Implementation & Integration
            </p>
            <div class="flex flex-col items-center">
              <div class="flex mt-8 mb-2">
                <img
                  src="../assets/images/check-black.svg"
                  alt="check"
                  class="me-3"
                />
                <h4 class="text-sm">6 months duration</h4>
              </div>
              <div class="flex">
                <img
                  src="../assets/images/check-black.svg"
                  alt="check"
                  class="me-3"
                />
                <h4 class="text-sm">5+ projects</h4>
              </div>
              <img
                src="../assets/images/Line-blue.svg"
                alt="line"
                class="w-52 mt-5"
              />
            </div>
            <div
              class="border border-gray-400 ps-5 pe-1 py-1 flex justify-between items-center w-40 rounded-3xl mx-auto mt-10 gray"
            >
              <h4 class="text-sm">Learn more</h4>
              <NuxtLink to="#" class="p-2 bg-black rounded-full">
                <img src="../assets/images/link-black.svg" alt="redirect" />
              </NuxtLink>
            </div>
          </div>
          <div class="cssi-course w-80 rounded-xl shadow-xl pt-4 pb-10">
            <img
              src="../assets/images/carbon.svg"
              alt="cssi course"
              class="h-16 mx-auto"
            />
            <p class="text-center text-xl font-semibold mt-5">
              MAT CSSI - Certificate in <br />
              SCADA System <br />
              Implementation & Integration
            </p>
            <div class="flex flex-col items-center">
              <div class="flex mt-8 mb-2">
                <img
                  src="../assets/images/check-black.svg"
                  alt="check"
                  class="me-3"
                />
                <h4 class="text-sm">6 months duration</h4>
              </div>
              <div class="flex">
                <img
                  src="../assets/images/check-black.svg"
                  alt="check"
                  class="me-3"
                />
                <h4 class="text-sm">5+ projects</h4>
              </div>
              <img
                src="../assets/images/Line-yellow.svg"
                alt="line"
                class="w-52 mt-5"
              />
            </div>
            <div
              class="border border-gray-400 ps-5 pe-1 py-1 flex justify-between items-center w-40 rounded-3xl mx-auto mt-10 gray"
            >
              <h4 class="text-sm">Learn more</h4>
              <NuxtLink to="#" class="p-2 bg-black rounded-full">
                <img src="../assets/images/link-black.svg" alt="redirect" />
              </NuxtLink>
            </div>
          </div>
          <div
            class="ciapp-course w-80 rounded-xl shadow-xl pt-4 pb-10 bg-black"
          >
            <img
              src="../assets/images/animation.svg"
              alt="ciapp course"
              class="h-16 mx-auto"
            />
            <p class="text-center text-white text-xl font-normal mt-5">
              MAT CIAPP - Certificate <br />
              in Industrial Automation <br />
              and PLC Programming
            </p>
            <div class="flex flex-col items-center">
              <div class="flex mt-8 mb-2">
                <img
                  src="../assets/images/check-white.svg"
                  alt="check"
                  class="me-3"
                />
                <h4 class="text-sm text-white">6 months duration</h4>
              </div>
              <div class="flex">
                <img
                  src="../assets/images/check-white.svg"
                  alt="check"
                  class="me-3"
                />
                <h4 class="text-sm text-white">5+ projects</h4>
              </div>
              <img
                src="../assets/images/Line-white.svg"
                alt="line"
                class="w-52 mt-5"
              />
            </div>
            <div
              class="border border-white ps-5 pe-1 py-1 flex justify-between items-center w-40 rounded-3xl mx-auto mt-10 gray"
            >
              <h4 class="text-sm text-white">Learn more</h4>
              <NuxtLink to="#" class="p-2 bg-white rounded-full">
                <img src="../assets/images/link-white.svg" alt="redirect" />
              </NuxtLink>
            </div>
          </div>
        </div>
        <!-- <div class="computing-courses">
              <div class="cssi-course border border-black p-8"></div>
            </div>
            <div class="business-courses">
              <div class="cssi-course border border-black p-8"></div>
            </div> -->
        <NuxtLink to="#">
          <p class="text-right me-1 underline underline-offset-3 font-semibold">
            Browse all
          </p>
        </NuxtLink>
      </div>
    </section>
    <section class="partners blue-bg md:p-12">
      <h3 class="text-black text-2xl font-semibold">
        Partnership for progress
      </h3>
      <p class="text-black mt-3 gray">
        Industry-oriented courses crafted by experts and companies with <br />
        over 15 years of hands on experience.
      </p>
      <button
        class="bg-black border h-11 px-11 border-black text-white rounded-md font-light text-sm mt-9"
      >
        Our Partners
      </button>
      <div class="grid grid-cols-1 mt-8">
        <img src="../assets/images/partners.svg" alt="Partners " />
      </div>
    </section>
    <section class="mission md:p-12 text-center">
      <h1 class="text-2xl font-semibold">Engineer a Bright Future</h1>
      <p class="text-sm gray mt-3 mb-8">
        Our mission is to empower aspiring engineers like you with the
        knowledge,<br />
        skills, and confidence to excel in the ever-evolving field of
        engineering.
      </p>
      <img
        src="../assets/images/All-cards.svg"
        alt="Cards"
        class="h-64 mx-auto"
      />
    </section>
    <section class="why-choose-us blue-bg px-12 pb-5 grid grid-cols-2">
      <div class="choose-info pt-8">
        <h1 class="text-2xl font-bold">
          Why choose <span class="text-primary">MAT</span>?
        </h1>
        <p class="text-sm mt-4 mb-10">
          All our certificate programs are built in partnership with the most
          innovative Engineering and tech companies and taught by industry
          experts with more than 15 years of experience. We are committed to
          providing you with a world-class education and gain skills that you
          can immediately apply in the workplace.
        </p>
        <div class="flex items-end my-5">
          <img src="../assets/images/Bullet-point (2).svg" alt="point" />
          <p class="ms-4 font-semibold">
            Learn from industry experts in real time and on demand.
          </p>
        </div>
        <div class="flex items-end my-5">
          <img src="../assets/images/Bullet-point (1).svg" alt="point" />
          <p class="ms-4 font-semibold">
            Get personalized career coaching with a mentor.
          </p>
        </div>
        <div class="flex items-end my-5">
          <img src="../assets/images/Bullet-point (2).svg" alt="point" />
          <p class="ms-4 font-semibold">
            Select a schedule that is convenient for you and fits your
            lifestyle.
          </p>
        </div>
        <div class="flex items-end my-5">
          <img src="../assets/images/Bullet-point (1).svg" alt="point" />
          <p class="ms-4 font-semibold">
            Gain hands-on experience you'll need for your first job.
          </p>
        </div>
        <div class="flex items-end my-5">
          <img src="../assets/images/Bullet-point (2).svg" alt="point" />
          <p class="ms-4 font-semibold">
            Get 1:1 career support so you graduate work-ready.
          </p>
        </div>
        <div class="flex items-end my-5">
          <img src="../assets/images/Bullet-point (1).svg" alt="point" />
          <p class="ms-4 font-semibold">
            Get skills and credentials sought after by employers worldwide
          </p>
        </div>
      </div>
      <div class="choose-img"></div>
    </section>
    <section class="skill-level skill-bg text-center md:p-12">
      <div class="flex justify-center">
        <p class="font-bold text-2xl">
          <span>Bothered about your skill level?</span>
        </p>
        <div>
          <p class="font-bold text-2xl ms-2">We got you!</p>
          <img
            src="../assets/images/skill-img.svg"
            alt="skill img"
            class="mx-auto"
          />
        </div>
      </div>
      <p class="gray text-sm mt-3 mb-6">
        Beginning from the scratch? No issue; we'll help you acquire the skills
        you'll need to stand out and land a job! <br />
        Already work ing in the sector but aspiring to the top? No problem, get
        one- -one assistance to break into the top 1%!
      </p>
      <div class="levels flex">
        <img
          src="../assets/images/levels.svg"
          alt="skill levels"
          class="h-80 mx-auto"
        />
      </div>
      <button
        class="bg-black h-11 px-11 border-black text-white rounded-md font-light text-sm mt-9"
      >
        Get a course
      </button>
    </section>
    <section class="media blue-bg md:p-12">
      <h3 class="text-black text-2xl font-semibold">
        What the media says about us
      </h3>
      <p class="text-black mt-3 gray">
        Check out what the media has to say about our impact to the society by
        creating a <br />
        trustworthy learning platform for young Africans.
      </p>
      <div class="grid grid-cols-1 mt-10">
        <img src="../assets/images/media.svg" alt="Media " />
      </div>
    </section>
    <section class="review md:p-12">
      <h3 class="text-black text-2xl font-semibold">
        What our learners are saying about us
      </h3>
      <p class="text-black text-sm mt-3 gray">
        500+ people are already learning on Madesoft Academy
      </p>
      <div class="cards mt-8 grid grid-cols-3">
        <div class="card border border-gray rounded w-80">
          <img
            src="../assets/images/user-one.svg"
            alt="user"
            class="h-24 ms-auto"
          />
          <div class="card-info pb-5 px-5">
            <img
              src="../assets/images/quotation-mark_pink.svg"
              alt="quotation-mark"
              class="h-8"
            />
            <p class="text-sm mt-3 mb-12">
              Lorem ipsum dolor sit amet consectetur. Nec vivamus lobortis
              placerat leo augue vulputate. Vulputate erat id pharetra nisl arcu
              ornare sollicitudin aliquam dignissim. Pretium lacinia sem
              malesuada nunc ultrices tristique leo. Sollicitudin in justo
              fringilla commodo nec eget nunc sed aliquam.
            </p>
            <p class="font-semibold text-normal italic">Domoh Edafe</p>
            <p class="text-sm mt-1">Full stack web developer</p>
          </div>
        </div>
        <div class="card border border-gray rounded w-80">
          <img
            src="../assets/images/user-two.svg"
            alt="user"
            class="h-24 ms-auto"
          />
          <div class="card-info pb-5 px-5">
            <img
              src="../assets/images/quotation-mark_blue.svg"
              alt="quotation-mark"
              class="h-8"
            />
            <p class="text-sm mt-3 mb-12">
              Lorem ipsum dolor sit amet consectetur. Nec vivamus lobortis
              placerat leo augue vulputate. Vulputate erat id pharetra nisl arcu
              ornare sollicitudin aliquam dignissim. Pretium lacinia sem
              malesuada nunc ultrices tristique leo. Sollicitudin in justo
              fringilla commodo nec eget nunc sed aliquam.
            </p>
            <p class="font-semibold text-normal italic">
              Ayegbe Adekunle Micheal
            </p>
            <p class="text-sm mt-1">Mobile application development</p>
          </div>
        </div>
        <div class="card border border-gray rounded w-80">
          <img
            src="../assets/images/user-one.svg"
            alt="user"
            class="h-24 ms-auto"
          />
          <div class="card-info pb-5 px-5">
            <img
              src="../assets/images/quotation-mark_black.svg"
              alt="quotation-mark"
              class="h-8"
            />
            <p class="text-sm mt-3 mb-12">
              Lorem ipsum dolor sit amet consectetur. Nec vivamus lobortis
              placerat leo augue vulputate. Vulputate erat id pharetra nisl arcu
              ornare sollicitudin aliquam dignissim. Pretium lacinia sem
              malesuada nunc ultrices tristique leo. Sollicitudin in justo
              fringilla commodo nec eget nunc sed aliquam.
            </p>
            <p class="font-semibold text-normal italic">Domoh Edafe</p>
            <p class="text-sm mt-1">Full stack web developer</p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="join-us border border-black h-64 md:m-12 bg-no-repeat bg-cover bg-center"
    >
      <div
        class="overlay h-full w-full bg-blue01 bg-opacity-80 flex flex-col justify-between items-center py-5"
      >
        <div class="text-center mt-5">
          <h1 class="text-white text-3xl font-semibold">
            Join Our Learners From Around The World
          </h1>
          <p class="text-white font-light mt-3">
            Effective learning starts with assessment. Learning a new skill
            <br />
            is hard work, our mentors at MAT makes it easier.
          </p>
        </div>
        <div class="flex mb-3">
          <button
            class="bg-transparent border border-white h-11 px-11 text-white rounded-md font-normal text-sm mt-3 me-5"
          >
            Get a Job
          </button>
          <button
            class="bg-white h-11 px-11 text-blue01 rounded-md font-semibold text-sm mt-3"
          >
            Get a course
          </button>
        </div>
      </div>
    </section>
    <section class="faqs grid grid-cols-2 md:p-12">
      <div class="faq">
        <h1 class="text-black font-semibold text-2xl">
          Frequently Asked Questions (FAQs)
        </h1>
        <Faq v-for="faq in faqs" :title="faq.title" :subhead="faq.subhead" />
      </div>
      <div class="faq-img md:text-right ms-auto">
        <img
          src="../assets/images/customer-rep.svg"
          alt="Customer Rep"
          class="h-96"
        />
        <p>Don't know the path that is right for you?</p>
        <button
          class="bg-blue01 h-11 px-11 text-white rounded-md font-light text-sm mt-3"
        >
          Get In Touch
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
const faqs = [
  {
    title: "How much time do i need to complete a course?",
    subhead:
      " Lorem ipsum dolor sit amet consectetur. Porta pulvinar vel bibendum sit id lorem aliquet posuere ipsum. Ullamcorper semper proin mattis accumsan nulla faucibus lobortis sed., ",
  },
  {
    title: "Can i take my classes online?",
    subhead:
      " Lorem ipsum dolor sit amet consectetur. Porta pulvinar vel bibendum sit id lorem aliquet posuere ipsum. Ullamcorper semper proin mattis accumsan nulla faucibus lobortis sed., ",
  },
  {
    title: "Are there any conditions attached to scholarship opportunities?",
    subhead:
      " Lorem ipsum dolor sit amet consectetur. Porta pulvinar vel bibendum sit id lorem aliquet posuere ipsum. Ullamcorper semper proin mattis accumsan nulla faucibus lobortis sed., ",
  },
  {
    title: "Can i register even though i am not in Nigeria?",
    subhead:
      " Lorem ipsum dolor sit amet consectetur. Porta pulvinar vel bibendum sit id lorem aliquet posuere ipsum. Ullamcorper semper proin mattis accumsan nulla faucibus lobortis sed., ",
  },
];
</script>

<style>
.blue-bg {
  background: #fbfbff;
}
.gray {
  color: #373737;
}
.lightgray {
  color: #7c7c7c;
}
.blue {
  background: #081f54;
}
/* .hero-img {
  background-image: url(../assets/images/hero-bg.svg);
  background-position: ;
  background-size: cover;
  background-repeat: no-repeat;
  border: 1px solid red;
} */
.skill-bg {
  background-image: url(../assets/images/skill-bg.svg);
  background-repeat: no-repeat;
}
.skill-level span {
  background: linear-gradient(to bottom, #fff 3%, #7c7c7c 90%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
.join-us {
  background-image: url(../assets/images/joinbg.svg);
}
</style>