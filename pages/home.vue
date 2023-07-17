<template>
  <div>
    <section class="hero bg-hero grid grid-cols-2 md:px-12">
      <div class="hero-info py-14">
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
        <img src="../assets/images/hero-bg.svg" alt="hero bg" class="m-auto" />
      </div>
    </section>
    <!-- <section class="courses md:px-12">
      <h3 class="text-black text-2xl font-semibold">Our Essential Courses</h3>
      <p class="text-black mb-8">
        Industry-oriented courses crafted by experts with over 15 years of hands
        on experience. Go <br />
        from beginner to expert within 6-10 months.
      </p>
      <div class="schools"></div>
    </section> -->
    <section class="partners partner-bg py-12 md:px-12">
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
    <section class="media media-bg py-12 md:px-12">
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
    <section class="faqs grid grid-cols-2 px-12">
      <div class="faq border border-black">
        <h1 class="text-black font-semibold text-2xl">
          Frequently Asked Questions (FAQS)
        </h1>
      </div>
      <div class="faq-img border border-black"></div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
.partner-bg,
.media-bg {
  background: #fbfbff;
}
.gray {
  color: #373737;
}
.blue {
  background: #081f54;
}
</style>