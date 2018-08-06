# Lesson04_CountingElements_PermCheck
# https://app.codility.com/demo/results/trainingZ4RQ98-ZC3/

# you can write to stdout for debugging purposes, e.g.
# print "this is a debug message"

def solution(A):
    # write your code in Python 2.7
    l = len(A)
    if l == 0: return 0
    A.sort()
    for i in xrange(l):
        if A[i] != i+1 : return 0
    return 1