# Lesson03_TimeComplexity_PermMissiongElem
# https://app.codility.com/demo/results/trainingF34ZCK-B7Y/

# you can write to stdout for debugging purposes, e.g.
# print "this is a debug message"

def solution(A):
    # write your code in Python 2.7
    A.sort()
    for i in xrange(len(A)):
        if i != A[i]-1: return i+1
    return len(A)+1