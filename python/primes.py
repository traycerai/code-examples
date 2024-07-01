def sum_of_primes(n):
    def is_prime(num):
        if num <= 1:
            return False
        for i in range(2, num):
            if num % i == 0:
                return False
        return True

    total = 0
    for i in range(2, n + 1):
        if is_prime(i):
            total += i
    return total
