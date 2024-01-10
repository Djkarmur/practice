f=open("Mydata",'w')

f.write("Hello Guys ");
f.writelines("Something is here /  python /")

f2=open("post page.png",'rb')
f3=open("Newpic.jpg",'wb')

for i in f2:
    f3.write(i)

