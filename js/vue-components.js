/** Globally shared data among all components **/
var globalState = {
    thoughts: []
};

const RandomWordArray = [
    'dog', 'funny', 'pizza', 'ketchup', 'water', 'banana', 'sofa', 'cigarette', 'beauty', 'style',
    'soda', 'fresh', 'champion', 'electricity', 'automatic', 'chicken', 'vampire',
    'school', 'reading', 'video', 'thing', 'word', 'nothing', 'without', 'worries', 'advancement',
    'castle', 'biology', 'math', 'sport', 'trousers', 'empty', 'everybody'
];

const ImagesArray = [
    'aldain-austria-316143.jpg',
    'caleb-george-316073.jpg',
    'dawid-zawila-275831.jpg',
    'drew-graham-344554.jpg',
    'gdtography-310706.jpg',
    'jeff-sheldon-264922.jpg',
    'octavio-fossatti-37556.jpg',
    'paul-279366.jpg',
    'rob-bates-317576.jpg',
    'sabri-tuzcu-331970.jpg'
]



/**
 * Shows all thoughts that were typed in by the user.
 */
const ShowThoughtsComponent = {
    template: `
        <div class='row'>
            <div class='col-md-6 col-md-push-3'>
                <span v-for='thought in global.thoughts' class='thought'>
                    {{thought}}
                </span>
            </div>
        </div>
`,
    data: function () {
        return {
            global: globalState
        }
    },
    methods: {
        
    }
}



/** Input Components **/

/**
 * Template to view a simple text using the 'simpleText' data attribute.
 */
const SimpleTextTemplate = `
    <div class='row text-center'>
        <h1 style='position: fixed; top: 25%; width: 100%'>{{simpleText}}</h1>
    </div>
`;


/**
 * Shows a random word.
 */
const WordComponent = {
    template: SimpleTextTemplate,
    data: function () {
        return {
            simpleText: 'unset'
        }
    },
    methods: {
        showNewInput: function () {
            this.simpleText = RandomWordArray[Math.floor(Math.random() * RandomWordArray.length)];
        }
    },
    created: function () {
        this.showNewInput();
    }
}

/**
 * Shows a random number between 0 - 100 inclusive.
 */
const NumberComponent = {
    template: SimpleTextTemplate,
    data: function () {
        return {
            simpleText: 'unset'
        }
    },
    methods: {
        showNewInput: function () {
            this.simpleText = '' + Math.floor(Math.random() * 101);
        }
    },
    created: function () {
        this.showNewInput();
    }
}

/**
 * Shows an image randomly chosen from /assets/images
 */
const ImageComponent = {
    // TODO define a max height for the image.
    template: `
        <div class='row'>
            <div class='col-md-8 col-md-push-2'>
                <img class='random-image' v-bind:src='randomImage' width='100%' height='100%'>
            </div>
        </div>
`,
    data: function () {
        return {
            randomImage: ''
        }
    },
    methods: {
        showNewInput: function () {
            this.randomImage = 'assets/images/' + ImagesArray[Math.floor(Math.random() * ImagesArray.length)];
        }
    },
    created: function () {
        this.showNewInput();
    }
}