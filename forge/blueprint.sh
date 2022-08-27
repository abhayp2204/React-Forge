# !/bin/bash
file=$1
base=$(basename -- "$file")
name="${base%.*}"
shell=$name".sh"

# ! Display
echo
printf "FILE  : $file\n"
printf "BASE  : $base\n"
printf "NAME  : $name\n"
printf "SHELL : $shell\n"

sed 's/$/\\n/g' "$file" > temp.txt          # ! Append \n to the end of each line
sed -i 's/\"/\\\"/g' temp.txt               # ! Escape all double quotes (" to \")
sed -i 's/    /\\t/g' temp.txt              # ! Replace tabs with \t
cat temp.txt | tr -d "\r\n" > temp.txt      # ! Compress to one line

printf "# !/bin/bash" > $shell
printf "\n\nprintf \"" >> $shell
cat temp.txt >> $shell
printf "\" > $file" >> $shell

printf "\nCreated $shell!"