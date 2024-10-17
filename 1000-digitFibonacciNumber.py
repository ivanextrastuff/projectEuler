def fibonacci(n):
    if n < 2:
        return 1
    else:
        return fibonacci(n-2) + fibonacci(n-1)

n = 0
while fibonacci(n) < 10**1000:
    n = n + 1
    print(n+1)
print(n+1)