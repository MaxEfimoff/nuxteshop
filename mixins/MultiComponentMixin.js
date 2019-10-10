import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      activeStep: 1,
      steps: []
    }
  },
  computed: {
    ...mapState('category', ['categories']),
    stepsLength() {
      return this.steps.length;
    },
    isLastStep() {
      return this.activeStep === this.steps.length;
    },
    isFirstStep() {
      return this.activeStep === 1;
    },
    progress() {
      return `${100 / this.stepsLength * this.activeStep}%`
    },
    activeComponent() {
      return this.steps[this.activeStep - 1]
    }
  },
  methods: {
    incrementStep() {
      return this.activeStep++;
    },
    decrementStep() {
      return this.activeStep--;
    },
    navigateTo(step) {
      this.activeStep = step;
    },
    activeComponentClass(step) {
      return this.activeStep === step ? 'is-active' : ''
    }
  }
}