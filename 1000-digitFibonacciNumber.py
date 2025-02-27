from functools import lru_cache

@lru_cache
def fibonacci(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    else:
        return fibonacci(n-2) + fibonacci(n-1)

n = 0
while len(str(fibonacci(n))) < 1000:
    n += 1
print(n, fibonacci(n))