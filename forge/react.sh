# !/bin/bash
printf "Running react.sh ...\n\n"
cd src

# Create the components directory
if !([ -e "components" ])
    then
        mkdir components;
        echo "Created components directory"
fi

# for FILE in ./components/*;
for arg in "$@";
    do
        FILE="components/${arg}.js"

        if !([ -e $FILE ])
        then 
            # rfce
            printf "import React from \"react\"\n\nfunction $arg() {\n\treturn (\n\t\t<div>$arg</div>\n\t)\n}\n\nexport default $arg\n" > "components/${arg}.js"
            sed -i "1s/^/import $arg from \".\/components\/${arg}\"\n/" App.js
            echo "Created $arg"
        fi
done

printf "\nDone!"