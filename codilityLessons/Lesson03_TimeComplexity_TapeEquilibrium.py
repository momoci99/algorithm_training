# Lesson03_TimeComplexity_TapeEquilibrium
# https://codility.com/demo/results/trainingWEJAA2-C7M/

# you can write to stdout for debugging purposes, e.g.
# print "this is a debug message"
def solution(A):
    # write your code in Python 2.7
    length = len(A)-1
    a1 = [A[0]] * length;
    a2 = [A[-1]] * length;
    for i in xrange(1, length):
        a1[i] = a1[i-1] + A[i]
        a2[-(i+1)] = a2[-i] + A[-(i+1)]

    min = 100000
    for i in xrange(length):
        diff = abs(a1[i]-a2[i])
        if diff < min:
            min = diff

    return min