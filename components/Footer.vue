<template>
  <footer class="bg-footer flex flex-col pt-12">
    <div class="px-12">
      <img
        src="../assets/images/footer-logo.svg"
        alt="logo"
        class="footer-logo w-32"
      />
      <p class="mt-3 mb-8 text-sm text-gray02 w-1/3">
        Madesoft Academy prepares students for fulfilling and rewarding careers
        in the engineering, and tech space
      </p>
      <div class="mb-10 grid grid-cols-[4fr,8fr]">
        <div class="pt-6">
          <p class="flex mb-4 text-gray01 text-sm">
            <img
              src="../assets/images/locator.svg"
              alt="locator"
              class="me-3 info"
            />813, Rev Emmanuel Adubifia, Omole Phase 2 Lagos Nigeria
          </p>
          <p class="flex mb-4 text-gray01 text-sm">
            <img
              src="../assets//images/email.svg"
              alt="email"
              class="me-3 info"
            />
            Admin@madesofacademy.com
          </p>
          <p class="flex mb-4 text-gray01 text-sm">
            <img
              src="../assets/images/cellphone.svg"
              alt="cellphone"
              class="me-3 info"
            />
            +234 (0) 81697403
          </p>
          <div class="social-accounts flex">
            <img
              src="../assets/images/linkedin.svg"
              alt="linkedin"
              class="me-2"
            />
            <img
              src="../assets/images/instagram.svg"
              alt="instagram"
              class="me-2"
            />
            <img
              src="../assets/images/facebook.svg"
              alt="facebook"
              class="me-2"
            />
            <img src="../assets/images/twitter.svg" alt="twitter" />
          </div>
        </div>
        <div class="flex justify-around">
          <div class="quicklinks flex flex-col text-white">
            <h4 class="mb-4 text-lg font-medium">Quick links</h4>
            <a href="#" class="mb-2 text-sm text-gray01">Sign Up</a>
            <a href="#" class="mb-2 text-sm text-gray01">Log In</a>
            <a href="#" class="mb-2 text-sm text-gray01">Blogs</a>
            <a href="#" class="mb-2 text-sm text-gray01">Reviews</a>
            <a href="#" class="text-sm text-gray01">Watch videos</a>
          </div>
          <div class="company flex flex-col text-white">
            <h4 class="mb-4 text-lg font-medium">Company</h4>
            <a href="#" class="mb-2 text-sm text-gray01">About Us</a>
            <a href="#" class="mb-2 text-sm text-gray01">Courses</a>
            <a href="#" class="mb-2 text-sm text-gray01">Terms & Conditions</a>
            <a href="#" class="mb-2 text-sm text-gray01">Privacy Policy</a>
            <a href="#" class="mb-2 text-sm text-gray01">Partnership</a>
            <a href="#" class="text-sm text-gray01">Become a mentor</a>
          </div>
          <div class="courses flex flex-col">
            <h4 class="mb-4 text-lg font-medium text-white">Courses</h4>
            <a href="#" class="mb-2 text-sm text-gray01"
              >School of Engineering Technology</a
            >
            <a href="#" class="mb-2 text-sm text-gray01"
              >School of Computing Technology</a
            >
            <a href="#" class="text-sm text-gray01">School of Business</a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between px-11 pb-10">
      <img src="../assets/images/download.svg" alt="download" class="w-80" />
      <button
        class="bg-transparent border h-11 px-12 border-primary text-primary rounded font-light text-sm"
      >
        Contact Us
      </button>
    </div>
    <p class="copyright bg-copyright py-4 text-center text-sm text-gray02">
      Copyright © 2023 Madesoft Academy. All rights reserved
    </p>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.info {
  width: 27px;
}
.social-accounts img {
  width: 45px;
}
</style>