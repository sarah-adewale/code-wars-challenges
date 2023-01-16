/*
write a fucntion 'whisper that takes in a sentence and returns a new
sentence in all lowercase letters with letter "shh..." at the beginning. the function
should also remove exclamation mark at the end of the sentence if there is
one

example
input: "The KITTENS are SLEEPING!"
output: shh... the kittens are sleeping

string
string in lowercase

create a function
change all string to lowercase
remove !
return the str starting with shh
*/

function whisper(str){
    str = str.toLowerCase()
    if(str.endsWith('!')){
       let newStr = str.slice(0, -1)
        return `ssh...${newStr}`
    }
}

console.log(whisper('The KITTENS are SLEEPING!'))