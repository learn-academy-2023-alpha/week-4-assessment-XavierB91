# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
# psuedocode: I want to create a method
# what does this method do ? : it takes in a number and determines if the number is even or odd
# three test variables will be used, num1, num2,num3
num1 = 7
# Expected output: '7 is odd'
# '7 is odd'
num2 = 42
# Expected output: '42 is even'
# 42 is even
num3 = 221
# Expected output: '221 is odd'
# '221 is odd' 
# This method divides input by 2, If remainder is zero it prints even otherwise it prints odd
puts "Please enter a number:"
input = Integer(gets.chomp)
if input % 2 == 0
puts "is even"
else
puts " is odd"
end





# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
# psuedocode: what do I want to do ? :create a method
# what does this method do ? : this method will take in a string and remove all the vowels from the string
#  there will be 3 test variables 

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
# output ' Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
# 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'
# output: bby Rd


def removeVowelsV1 (text)
    result = ""
    text.split("").each do |char|
        if not "aeiou".include?(char.downcase)
            result += char
        end
    end 
    return result
end
puts removeVowelsV1 (beatles_album1)
puts removeVowelsV1 (beatles_album2)
puts removeVowelsV1 (beatles_album3)


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.
# psuedocode: what do I want to do ?: create method that takes a string and returns true if it is a
# palindrome, false if it is not. This method will be called palindrome? A palindrome is a string that is the same whether written 
# backward or forward. Assuming that there are no spaces; only lowercase letters will be given.
# method will take in a string as an argument.  I can manipulate the string with the .downcase builtin method  (which returns a copy of string with all uppercase letters replaced with their lowercase counterparts). Concurrently I can use strict equality and  the .reverse builtin method (reverse is a String class method in Ruby which is used to return a new string with the characters from the given string in reverse order) to compare and check against the provided variables to see if the string entered is a palindrome or not. I can use string interpolation to get the specific output message of "is a palindrome" or "is not a palindrome"

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
# output : "Racecar is a palindrome"
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
# output: "LEARN is not a palindrome"
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'
#  output :"Rotator is a palindrome"
 def palindrome? (string)
   if string.downcase == string.downcase.reverse
    "#{string} is a palindrome"
   elsif  string.downcase != string.downcase.reverse
    "#{string} is not a palindrome"
   end
 end
 p palindrome?(palindrome_tester1)
 p palindrome?(palindrome_tester2)
 p palindrome?(palindrome_tester3)