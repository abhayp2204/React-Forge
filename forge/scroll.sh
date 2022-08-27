# !/bin/bash

# ! cd into the css directory
cd src/css

# ! Color of the scrollbar
COLOR=$1

# ! Insert the css
printf "\n\n::-webkit-scrollbar {\n\twidth: 0.6vw;\n}\n\n::-webkit-scrollbar-thumb {\n\tbackground-color: #$COLOR;\n\tborder-radius: 8px;\n}\n\n::-webkit-scrollbar-track {\n\tbackground-color: black;\n}" >> App.css

printf "Scrollbar with color #$COLOR has been added to your app."