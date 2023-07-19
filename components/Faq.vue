<template>
  <div class="faq_wrapper">
    <div class="faq_field_wrapper">
      <div class="faq_field">
        <div class="open_faq" @click="isOpen = !isOpen">
          <h3 style="font-size: 17px">
            {{ title }}
            <i
              class="fa-solid fa-plus float-right"
              :class="isOpen ? 'rotate' : ''"
            ></i>
          </h3>
          <div
            class="invisible"
            style="font-size: 13px"
            :class="isOpen ? 'visible' : ''"
          >
            {{ subhead }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from "#imports";

defineProps(["title", "subhead"]);

const isOpen = ref(false);
</script>
  
  
  
<style scoped>
.faq_field {
  border-bottom: 1px solid #e7eaee;
  margin: 10px 0;
}

.faq_field_wrapper {
  margin-top: 29px;
}

.invisible {
  visibility: hidden;
  opacity: 0;
  height: 0;
  transition: opacity 0.3s, height 0.3s, padding 0.3s, visibility 0.3s;
}

.visible {
  visibility: visible;
  height: 120px;
  opacity: 1;
  padding: 10px 20px;
}

h3 {
  /* display: flex;
    align-items: center;
    justify-content: space-around; */
  padding: 10px 24px 14px;
  margin: 8px 0;
}

.open_faq {
  cursor: pointer;
}

.rotate {
  transform: rotate(45deg);
}

.fa-plus {
  transition: transform;
  color: black;
}
</style>