export const unselector = {
  methods: {
    clear: function() {
      this.$emit("unselect");
    }
  }
};

export const containerMethods = {
  methods: {
    clear: function() {
      this.selected = null;
    },
    closeModal: function() {
      this.showModal = false;
    },
    enableAddMode() {
      this.selected = {};
    }
  }
};

export const rescaleCards = {
  methods: {
    rescaleCardsOnResize: function() {
      let width = document.getElementsByClassName("v-content__wrap")[0]
        .offsetWidth;
      switch (true) {
        case width < 600:
          this.cols = 12;
          break;
        case width > 600 && width < 960:
          this.cols = 6;
          break;
        case width > 960 && width < 1248:
          this.cols = 4;
          break;
        case width > 1248:
          this.cols = 3;
          break;
        default:
          this.cols = 3;
          break;
      }
    }
  }
};
