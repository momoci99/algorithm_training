# Lesson04_CountingElements_FrogRiverOne
# https://app.codility.com/demo/results/trainingTK5PWB-W82/

# you can write to stdout for debugging purposes, e.g.
# print "this is a debug message"

def solution(X, A):
    # write your code in Python 2.7
    time = [100001] * X
    for i in xrange(len(A)):
        if A[i]<=X and i<time[A[i]-1]:
            time[A[i]-1] = i
    
    res = 0
    for i in xrange(len(time)):
        if time[i] > res : res = time[i]
        
    if res>100000 : res = -1
    
    return res