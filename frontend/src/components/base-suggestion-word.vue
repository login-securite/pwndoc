<template>
  <span class="suggestions--block">
    <ul v-if="showSuggestions" class="suggestions" contentEditable="false">
      <li class="suggestions--close" @click="handleClose">       
          <icon-close />      
      </li>
      <li v-for="suggestion in suggestions"
          :key="suggestion.value">
        <p @click="handleSelectSuggestion(word, suggestion.value)">
          {{ suggestion.value }}
        </p>
      </li>
    </ul>
    <span class="error--spelling"
          @click="openSuggestion"
          @contextmenu.prevent="openSuggestion">
      {{ word }}
    </span>
  </span>
</template>

<script>
export default {
  name: 'BaseSuggestionWord',
  props: {
    word: {
      type: String,
      required: true,
    },
    suggestions: {
      type: [Array, Object],
      required: true,
    },
  },
  data() {
    return {
      showSuggestions: false,
    };
  },
  methods: {
    handleClose() {
      this.showSuggestions = false;
    },
    openSuggestion() {
      this.showSuggestions = true;
    },
    handleSelectSuggestion(word, suggestion) {
      this.$emit('select', { word, suggestion });
    },
  },
};
</script>
