
Logger.useDefaults();


const AvailableComponents = [
    WordComponent,
    NumberComponent,
    ImageComponent
];




// set up vue component
var app = new Vue({
    el: "#app",
    data: {
        currentInputComponent: WordComponent,
        global: globalState,
        /* Currently typed thought */
        curThought: ''
    },
    mounted: function () {
        this.showNewInput();
    },
    methods: {
        /**
         * Switches through available components.
         */
        showNewInput: function () {
            var curComp = this.currentInputComponent;
            do {
                this.currentInputComponent = AvailableComponents[Math.floor(Math.random() * AvailableComponents.length)];
                // FIXME if the same component is added nothing changes - can't even
                // call the newInputMethod of the child.
            } while (curComp == this.currentInputComponent);
            
            // focus thought input
            this.$refs.thoughtInput.focus();
        },
        /**
         * Shows all typed in thoughts.
         */
        showThoughts: function () {
            this.currentInputComponent = ShowThoughtsComponent;
            // focus thought input
            this.$refs.thoughtInput.focus();
        },
        /**
         * Adds a thought, clears the input field and focuses the input field.
         */
        addThought: function () {
            // add thought
            this.global.thoughts.push(this.curThought.trim());
            // clear thought
            this.curThought = '';
            // focus thought input
            this.$refs.thoughtInput.focus();
        }
    }
});



$(function () {
    
});