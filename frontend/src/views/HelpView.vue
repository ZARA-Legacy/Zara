<template>
    <div class="container">
      <h1>Help</h1>
      <input  type="text"
        class="searInput" v-model="typedQuestion" placeholder="Type your question" />
      <button @click="fetchAnswer">Get Answer</button>
      <p v-if="answer">{{ answer }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import axios from 'axios';
  
  export default defineComponent({
    setup() {
      const typedQuestion = ref('');
      const answer = ref('');
  
      const fetchAnswer = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/question/one/${typedQuestion.value}`);
          answer.value = response.data.answer;
          console.log(typedQuestion,'typedQuestion')
          console.log(answer,'answer')
        } catch (error) {
          console.error(error);
        }
      };
  
      return {
        typedQuestion,
        answer,
        fetchAnswer,
      };
    },
  });
  </script>
  
  
  <style scoped>
  /* .container {
    background-image: url('https://static.zara.net/photos///contents/mkt/spots/ss23-help-customer/subhome-xmedia-10-north//w/1839/IMAGE-landscape-web-27470945-8c31-433a-9eaf-392114b6a91d-default_0.jpg?ts=1682518360676%27');
    background-repeat: no-repeat;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
  
  .searInput {
    margin-top: 1.6em;
    width: 40%;
    outline: none;
    border: none;
    border-bottom: 1px solid rgb(8, 8, 8);
    padding: 0.2em 0em;
    font-size: var(--font-size-heading-m-highlight);
    height: 44px;
    width: 100%;
    line-height: var(--line-height-heading-m-highlight);
    letter-spacing: var(--letter-spacing-heading-m-highlight);
    text-transform: uppercase;
    font-stretch: var(--font-stretch-normal);
    font-weight: var(--font-weight-medium);
}

  .head {
    margin-right: 1000px;
    margin-top: -120px;
  } */
  .container {
  background-image: url('https://static.zara.net/photos///contents/mkt/spots/ss23-help-customer/subhome-xmedia-10-north//w/1839/IMAGE-landscape-web-27470945-8c31-433a-9eaf-392114b6a91d-default_0.jpg?ts=1682518360676');
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.title {
  font-size: 32px;
  margin-bottom: 20px;
  color: #fff;
}

.searchInput {
  margin-top: 20px;
  width: 40%;
  outline: none;
  border: none;
  border-bottom: 1px solid #080808;
  padding: 10px 0;
  font-size: 20px;
  height: 44px;
  line-height: 24px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: transparent;
  color: #fff;
}

.searchButton {
  margin-top: 10px;
  padding: 12px 24px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.searchButton:hover {
  background-color: #0056b3;
}

.answer {
  margin-top: 20px;
  font-size: 18px;
  color: #fff;
}
  </style>
  