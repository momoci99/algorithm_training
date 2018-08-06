# Lesson04_CountingElements_MaxCounters
# https://app.codility.com/demo/results/trainingKTBZUW-C86/

# you can write to stdout for debugging purposes, e.g.
# print "this is a debug message"

def solution(N, A):
    # write your code in Python 2.7
    l = len(A)
    count = [0] * N
    max = 0
    last = 0
    for i in xrange(l):
        num = A[i]-1
        if num == N:
            last = max
        elif 0 <= num and num < N :
            if count[num] < last: count[num] = last
            count[num] += 1
            if max < count[num]: max = count[num]
    
    for i in xrange(N):
        if count[i] < last:
            count[i] = last
    
    return count