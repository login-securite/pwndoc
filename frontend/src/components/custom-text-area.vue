<template>
  <div class="input--field">
    <p class="input--field-label">
      {{ label }}
    </p>
    <!-- <template v-if="!hasFocus && value === ''"> -->
    <!--   <p class="placeholder">{{ placeholder }}</p> -->
    <!-- </template> -->
    <div
      ref="editable"
      class="spelling--input box--spelling"
      contentEditable="true"
      spellcheck="false"
      v-on="listeners">
      {{value}}
        <base-suggestion-word
                              :key="suggestion.start"
                              :suggestions="suggestion.suggestions"
                              :word="suggestion.phrase"
                               />
      <template v-for="suggestion in textWithCorrections">
	YOLOOOO
        {{ suggestion.suggestions === undefined ? suggestion.phrase : "" }}
        <base-suggestion-word v-if="suggestion.suggestions !== undefined"
                              :key="suggestion.start"
                              :suggestions="suggestion.suggestions"
                              :word="suggestion.phrase"
                               />
      </template>
    </div>
  </div>
</template>

<script>
import parser from '@/utils/spellParser';
import BaseSuggestionWord from '@/components/base-suggestion-word';

export default {
  name: 'BaseInputSpelling',
  components: {
    BaseSuggestionWord
  },
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      hasFocus: false,
      textWithCorrections: [{"phrase": "toto", "start": "t", "suggestions": ["a","b","c"]}, {"phrase": "samere"}],
    };
  },
  computed: {
    listeners() {
      return { ...this.$listeners, input: this.onInput };
    },
    isActive() {
      return ((this.value === 0 || !!this.value) || this.hasFocus || this.placeholder);
    },
  },
  watch: {
    suggestions(newSuggestions) {
      console.log("NEW SUGGESTIONS");
      console.log(newSuggestions);
      const element = this.$el.getElementsByClassName('spelling--input');
      element[0].textContent = '';
      this.textWithCorrections = parser.prepareWordListWithSuggestions(this.value, newSuggestions);
    },
  },
mounted() {
    this.$refs.editable.innerText = this.value;
  },
  methods: {
    onInput(e) {
      const text = parser.parseHtmlToText(e.target);
      this.$emit('input', text);
    },
    handleChangeWord({ word, suggestion }) {
      this.textWithCorrections = parser.removeFromListWithSuggestions(
        this.textWithCorrections, word, suggestion,
      );
      setTimeout(() => {
        const element = this.$el.getElementsByClassName('spelling--input');
        const text = parser.parseHtmlToText(element[0]);
        this.$emit('input', text);
      }, 100);
    },
  },
};
</script>
