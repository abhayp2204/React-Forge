# !/bin/bash

# ! Recreate src
rm -r src
mkdir src
cd src
mkdir components
mkdir images

# ! index.js
printf "import React from \"react\"\nimport ReactDOM from \"react-dom/client\"\nimport App from \"./App\"\n\nconst root = ReactDOM.createRoot(document.getElementById(\"root\"));\nroot.render(\n\t<React.StrictMode>\n\t\t<App />\n\t</React.StrictMode>\n)\n" > index.js

# ! App.js
printf "import \"./css/App.css\"\n\nfunction App() {\n\treturn (\n\t\t<div className=\"App\">\n\t\t\tApp\n\t\t</div>\n\t);\n}\n\nexport default App" > App.js

# ! CSS
mkdir css
cd css
printf "* {\n\tfont-family: Arial, Helvetica, sans-serif;\n}" > App.css