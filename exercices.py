# thermometre et change

# def thermometer(celsius):
#     return (celsius *9/5)+32

# celsius = 18.5
# print(str(celsius)+ "degrees Celsius are" + str(thermometer(21.5))+ "degrees Farehneit")


# def change(eur):
#     text1 = "the equivalent of "
#     text2 = 'euros in swiss francs is' 
#     return text1 + str(chf) + text2 + str(round((chf/1.1),2))

# chf = 4000
# print(change(chf))

# inputs

# print("please enter your name")
# name = input()

# print("your name is" +name)

# name = input("Please enter your name: ")
# print("Your name is " + name)

# x = input("Enter a number: ")
# y = input("Enter a second number: ")
# result = int(x) + int(y)

# message = "The result of " + x + " plus " + y + " is " + str(result)

# print(message)


print("enter a temperature in celsius")

def temp(input):
    return (input*9/5)+32


celsius = float(input())

print("the equivalent in F is : " + str(temp(celsius)))
