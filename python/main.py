print("****** KBC *******")

questions=[ "What is the chemical symbol for water?","Who is known as the father of modern physics and is famous for his theory of relativity?"]


options=[["h2o","o2","n2","co2"],["einstein","newton","nehru","bose"]]

answers=[1,1]

levels=[1000,2000,3000]
money =0
for i in range(len(questions)):
    print("\n\nthe ",i, "th question is: ")
    print(questions[i])
    print("the option is: ")
    print(options[i])
    ans= int(input("enter the right answer: "))

    if (ans == answers[i]):
        print(str(answers[i]))
        print("your answer is right ")
        print(f"\nyou won {levels[i]} Rs.")
        if(levels[i]==2000):
            money=2000
        print("your next question is: ")

    else:
        print(answers[i])
        print("your answer is wrong ,")
        break;    

print(f"Your take home amount is: {money}")



