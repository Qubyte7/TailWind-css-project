/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./build/*.html","./build/js/*.js"], //this can also be written like specified under
  content: ["./build/**/*.{html,js}"],//but note that using this way we could not use it with only html we need to have another file extension 
  theme: {
    extend: {
      screens:{
        colors:{
          papayawhip:{
            light:'#fef4e4',
            DEFAULT:'#ffefd5',
            dark:'#fee5bc',
          },
        },
        'widescreen':{'raw':'(min-aspect-ratio: 3/2)'},
        'tallscreen':{'raw':'(max-aspect-ratio: 13/20)'},
      },
      keyframes:{
        'open-menu':{
          '0%':{transform: 'scaleY(0)'},
          '80%':{transform: 'scaleY(1.2)'},
          '100%':{transform: 'scaleY(1)'},
        },
      },
     animation:{
      'open-menu':'open-menu 0.5s ease-in-out forwards',
     } 
    },
  },
  plugins: [],
}

