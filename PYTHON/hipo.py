print ("Merhabalar Tam Kenarlari Tam Sayi Olan Ucgen Simulatorine Hos Geldiniz!!!")
a=1
b=1
c=1
z=0
kokucgen=input("Sadece Kok Ucgenlerin mi Bulunmasini Istersiniz? \n 1-Evet \n 2-Hayİr \n Lutfen Birini Seciniz: \n")
maxkenar=int(input("--Lutfen Bir Kenarin Maximum Ne Kadar Olmasini Istediginizi Giriniz: "))
print ("Sayilariniz Bunlardir:")
for a in range (0,maxkenar+1):
    for b in range (0,a):
        for c in range (0,b):
            z=0
            if kokucgen=="evet" or kokucgen=="Evet" or kokucgen=="1":
                for x in range (2,c):
                    if a/x*x==a and b/x*x==b and c/x*x==c:
                        z=1
                    if x==c-1 and z==0:
                        if c*c+b*b==a*a:
                            print (c, b, a)
            else:
                if c*c+b*b==a*a:
                    print (c, b, a)


